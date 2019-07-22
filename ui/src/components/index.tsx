import React from "react";
import "../stylesheets/style.css";
import Movies from "./movies/Movies";
import Series from "./series/Series";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {},
//   }),
// );


const Main = () => {

  // const classes = useStyles();

  return (
    <div className="grid-container">
      <div className="series-main">
        <Series />
      </div>
      <div className="movies-main">
        <Movies />
      </div>
    </div>
  )
}

export default Main;