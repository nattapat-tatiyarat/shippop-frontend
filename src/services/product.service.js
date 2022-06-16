import httpClient from "../config/httpClient";

export default {
  getAll: (data) => httpClient.post("/product/get-all", JSON.stringify(data)),
  getBy: (data) => httpClient.post("/product/get-by", JSON.stringify(data)),
  getByName: (data) =>
    httpClient.post("/product/get-by-name", JSON.stringify(data)),
  getByStatus: (data) =>
    httpClient.post("/product/get-by-status", JSON.stringify(data)),
};
