import axios from "axios";
import { ContentResponse } from "../models/content";

const API_ENDPOINT = "https://api.themoviedb.org/3/";
export const api = axios.create({
  baseURL: API_ENDPOINT,
});

let url: string;
export const fetchContent = async (type: string) => {
  console.log("another one!");
  if (type === "trending") {
    url =
      API_ENDPOINT + `${type}/all/day?api_key=${process.env.REACT_APP_API_KEY}`;
  } else if (type === "movie") {
    url =
      API_ENDPOINT +
      `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
  } else if (type === "tv") {
    url =
      API_ENDPOINT +
      `discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`;
  }

  const response = await api.get(url);
  const data: ContentResponse[] = response.data.results;
  console.log(data);
  return data;
};
