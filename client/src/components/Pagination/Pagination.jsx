import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Pagination.module.css";
import {
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
export const Pagination = (props) => {
  const { nextPage, previousPage, currentPage, totalPages } = props;
  return (
    <div className={styled.pagination}>
      <button
        className={styled.btnArrow}
        onClick={previousPage}
        disabled={currentPage === 0 && true}
      >
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </button>
      <div className={styled.pages}>
        <span>{currentPage + 1}</span>
        <span>de</span>
        <span>{totalPages}</span>
      </div>
      <button
        className={styled.btnArrow}
        onClick={nextPage}
        disabled={currentPage + 1 === totalPages && true}
      >
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </button>
    </div>
  );
};
