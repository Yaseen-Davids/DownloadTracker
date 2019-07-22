import React, { createContext, useState, useMemo } from "react";
import { Loading, SeriesType } from "../lib/types";
import { GetSeries, PostSeries, DeleteSeries, UpdateSeries } from "../lib/api/series";

const defaultData: any[] = [];

export type SeriesContextState = {
  loading: Loading;
  hydrateSeries(): void;
  GetSeriesData(): SeriesType[];
  PostSeriesData(seriesData: Partial<SeriesType>): void;
  UpdateSeriesData(seriesData: Partial<SeriesType>, id: number): void;
  DeleteSeriesData(id: number): void;
};

export const SeriesContext = createContext<SeriesContextState>({
  loading: { loading: false, loaded: false, error: null },
  hydrateSeries: () => { },
  GetSeriesData: () => [],
  PostSeriesData: () => { },
  UpdateSeriesData: () => { },
  DeleteSeriesData: () => { },
});

export const SeriesProvider = ({ children }: any) => {
  const [series, setSeries] = React.useState<SeriesType[]>(defaultData);
  const [loading, setLoading] = useState<Loading>({ loading: false, loaded: false, error: null });

  const hydrateSeries = async () => {
    try {
      setLoading({
        loading: true,
        loaded: false,
        error: null,
      });
      const data = await GetSeries();
      setSeries(data);
      setLoading({
        loading: false,
        loaded: true,
        error: null,
      });
    } catch (e) {
      setLoading({
        loading: false,
        loaded: false,
        error: e,
      });
    }
  }

  const value = useMemo(() => ({
    loading,
    hydrateSeries,
    series,
    GetSeriesData: () => {
      if (loading.loaded && !loading.loading) {
        return series;
      }
      if (!loading.loading && !loading.error) {
        hydrateSeries();
      }
      return [];
    },
    PostSeriesData: async (seriesData: SeriesType) => {
      try {
        setLoading({
          loading: true,
          loaded: false,
          error: null,
        });
        await PostSeries(seriesData);
        setLoading({
          loading: false,
          loaded: true,
          error: null,
        });
      } catch (e) {
        setLoading({
          loading: false,
          loaded: false,
          error: e,
        });
      }
    },
    UpdateSeriesData: async (seriesData: SeriesType, id: number) => {
      try {
        setLoading({
          loading: true,
          loaded: false,
          error: null,
        });
        await UpdateSeries(seriesData, id);
        setLoading({
          loading: false,
          loaded: true,
          error: null,
        });
      } catch (e) {
        setLoading({
          loading: false,
          loaded: false,
          error: e,
        });
      }
    },
    DeleteSeriesData: async (id: number) => {
      try {
        setLoading({
          loading: true,
          loaded: false,
          error: null,
        });
        await DeleteSeries(id);
        setLoading({
          loading: false,
          loaded: true,
          error: null,
        });
      } catch (e) {
        setLoading({
          loading: false,
          loaded: false,
          error: e,
        });
      }
    },
    setSeries,
  }), [series, loading]);

  return (
    <SeriesContext.Provider value={value}>
      {children}
    </SeriesContext.Provider>
  )
}
