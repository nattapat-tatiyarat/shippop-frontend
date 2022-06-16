import axios from "axios";

export default {
  getAll: (data) =>
    axios({
      method: "POST",
      url: `http://localhost:3405/user/get-all`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }),
};
