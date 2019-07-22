import React from "react";
import { SeriesType } from "../../lib/types";
import { SeriesContext } from "../../contexts/SeriesContext";
import Loading from "../Loading";
import Table from "../Table";

interface SeriesProps {
  // series: SeriesType[];
}

const Series = (props: SeriesProps) => {

  const { loading, GetSeriesData, DeleteSeriesData } = React.useContext(SeriesContext);
  const series: SeriesType[] = GetSeriesData();

  const columns = [
    { name: "title", label: "Name" },
    { name: "season", label: "Season" },
    { name: "episode", label: "Episode" },
    { name: "created_at", label: "Date" },
  ];

  const DeleteSeries = (id: number) => {

  }

  if (!loading.loaded) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <Table columns={columns} data={series} delete={DeleteSeriesData} />
    </div>
  )
}

export default Series;