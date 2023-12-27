import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRegisterForm } from "../../hooks/useRegisterForm";

export const FormRegister = (props) => {
  const { styled, register, setRegister, showPassword, setShowPassword } =
    props;

  const { data, handleChange, handleSubmit, errors, message } =
    useRegisterForm();
  return (
    <div
      className={`${styled.mainContainer} ${styled.mainContainerRegister} ${
        register ? styled.showRegister : ""
      }`}
    >
      <div
        className={`${styled.containerForm} ${styled.formRegister} ${
          register ? styled.registerDelay : ""
        }`}
      >
        <div className={styled.goLogin}>
          <button
            className={styled.btnGo}
            onClick={() => setRegister(!register)}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Login
          </button>
        </div>
        <form method="POST" className={styled.form} onSubmit={handleSubmit}>
          <div className={styled.formGroup}>
            <label htmlFor="" className={styled.formLabel}>
              Nombre
            </label>
            <div className={styled.boxInput}>
              <div className={styled.boxIcon}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                className={styled.formInput}
                autoComplete="off"
                onChange={handleChange}
                value={data.name}
              />
            </div>
            {errors.name && <span className={styled.error}>{errors.name}</span>}
          </div>
          <div className={styled.formGroup}>
            <label htmlFor="" className={styled.formLabel}>
              Correo
            </label>
            <div className={styled.boxInput}>
              <div className={styled.boxIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                className={styled.formInput}
                autoComplete="off"
                onChange={handleChange}
                value={data.email}
              />
            </div>
            {errors.email && (
              <span className={styled.error}>{errors.email}</span>
            )}
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
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className={styled.formInput}
                onChange={handleChange}
                value={data.password}
              />
              <div className={styled.boxIcon}>
                <FontAwesomeIcon
                  className={styled.icon}
                  onClick={() => setShowPassword(!showPassword)}
                  icon={showPassword ? faEye : faEyeSlash}
                />
              </div>
            </div>
            {errors.password && (
              <span className={styled.error}>{errors.password}</span>
            )}
          </div>

          <button className={`${styled.btnLogin}`}>Registrarme</button>
        </form>
      </div>
      <div className={styled.containerPoster}>
        <img src={"activities.png"} alt="" className={styled.activities} />
      </div>
    </div>
  );
};
