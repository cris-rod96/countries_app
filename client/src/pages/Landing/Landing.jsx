import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Landing.module.css";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const Landing = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styled.containerLanding}>
      <img src={"bg.jpg"} alt="" />
      <div className={styled.contentLanding}>
        <div className={styled.containerLogin}>
          <form action="" className={styled.form}>
            <div className={styled.formGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Correo electrónico
              </label>
              <div className={styled.boxInput}>
                <div className={styled.boxIcon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  type="email"
                  name=""
                  id=""
                  className={styled.formInput}
                />
              </div>
            </div>
            <div className={styled.formGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Contraseña
              </label>
              <div className={styled.boxInput}>
                <div className={styled.boxIcon}>
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <input
                  type="password"
                  name=""
                  id=""
                  className={styled.formInput}
                />
                <div className={styled.boxIcon}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
