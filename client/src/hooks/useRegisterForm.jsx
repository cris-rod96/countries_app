import { useState } from "react";
import { validate } from "../utils/validation";
import storage from "../utils/storage";
import userServices from "../services/user.services";

export const useRegisterForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    setErrors(
      validate({
        ...data,
        [name]: value,
      })
    );
  };

  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
    });

    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.values(data).some((data) => data === "")) {
      try {
        const { message } = await userServices.handleSubmit(
          "/users/register",
          data
        );
        storage.saveStorage("temp_email", data.email);
        storage.saveStorage("isValidate", false);
        setMessage(message);
        resetData();
      } catch (error) {
        const { message } = error.response.data;
        setMessage(message);
      }
    } else {
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
    message,
  };
};
