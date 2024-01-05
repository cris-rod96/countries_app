import axios from "axios";
import config from "../config/config";
import cookies from "../utils/cookies";
import storage from "../utils/storage";
const { URL_BACK } = config;
const getActivities = async () => {
  try {
    const token = cookies.getCookie("x-token");
    const { data } = await axios(`${URL_BACK}/activity/l/all`, {
      headers: {
        "x-token": token,
      },
    });
    return data.activities;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const createActivity = async (activity) => {
  try {
    const token = cookies.getCookie("x-token");
    const user = storage.getStorage("user");
    const newActivity = {
      ...activity,
      userId: user.id,
    };
    const { data } = await axios.post(
      `${URL_BACK}/activity/create`,
      newActivity,
      {
        headers: {
          "x-token": token,
        },
      }
    );
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

const updateActivity = async (activity, id) => {
  try {
    const token = cookies.getCookie("x-token");
    const user = storage.getStorage("user");
    const { data } = await axios.put(
      `${URL_BACK}/activity/update/${id}`,
      {
        ...activity,
        userId: user.id,
      },
      {
        headers: {
          "x-token": token,
        },
      }
    );
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

const deleteActivity = async (id) => {
  try {
    const token = cookies.getCookie("x-token");

    const { data } = await axios.delete(`${URL_BACK}/activity/delete/${id}`, {
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
  getActivities,
  createActivity,
  deleteActivity,
  updateActivity,
};
