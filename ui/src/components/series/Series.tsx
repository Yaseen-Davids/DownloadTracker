import React from "react";
import { SeriesType } from "../../lib/types";
import { SeriesContext } from "../../contexts/SeriesContext";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Loading from "../Loading";
import MUIDataTable from "mui-datatables";

interface SeriesProps {
  // series: SeriesType[];
}

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {},
//   }),
// );

const Series = (props: SeriesProps) => {

  const { loading, GetSeriesData, DeleteSeriesData } = React.useContext(SeriesContext);
  const series: SeriesType[] = GetSeriesData();
  // const classes = useStyles();

  const columns = [
    { name: "title", label: "Name" },
    { name: "season", label: "Season" },
    { name: "episode", label: "Episode" },
    { name: "created_at", label: "Date" },
  ];

  const options: any = {
    print: false,
    download: false,
    viewColumns: false,
  };

  if (!loading.loaded) {
    return (
      <Loading />
    )
  }
  return (
    <div>
      <MUIDataTable
        title={"Series to download"}
        data={series}
        columns={columns}
        options={options}
      />
    </div>
  )
}

export default Series;