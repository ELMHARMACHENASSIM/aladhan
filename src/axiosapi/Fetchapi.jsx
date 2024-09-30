import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://api.aladhan.com/v1",
  timeout: 3000,
});

export default customAxios;
