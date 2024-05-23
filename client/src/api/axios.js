import axios from "axios";

const BASE_URL =
  "https://kgp-play-git-main-princes-projects-1842cd2f.vercel.app/";
export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
  credentials: "include",
});
