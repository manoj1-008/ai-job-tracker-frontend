import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-job-tracker-fl2t.onrender.com/api",
  withCredentials: true,
});

export default api;