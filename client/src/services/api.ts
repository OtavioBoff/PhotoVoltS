import axios from "axios";
// const ip = "192.168.0.13";
const api = axios.create({
  baseURL: `http://172.20.7.51:3000`,
});

export default api;
