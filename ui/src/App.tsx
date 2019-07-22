import React from "react";
import { SeriesProvider } from "./contexts/SeriesContext";
import { MoviesProvider } from "./contexts/MoviesContext";
import Main from "./components/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    navbar: {
      backgroundColor: "#2196f3",
    },
  }),
);

const App = () => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            To download
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <SeriesProvider>
        <MoviesProvider>
          <Main />
        </MoviesProvider>
      </SeriesProvider>
    </React.Fragment>
  )
}

export default App;