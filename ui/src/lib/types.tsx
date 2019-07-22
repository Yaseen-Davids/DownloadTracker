export type MoviesType = {
  id: number;
  title: string;
  created_at: string;
}

export type SeriesType = {
  id: number;
  title: string;
  season: number;
  episode: number;
  created_at: string;
}

export type Loading = {
  loading: boolean;
  loaded: boolean;
  error: null;
}