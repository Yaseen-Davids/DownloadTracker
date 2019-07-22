import React from "react";
import { SeriesProvider } from "./contexts/SeriesContext";
import { MoviesProvider } from "./contexts/MoviesContext";
import Main from "./components/index";

const App = () => {

  return (
    <React.Fragment>
      <SeriesProvider>
        <MoviesProvider>
          <Main />
        </MoviesProvider>
      </SeriesProvider>
    </React.Fragment>
  )
}

export default App;