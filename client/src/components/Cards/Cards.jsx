import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";
import styled from "./Cards.module.css";
export const Cards = (props) => {
  const { countries, handleCountry } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const countriesPerPage = 10;
  const totalPages = Math.ceil(countries.length / countriesPerPage);

  const [countriesInPage, setCountriesInPage] = useState([]);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const sliceCountries = countries.slice(
      currentPage * countriesPerPage,
      (currentPage + 1) * countriesPerPage
    );
    setCountriesInPage(sliceCountries);
  }, [countries, currentPage]);

  return (
    <div className={styled.containerCards}>
      <Pagination
        nextPage={nextPage}
        previousPage={previousPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <div className={styled.cards}>
        {countriesInPage.map((country) => (
          <Card
            country={country}
            key={country.id}
            handleCountry={handleCountry}
          />
        ))}
      </div>
    </div>
  );
};
