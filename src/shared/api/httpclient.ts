import axios from "axios";

export const PATH_URL = {
  baseURL: "https://rickandmortyapi.com/api",
  ENDPOINT:"/character/"
}

export const httpClient = axios.create({
  baseURL: PATH_URL.baseURL
});
