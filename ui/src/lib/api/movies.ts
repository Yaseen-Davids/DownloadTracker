import { request } from "./base";
import { MoviesType } from "../types";

export const GetMovies = async () => {
  const res = await request("movies");
  const data = await res.json();
  return data;
}

export const PostMovie = async (object: MoviesType) => {
  const options = {
    body: {
      title: object.title,
      created_at: object.created_at,
    },
    method: "POST",
  }
  const res = await request("movies", options);
  const data = await res.json();
  return data;
};

export const UpdateMovie = async (object: MoviesType, id: number) => {
  const options = {
    body: {
      title: object.title,
      created_at: object.created_at,
    },

    method: "PUT",
  }
  const res = await request(`movies/${id}`, options);
  const data = await res.json();
  return data;
};

export const DeleteMovie = async (id: number) => {
  const options = {
    method: "DELETE",
  }
  const res = await request(`movies/${id}`, options);
  const data = await res.json();
  return data;
};