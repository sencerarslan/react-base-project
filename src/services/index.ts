import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `https://mmo-games.p.rapidapi.com`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "878dbe3337msh089b6030e0c962cp134344jsn854bffda60eb",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
  },
});
