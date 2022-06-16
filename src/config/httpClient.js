import axios from "axios";
import Vue from "vue";
import store from "../store";

const PREFIX_PATH = "https://shippop-node.herokuapp.com";

const httpClient = axios.create({
  baseURL: PREFIX_PATH,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.request.use((req) => {
  store.state.loading = true;
  return req;
});

httpClient.interceptors.response.use((res) => {
  if (res.status == 200) {
    store.state.loading = false;
  }
  return res;
});

export default httpClient;
