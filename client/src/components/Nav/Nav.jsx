import { NavLink } from "react-router-dom";
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
export const Nav = (props) => {
  const { handleSearch } = props;
  return (
    <div className={styled.navContainer}>
      <div className={styled.contentNav}>
        <div className={styled.menu}>
          <NavLink className={styled.menuItem}>
            <FontAwesomeIcon icon={faHouse} />
            Home
          </NavLink>

          <NavLink className={styled.menuItem}>
            <FontAwesomeIcon icon={faListCheck} />
            Activities
          </NavLink>
          <NavLink className={styled.menuItem}>
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
    </div>
  );
};
