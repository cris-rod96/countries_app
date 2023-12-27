import { useParams, useNavigate } from "react-router-dom";
import styled from "./Validation.module.css";
import { useEffect, useState } from "react";
import userServices from "../../services/user.services";
import storage from "../../utils/storage";
export const Validation = () => {
  const { code } = useParams();
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function validateUser() {
      try {
        const response = await userServices.validationAccount(code);
        setMessage(response.message);
      } catch (error) {
        const { message } = error.response.data;
        setMessage(message);
      }
    }
    validateUser();
  }, []);
  return (
    <div className={styled.containerValidation}>
      <h1>{message}</h1>

      <button
        type="button"
        className={styled.btn}
        onClick={() => window.close()}
      >
        Cerrar
      </button>
    </div>
  );
};
