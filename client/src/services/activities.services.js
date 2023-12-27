import axios from "axios";
import config from "../config/config";
const { URL_BACK } = config;
const getActivities = async (id, token) => {
  try {
    const { data } = await axios(`${URL_BACK}/activity/l/all`, {
      id,
      headers: {
        "x-token": token,
      },
    });
    return data.activities;
  } catch (error) {
    return [];
  }
};

export default {
  getActivities,
};
