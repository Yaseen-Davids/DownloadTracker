import React, { useContext } from "react";
import { MoviesType } from "../../lib/types";
import { MoviesContext } from "../../contexts/MoviesContext";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Loading from "../Loading";
import MUIDataTable from "mui-datatables";

interface MoviesProps {
  // movies: MoviesType[];
}

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {},
//   }),
// );


const Movies = function (props: MoviesProps) {

  const { loading, GetMoviesData, DeleteMovieData } = useContext(MoviesContext);
  const movies: MoviesType[] = GetMoviesData();

  const columns = [
    { name: "title", label: "Name" },
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
        title={"Movies to download"}
        data={movies}
        columns={columns}
        options={options}
      />
    </div>
  )
}

export default Movies;