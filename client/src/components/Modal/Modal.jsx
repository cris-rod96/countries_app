import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Modal.module.css";
import {
  faCalendar,
  faClock,
  faClose,
  faEarth,
  faList,
  faRefresh,
  faSave,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import storage from "../../utils/storage";
import { useEffect, useState } from "react";

import activityService from "../../services/activities.services";
export const Modal = ({
  handleModal,
  currentActivity,
  handleToast,
  setToast,
}) => {
  const countries = storage.getStorage("countries");

  const [activity, setActivity] = useState({
    description: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const difficulties = {
    1: "Fácil",
    2: "Moderado",
    3: "Intermedio",
    4: "Díficil",
    5: "Experto",
  };

  const resetForm = () => {
    setActivity({
      description: "",
      difficulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  };

  const setActivityCountries = (countries, value) => {
    return !countries.includes(value) ? [...countries, value] : [...countries];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity({
      ...activity,
      [name]:
        name === "countries"
          ? setActivityCountries(activity.countries, value)
          : value,
    });
  };

  const isValidForm = (values) => {
    let isValid = true;
    for (let value of values) {
      if (value.length === 0) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = Object.values(activity);
    if (isValidForm(values)) {
      const response = await activityService.createActivity(activity);
      setToast({
        ...response,
      });
      resetForm();
    } else {
      setToast({
        type: "error",
        message: "Todos los campos son obligatorios",
      });
    }
    handleToast();
  };

  useEffect(() => {
    if (currentActivity.hasOwnProperty("description")) {
      setActivity({
        ...currentActivity,
        countries: currentActivity.Countries.map((country) => country.id),
      });
    }
  }, [currentActivity]);

  return (
    <div className={styled.containerModal}>
      <div className={styled.modal}>
        <div className={styled.modalHeader}>
          <h2>
            {currentActivity.hasOwnProperty("description")
              ? "Editar "
              : "Crear "}
            Actividad
          </h2>

          <button className={styled.btnClose} onClick={handleModal}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        <div className={styled.modalBody}>
          <form className={styled.form} onSubmit={handleSubmit}>
            <div className={styled.formGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Descripción
              </label>
              <div className={styled.inputGroup}>
                <div className={styled.inputIcon}>
                  <FontAwesomeIcon icon={faList} />
                </div>
                <input
                  type="text"
                  name="description"
                  className={styled.inputField}
                  onChange={handleChange}
                  value={activity.description}
                />
              </div>
            </div>
            <div className={styled.formGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Dificultad
              </label>
              <div className={styled.inputGroup}>
                <div className={styled.inputIcon}>
                  <FontAwesomeIcon icon={faSliders} />
                </div>
                <select
                  name="difficulty"
                  onChange={handleChange}
                  className={styled.inputField}
                  defaultValue={
                    (currentActivity.difficulty &&
                      currentActivity.difficulty.toString()) ||
                    "null"
                  }
                >
                  <option value="null" disabled>
                    -- Seleccione la dificultad de la actividad --
                  </option>
                  <option value="1">1 - Fácil</option>
                  <option value="2">2 - Moderado</option>
                  <option value="3">3 - Intermedio</option>
                  <option value="4">4 - Díficil</option>
                  <option value="5">5 - Experto</option>
                </select>
              </div>
            </div>
            <div className={styled.formGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Duración (hrs)
              </label>
              <div className={styled.inputGroup}>
                <div className={styled.inputIcon}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <input
                  type="number"
                  className={styled.inputField}
                  name="duration"
                  onChange={handleChange}
                  value={activity.duration}
                  min={1}
                  max={24}
                />
              </div>
            </div>
            <div className={styled.formGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Temporada
              </label>
              <div className={styled.inputGroup}>
                <div className={styled.inputIcon}>
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <select
                  name="season"
                  onChange={handleChange}
                  className={styled.inputField}
                  defaultValue={"null"}
                >
                  <option value="null" disabled>
                    -- Seleccione una estación del año --
                  </option>
                  <option value="Invierno">Invierno</option>
                  <option value="Otoño">Otoño</option>
                  <option value="Primavera">Primavera</option>
                  <option value="Verano">Verano</option>
                </select>
              </div>
            </div>
            <div className={styled.formGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Ubicación
              </label>
              <div className={styled.inputGroup}>
                <div className={styled.inputIcon}>
                  <FontAwesomeIcon icon={faEarth} />
                </div>
                <select
                  name="countries"
                  onChange={handleChange}
                  className={styled.inputField}
                  defaultValue={"null"}
                >
                  <option value="null" disabled>
                    -- Seleccione la ubicación --
                  </option>
                  {countries.map((country) => (
                    <option value={country.id} key={country.id}>
                      {country.commonName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styled.buttons}>
              <button
                className={`${styled.btn} ${styled.btnReset}`}
                onClick={resetForm}
                type="button"
              >
                <FontAwesomeIcon icon={faRefresh} />
                Limpiar
              </button>
              <button
                type="submit"
                className={`${styled.btn} ${styled.btnSave}`}
              >
                <FontAwesomeIcon icon={faSave} />
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
