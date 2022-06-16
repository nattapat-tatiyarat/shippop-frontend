import httpClient from "../config/httpClient";

export default {
  getAll: (data) => httpClient.post("/user/get-all", JSON.stringify(data)),
};
