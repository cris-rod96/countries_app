import axios from "axios";
import config from "../config/config";

const { URL_BACK } = config;

const handleSubmit = async (route, values) => {
  const { data } = await axios.post(`${URL_BACK}/${route}`, {
    ...values,
  });

  return data;
};

export default handleSubmit;
