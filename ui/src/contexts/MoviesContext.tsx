import React, { createContext, useState, useMemo } from "react";
import { Loading, MoviesType } from "../lib/types";
import { GetMovies, PostMovie, DeleteMovie, UpdateMovie } from "../lib/api/movies";

const defaultData: any[] = [];

export type MoviesContextState = {
  loading: Loading;
  hydrate(): void;
  GetMoviesData(): MoviesType[];
  PostMovieData(seriesData: Partial<MoviesType>): void;
  UpdateMovieData(seriesData: Partial<MoviesType>, id: number): void;
  DeleteMovieData(id: number): void;
};

export const MoviesContext = createContext<MoviesContextState>({
  loading: { loading: false, loaded: false, error: null },
  hydrate: () => { },
  GetMoviesData: () => [],
  PostMovieData: () => { },
  UpdateMovieData: () => { },
  DeleteMovieData: () => { },
});

export const MoviesProvider = ({ children }: any) => {
  const [movies, setMovies] = React.useState<MoviesType[]>(defaultData);
  // const [movies, setMovies] = React.useState<MoviesType[]>(defaultData);
  const [loading, setLoading] = useState<Loading>({ loading: false, loaded: false, error: null });

  const hydrate = async () => {
    try {
      setLoading({
        loading: true,
        loaded: false,
        error: null,
      });
      const data = await GetMovies();
      setMovies(data);
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
    hydrate,
    movies,
    GetMoviesData: () => {
      if (loading.loaded && !loading.loading) {
        return movies;
      }
      if (!loading.loading && !loading.error) {
        hydrate();
      }
      return [];
    },
    PostMovieData: async (moviesData: MoviesType) => {
      try {
        setLoading({
          loading: true,
          loaded: false,
          error: null,
        });
        await PostMovie(moviesData);
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
    UpdateMovieData: async (moviesData: MoviesType, id: number) => {
      try {
        setLoading({
          loading: true,
          loaded: false,
          error: null,
        });
        await UpdateMovie(moviesData, id);
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
    DeleteMovieData: async (id: number) => {
      try {
        setLoading({
          loading: true,
          loaded: false,
          error: null,
        });
        await DeleteMovie(id);
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
    setMovies,
  }), [movies, loading]);

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  )
}
