import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Recovery.module.css";
import {
  faCode,
  faEnvelope,
  faLock,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import userServices from "../../services/user.services";
export const Recovery = () => {
  const [sended, setSended] = useState(true);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const getRecoveryCode = async () => {
    const response = await userServices.forgotPassword(email);
    setMessage(response.message);
  };
  return (
    <div className={styled.containerRecovery}>
      <div className={styled.contentRecovery}>
        <h3>Recuperar contraseña</h3>
        <div className={styled.boxGroup}>
          <div className={styled.boxField}>
            <div className={styled.boxIcon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <input
              type="email"
              name="email"
              className={styled.inputField}
              onChange={handleEmail}
            />
          </div>
          <button className={styled.btnSend} onClick={getRecoveryCode}>
            Enviar código
          </button>
        </div>

        <div className={!sended && styled.op0}>
          <div className={`${styled.boxMessage}`}>
            <p>{message}</p>
          </div>

          <div className={styled.inputGroup}>
            <label htmlFor="" className={styled.boxLabel}>
              Código secreto
            </label>
            <div className={styled.boxField}>
              <div className={styled.boxIcon}>
                <FontAwesomeIcon icon={faUserSecret} />
              </div>
              <input type="email" name="" id="" className={styled.inputField} />
            </div>
          </div>
          <div className={styled.inputGroup}>
            <label htmlFor="" className={styled.boxLabel}>
              Nueva contraseña
            </label>
            <div className={styled.boxField}>
              <div className={styled.boxIcon}>
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input type="email" name="" id="" className={styled.inputField} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
