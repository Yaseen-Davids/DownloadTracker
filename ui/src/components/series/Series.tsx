import React from "react";
import { SeriesType } from "../../lib/types";
import { SeriesContext } from "../../contexts/SeriesContext";
import Loading from "../Loading";

interface SeriesProps {
  // series: SeriesType[];
}

const Series = (props: SeriesProps) => {

  const { loading, GetSeriesData, DeleteSeriesData } = React.useContext(SeriesContext);
  const series: SeriesType[] = GetSeriesData();
  const [edit, setEdit] = React.useState(false);

  const CreateNew = async () => {
    if (edit) {
      console.log("Saving...")
    }
    setEdit(!edit);
  };

  const DeleteOne = async (id: number) => {
    console.log(`Deleting...`);
  };

  if (!loading.loaded) {
    return (
      <Loading />
    )
  }


  return (
    <div className="series-main">
      <div className="series-header">
        <p className="series-header-title">Series</p>
        <button className="series-header-button" onClick={() => CreateNew()}>{!edit ? "Add New" : "Save"}</button>
      </div>
      <div className="series-body">
        {edit &&
          <div className="add-new-main">
            <div className="add-new-name">
              <input type="text" placeholder="Enter series name" />
            </div>
            <div className="add-new-season">
              <input type="number" placeholder="Enter season" />
            </div>
            <div className="add-new-episode">
              <input type="number" placeholder="Enter episode" />
            </div>
          </div>
        }
        <div className="series-body-content">
          {series.map((item, sKey) => {
            return (
              <div key={sKey} className="series-item">
                <p className="series-title">
                  {item.title}
                </p>
                <p className="series-info">
                  <span className="series-info-season series-info-text">S{item.season}</span>
                  <span className="series-info-text">E{item.episode}</span>
                </p>
                <span className="series-delete">
                  <button onClick={() => DeleteOne(item.id)}>Delete</button>
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Series;