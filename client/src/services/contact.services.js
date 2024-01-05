import axios from "axios";
import config from "../config/config";
import cookies from "../utils/cookies";

const { URL_BACK } = config;
const token = cookies.getCookie("x-token");

const createMessage = async (message) => {
  try {
    const { data } = await axios.post(`${URL_BACK}/message/create`, message, {
      headers: {
        "x-token": token,
      },
    });

    return {
      type: "success",
      message: data.message,
    };
  } catch (error) {
    return {
      type: "error",
      message: error.response.data.message,
    };
  }
};

export default {
  createMessage,
};
