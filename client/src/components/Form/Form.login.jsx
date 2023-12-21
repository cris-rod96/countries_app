import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { faLock, faSpider, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoginForm } from "../../hooks/useLoginForm";
export const FormLogin = (props) => {
  const {
    styled,
    faArrowRight,
    register,
    setRegister,
    showPassword,
    setShowPassword,
  } = props;
  const { credentials, handleChange, handleSubmit, loading, error } =
    useLoginForm();
  return (
    <div
      className={`${styled.mainContainer} ${styled.mainContainerLogin} ${
        register ? styled.hideLogin : ""
      }`}
    >
      <div className={`${styled.containerPoster}`}>
        <img src={"bg.jpg"} alt="" className={styled.countries} />
      </div>
      <div className={`${styled.containerForm} ${styled.formLogin}`}>
        <div className={styled.goRegister}>
          <button className={styled.btnGo} onClick={() => setRegister(true)}>
            Registrarme
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <form action="" className={styled.form} onSubmit={handleSubmit}>
          <div className={styled.formGroup}>
            <label
              htmlFor=""
              className={`${styled.formLabel} ${error && styled.loginError}`}
            >
              Correo electrónico {error && <span> - {error}</span>}
            </label>
            <div
              className={`${styled.boxInput} ${
                error &&
                error !== "Los campos son obligatorios" &&
                styled.boxError
              }`}
            >
              <div className={styled.boxIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className={styled.formInput}
                autoComplete="off"
                value={credentials.email}
              />
            </div>
          </div>
          <div className={`${styled.formGroup} `}>
            <label
              htmlFor=""
              className={`${styled.formLabel} ${error && styled.loginError}`}
            >
              Contraseña {error && <span> - {error}</span>}
            </label>
            <div
              className={`${styled.boxInput} ${
                error &&
                error !== "Los campos son obligatorios" &&
                styled.boxError
              }`}
            >
              <div className={styled.boxIcon}>
                <FontAwesomeIcon icon={faLock} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleChange}
                className={styled.formInput}
                value={credentials.password}
              />
              <div className={styled.boxIcon}>
                <FontAwesomeIcon
                  className={styled.icon}
                  onClick={() => setShowPassword(!showPassword)}
                  icon={showPassword ? faEye : faEyeSlash}
                />
              </div>
            </div>
          </div>

          <div className={styled.formLink}>
            <a href="" className={styled.link}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button className={`${styled.btnLogin}`}>
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spinPulse />
                Iniciando sesión
              </>
            ) : (
              "Iniciar sesión"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
