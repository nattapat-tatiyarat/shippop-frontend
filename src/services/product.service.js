import axios from "axios";

export default {
  getAll: (data) =>
    axios({
      method: "POST",
      url: `http://localhost:3405/product/get-all`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
  getBy: (data) =>
    axios({
      method: "POST",
      url: `http://localhost:3405/product/get-by`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
  getByName: (data) =>
    axios({
      method: "POST",
      url: `http://localhost:3405/product/get-by-name`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
  getByStatus: (data) =>
    axios({
      method: "POST",
      url: `http://localhost:3405/product/get-by-status`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
};
