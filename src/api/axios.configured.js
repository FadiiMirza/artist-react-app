import axios from "axios";

const axiosConfigured = axios.create({
  baseURL: "https://rest.bandsintown.com",
  params: {
    app_id: "app_id",
  },
});

export default axiosConfigured;
