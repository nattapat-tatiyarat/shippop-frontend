import axios from "axios";

const PREFIX_PATH = "https://shippop-node.herokuapp.com";

export default {
  getAll: (data) =>
    axios({
      method: "POST",
      url: `${PREFIX_PATH}/product/get-all`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
  getBy: (data) =>
    axios({
      method: "POST",
      url: `${PREFIX_PATH}/product/get-by`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
  getByName: (data) =>
    axios({
      method: "POST",
      url: `${PREFIX_PATH}/product/get-by-name`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
  getByStatus: (data) =>
    axios({
      method: "POST",
      url: `${PREFIX_PATH}/product/get-by-status`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
};
