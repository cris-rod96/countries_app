import { NavLink, useNavigate, useNavigation } from "react-router-dom";
import styled from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBrain,
  faClose,
  faDoorClosed,
  faHome,
  faHouse,
  faIdCardClip,
  faListCheck,
  faPowerOff,
  faQuestion,
  faRightFromBracket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import cookies from "../../utils/cookies";
import storage from "../../utils/storage";
import { useState } from "react";
export const Nav = (props) => {
  const { handleSearch, handleOpenMenu, navFixed } = props;
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const homeIcon = <FontAwesomeIcon icon={faHome} />;
  const activityIcon = <FontAwesomeIcon icon={faListCheck} />;
  const aboutIcon = <FontAwesomeIcon icon={faIdCardClip} />;

  const menuItems = [
    { path: "/home", label: "Home", icon: homeIcon },
    { path: "/activity", label: "Actividades", icon: activityIcon },
    { path: "/about", label: "About", icon: aboutIcon },
  ];
  const logout = () => {
    cookies.removeCookie("x-token");
    storage.removeStorage("user");
    navigate("/");
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
    handleOpenMenu(!showMenu);
  };

  const generateMenu = () => {
    return menuItems.map((item) => (
      <NavLink
        key={item.path}
        className={({ isActive }) =>
          isActive
            ? `${styled.menuItem} ${styled.active}`
            : `${styled.menuItem}`
        }
        to={item.path}
        onClick={handleMenu}
      >
        {item.icon}
        {item.label}
      </NavLink>
    ));
  };
  return (
    <div className={`${styled.navContainer} ${navFixed ? styled.fixed : ""}`}>
      <div className={styled.contentNav}>
        <div className={styled.menu}>
          <div className={styled.full}>{generateMenu()}</div>
          <div className={styled.movil}>
            <button className={styled.btnMenu} onClick={handleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>

            <div className={`${styled.boxMenu} ${showMenu && styled.showMenu}`}>
              <button className={styled.btnClose} onClick={handleMenu}>
                <FontAwesomeIcon icon={faClose} />
              </button>
              <div className={styled.items}>{generateMenu()}</div>
              <div className={styled.logout}>
                <button className={styled.btnLogout} onClick={logout}>
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
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
