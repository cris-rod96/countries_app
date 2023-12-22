import styled from "./Card.module.css";
export const Card = ({ country, handleCountry }) => {
  const handleClick = () => {
    handleCountry(country.id);
  };
  return (
    <div className={styled.card} onClick={handleClick}>
      <div className={styled.cardHeader}>
        <img src={country.flag} alt="" />
      </div>
      <div className={styled.cardName}>
        <span>{country.commonName}</span>
      </div>
    </div>
  );
};
