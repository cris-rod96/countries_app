import { useState } from "react";
import { validate } from "../utils/validation";
import userServices from "../services/user.services.js";
import cookies from "../utils/cookies.js";
import storage from "../utils/storage.js";
import { useNavigate } from "react-router-dom";
export const useLoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!Object.values(credentials).some((data) => data === "")) {
      try {
        const data = await userServices.handleSubmit(
          "/auth/login",
          credentials
        );
        const { user, token } = data;
        cookies.saveCookie("x-token", token);
        storage.saveStorage("user", user);
        navigate("/home");
      } catch (error) {
        const { message } = error.response.data;
        setError(message);
      }
    } else {
      setError("Los campos son obligatorios");
    }
    setLoading(false);
  };

  return {
    credentials,
    handleChange,
    handleSubmit,
    error,
    loading,
    setLoading,
  };
};
