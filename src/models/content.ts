export interface ContentResponse {
  title?: string;
  name?: string;
  overview: string;
  release_date?: string;
  first_air_date?: string;
  id: number;
  media_type: string;
  poster_path: string;
  vote_average: string;
  genre_ids: number[];
}

// export type ContentResponse<T = string | number | number[]> = {
//   [key: string]: T;
// }[];
