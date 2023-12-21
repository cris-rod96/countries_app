import { useState } from "react";
import { validate } from "../utils/validation";
import handleRegister from "../services/user.services";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.values(data).some((data) => data === "")) {
      try {
        const { message } = await handleRegister("/users/register", data);
        setMessage(message);
      } catch (error) {
        console.log(error);
        const { message } = error.response.data;
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
