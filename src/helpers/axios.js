import axios from "axios";

export const Axios = axios.create({
  withCredentials: true,
  baseURL: "http://54.196.139.145:8080",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});
