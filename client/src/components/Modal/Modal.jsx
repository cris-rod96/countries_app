import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Modal.module.css";
import {
  faCalendar,
  faClock,
  faClose,
  faEarth,
  faList,
  faSave,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import storage from "../../utils/storage";
import { useEffect, useState } from "react";
export const Modal = () => {
  const countries = storage.getStorage("countries");

  const [activity, setActivity] = useState({
    description: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivity({
      ...activity,
      [name]: value,
    });
  };

  const handleCountry = (e) => {
    const { value } = e.target;

    if (activity.countries.length > 0) {
      if (!activity.countries.includes(value)) {
        setActivity({
          ...activity,
          countries: [...activity.countries, value],
        });
      }
    } else {
      setActivity({
        ...activity,
        countries: [...activity.countries, value],
      });
    }
  };

  const getNameCountry = (id) => {
    const country = countries.find((country) => country.id === id);
    return country.commonName;
  };
  return (
    <div className={styled.modal}>
      <div className={styled.contentModal}>
        <div className={styled.formModal}>
          <form action="" className={styled.formActivity}>
            <div className={styled.boxGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Descripción
              </label>
              <div className={styled.formGroup}>
                <div className={styled.boxIcon}>
                  <FontAwesomeIcon icon={faList} />
                </div>
                <input
                  type="text"
                  name="description"
                  className={styled.formField}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styled.boxGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Dificultad
              </label>
              <div className={styled.formGroup}>
                <div className={styled.boxIcon}>
                  <FontAwesomeIcon icon={faSliders} />
                </div>
                <input
                  type="number"
                  className={styled.formField}
                  name="difficulty"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styled.boxGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Duración
              </label>
              <div className={styled.formGroup}>
                <div className={styled.boxIcon}>
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <input
                  type="number"
                  name="duration"
                  onChange={handleChange}
                  className={styled.formField}
                />
              </div>
            </div>

            <div className={styled.boxGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Temporada
              </label>
              <div className={styled.formGroup}>
                <div className={styled.boxIcon}>
                  <FontAwesomeIcon icon={faCalendar} />
                </div>
                <select
                  name="season"
                  onChange={handleChange}
                  className={styled.formField}
                >
                  <option value="null">-- Seleccione la estación --</option>
                  <option value="Invierno">Invierno</option>
                  <option value="Otoño">Otoño</option>
                  <option value="Primavera">Primavera</option>
                  <option value="Verano">Verano</option>
                </select>
              </div>
            </div>

            <div className={styled.boxGroup}>
              <label htmlFor="" className={styled.formLabel}>
                Lugar
              </label>
              <div className={styled.formGroup}>
                <div className={styled.boxIcon}>
                  <FontAwesomeIcon icon={faEarth} />
                </div>
                <select
                  name="countries"
                  id=""
                  className={styled.formField}
                  onChange={handleCountry}
                >
                  <option value="null">-- Seleccione el país --</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.commonName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styled.boxButton}>
              <button className={styled.btnSave}>
                <FontAwesomeIcon icon={faSave} />
                <span>Guardar</span>
              </button>
            </div>
          </form>
        </div>
        <div className={styled.cardModal}>
          <div className={styled.card}>
            <div className={styled.cardInfo}>
              <p className={styled.infoTitle}>Descripción</p>
              <p className={styled.infoValue}>
                {activity.description ? activity.description : "Esperando..."}
              </p>
            </div>
            <div className={styled.cardInfo}>
              <p className={styled.infoTitle}>Dificultad</p>
              <p className={styled.infoValue}>
                {activity.difficulty ? activity.difficulty : "Esperando..."}
              </p>
            </div>
            <div className={styled.cardInfo}>
              <p className={styled.infoTitle}>Duración</p>
              <p className={styled.infoValue}>
                {activity.duration ? activity.duration : "Esperando..."}
              </p>
            </div>
            <div className={styled.cardInfo}>
              <p className={styled.infoTitle}>Temporada</p>
              <p className={styled.infoValue}>
                {activity.season ? activity.season : "Esperando..."}
              </p>
            </div>
            <div className={styled.cardInfo}>
              <p className={styled.infoTitle}>
                {activity.countries.length > 1 ? "Lugares" : "Lugar"}
              </p>
              <div className={styled.countries}>
                {activity.countries.map((country, idx) => (
                  <div className={styled.country} key={idx}>
                    <span>{getNameCountry(country)}</span>
                    <FontAwesomeIcon icon={faClose} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
