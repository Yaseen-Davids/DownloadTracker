import React, { useContext } from "react";
import { MoviesType } from "../../lib/types";
import { MoviesContext } from "../../contexts/MoviesContext";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Loading from "../Loading";
import Table from "../Table";

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

  const DeleteMovies = (id: number) => {
    
  }

  if (!loading.loaded) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      <Table columns={columns} data={movies} delete={DeleteMovieData} />
    </div>
  )
}

export default Movies;