import axios from "axios";

export const Axios = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
