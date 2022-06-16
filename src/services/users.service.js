import axios from "axios";

const PREFIX_PATH = "https://shippop-node.herokuapp.com";

export default {
  getAll: (data) =>
    axios({
      method: "POST",
      url: `${PREFIX_PATH}/user/get-all`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
};
