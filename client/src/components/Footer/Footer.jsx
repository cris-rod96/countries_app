import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Footer.module.css";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
export const Footer = () => {
  return (
    <div className={styled.footerContainer}>
      <div className={styled.userSession}>
        <span>Sesión iniciada por Cristhian Rodríguez</span>
      </div>
      <div className={styled.userLogout}>
        <button>
          <FontAwesomeIcon icon={faPowerOff} />
        </button>
      </div>
    </div>
  );
};
