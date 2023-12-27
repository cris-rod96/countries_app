import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import styled from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBrain,
  faHouse,
  faIdCardClip,
  faListCheck,
  faPowerOff,
  faQuestion,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import cookies from "../../utils/cookies";
import storage from "../../utils/storage";
export const Nav = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    cookies.removeCookie("x-token");
    storage.removeStorage("user");
    navigate("/");
  };
  const { handleSearch } = props;
  return (
    <div className={styled.navContainer}>
      <div className={styled.contentNav}>
        <div className={styled.menu}>
          <NavLink className={styled.menuItem} to={"/"}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>

          <NavLink className={styled.menuItem} to={"/activity"}>
            <FontAwesomeIcon icon={faListCheck} />
            Activities
          </NavLink>
          <NavLink className={styled.menuItem} to={"/about"}>
            <FontAwesomeIcon icon={faIdCardClip} />
            About
          </NavLink>
        </div>

        <div className={styled.boxGroup}>
          <input
            type="text"
            name=""
            id=""
            className={styled.inputSearch}
            onChange={handleSearch}
          />
          <div className={styled.boxIcon}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      <div className={styled.boxLogout}>
        <button
          className={styled.btnLogout}
          title="Cerrar Sesión"
          onClick={logout}
        >
          <FontAwesomeIcon icon={faPowerOff} className={styled.icon} />
        </button>
      </div>
    </div>
  );
};
