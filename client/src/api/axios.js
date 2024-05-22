import axios from "axios";

const BASE_URL =
  "https://vercel.com/princes-projects-1842cd2f/kgp-play/9Q9QDhH82LUT6DThsMLv1AU6Yq5N";
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
