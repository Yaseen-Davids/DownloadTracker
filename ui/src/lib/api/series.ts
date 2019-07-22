import { request } from "./base";
import { SeriesType } from "../types";

// headers: {
//   "Accept": "application/json",
//   "Content-Type": "application/json"
// },

export const GetSeries = async () => {
  const res = await request("series");
  const data = await res.json();
  return data;
}

export const PostSeries = async (object: SeriesType) => {
  const options = {
    body: {
      title: object.title,
      season: object.season,
      episode: object.episode,
      created_at: object.created_at,
    },
    method: "POST",
  }
  const res = await request("series", options);
  const data = await res.json();
  return data;
};

export const UpdateSeries = async (object: SeriesType, id: number) => {
  const options = {
    body: {
      title: object.title,
      season: object.season,
      episode: object.episode,
      created_at: object.created_at,
    },
    method: "PUT",
  }
  const res = await request(`series/${id}`, options);
  const data = await res.json();
  return data;
};

export const DeleteSeries = async (id: number) => {
  const options = {
    method: "DELETE",
  }
  const res = await request(`series/${id}`, options);
  const data = await res.json();
  return data;
};