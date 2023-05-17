import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `https://www.domain.com`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
