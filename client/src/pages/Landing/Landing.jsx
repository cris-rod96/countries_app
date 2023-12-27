import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Landing.module.css";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FormLogin } from "../../components/Form/Form.login";
import { FormRegister } from "../../components/Form/Form.register";
export const Landing = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <div className={styled.containerLanding}>
      <div className={styled.contentLanding}>
        <FormLogin
          styled={styled}
          faArrowRight={faArrowRight}
          register={register}
          setRegister={setRegister}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <FormRegister
          styled={styled}
          register={register}
          setRegister={setRegister}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>
    </div>
  );
};
