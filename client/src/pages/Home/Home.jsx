import { useEffect, useState } from "react";
import styled from "./Home.module.css";
import services from "../../services/countries.services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faGlobe,
  faLocationDot,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { Cards } from "../../components/Cards/Cards";
import { Footer } from "../../components/Footer/Footer";
export const Home = (props) => {
  const { countries } = props;
  const [showDetail, setShowDetail] = useState(false);
  const [country, setCountry] = useState({});

  const handleCountry = (id) => {
    setCountry(countries.find((country) => country.id === id));
    setShowDetail(true);
  };

  return (
    <div
      className={`${styled.homeContainer} ${showDetail && styled.boxDetail}`}
    >
      <div className={`${styled.box1} ${showDetail && styled.resizeBox1}`}>
        <Cards countries={countries} handleCountry={handleCountry} />
      </div>
      <div className={`${styled.box2} ${showDetail && styled.resizeBox2}`}>
        {showDetail && (
          <div
            className={`${styled.contentDetail} ${
              showDetail && styled.showDetail
            }`}
          >
            <span
              className={styled.btnClose}
              onClick={() => setShowDetail(false)}
            >
              <FontAwesomeIcon icon={faClose} />
            </span>
            <div className={styled.cardFlag}>
              <img src={country.flag} alt="" />
            </div>
            <div className={styled.infos}>
              <div className={styled.info}>
                <span className={styled.infoTitle}>Nombre</span>
                <span className={styled.infoValue}>{country.commonName}</span>
              </div>
              <div className={styled.info}>
                <span className={styled.infoTitle}>Nombre Oficial</span>
                <span className={styled.infoValue}>{country.officialName}</span>
              </div>
              <div className={styled.info}>
                <span className={styled.infoTitle}>Capital</span>
                <span className={styled.infoValue}>{country.capital}</span>
              </div>
              <div className={styled.info}>
                <span className={styled.infoTitle}>Población</span>
                <span className={styled.infoValue}>
                  {country.population} hbs.
                </span>
              </div>
              <div className={styled.info}>
                <span className={styled.infoTitle}>Area</span>
                <span className={styled.infoValue}>
                  {country.area} km<sup>2</sup>
                </span>
              </div>
              <div className={styled.info}>
                <span className={styled.infoTitle}>Continente</span>
                <span className={styled.infoValue}>{country.continent}</span>
              </div>

              <div className={styled.info}>
                <span className={styled.infoTitle}>Ubicación</span>
                <button type="button" className={styled.btnGo}>
                  <a href={country.location} target="__blank">
                    <FontAwesomeIcon icon={faLocationDot} />
                    Ver mapa
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
