import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      border: "none",
      flex: "1"
    },
  }),
);

const Loading = () => {

  const classes = useStyles();

  return (
    <div className={classes.root} >
      <CircularProgress />
    </div>
  )
}

export default Loading;