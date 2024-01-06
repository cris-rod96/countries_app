import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Recovery.module.css";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const Recovery = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [sended, setSended] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const handleShow = () => setShowPassword(!showPassword);
  return (
    <div className={styled.containerRecovery}>
      <div className={styled.contentRecovery}>
        <h3>Recuperación de Contraseña</h3>
        <div className={styled.boxSendCode}>
          <div className={styled.boxGroup}>
            <div className={styled.inputGroup}>
              <div className={styled.boxIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input type="email" name="email" className={styled.inputField} />
            </div>

            <button className={`${styled.btn} ${styled.btnSend}`}>
              Enviar código
            </button>
          </div>
          {sended && (
            <p className={styled.message}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto at
              natus itaque soluta fuga laborum voluptas ipsum dolores molestiae
              sunt, qui cum unde mollitia earum porro animi laboriosam aliquam
              ea.
            </p>
          )}
        </div>

        <div className={styled.boxRecovery}>
          <div className={styled.boxGroup}>
            <label htmlFor="" className={styled.boxLabel}>
              Código secreto
            </label>
            <div className={styled.inputGroup}>
              <div className={styled.boxIcon}>
                <FontAwesomeIcon icon={faUserSecret} />
              </div>
              <input
                type="text"
                name="codeRecovery"
                className={styled.inputField}
                disabled={disabled}
              />
            </div>
          </div>
          <div className={styled.boxGroup}>
            <label htmlFor="" className={styled.boxLabel}>
              Nueva Contraseña
            </label>
            <div className={styled.inputGroup}>
              <div className={styled.boxIcon}>
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="codeRecovery"
                className={styled.inputField}
                disabled={disabled}
              />
              <div className={styled.boxIcon}>
                {showPassword ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    className={styled.iconEye}
                    onClick={handleShow}
                    disabled={disabled}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    className={styled.iconEye}
                    onClick={handleShow}
                    disabled={disabled}
                  />
                )}
              </div>
            </div>
          </div>

          <button
            className={`${styled.btn} ${styled.btnSend}`}
            disabled={disabled}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
