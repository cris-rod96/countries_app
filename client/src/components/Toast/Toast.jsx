import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Toast.module.css";
import { faCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const Toast = (props) => {
  const { showToast, toast } = props;
  const { type, message } = toast;

  return (
    <div className={styled.containerToast}>
      <div
        className={`${styled.toast} ${styled.toastError} ${
          showToast && type === "error" && styled.showToast
        }`}
      >
        <div className={styled.iconToast}>
          <FontAwesomeIcon icon={faWarning} />
        </div>
        <div className={styled.messageToast}>{message}</div>
      </div>
      <div
        className={`${styled.toast} ${styled.toastSuccess} ${
          showToast && type === "success" && styled.showToast
        }`}
      >
        <div className={styled.iconToast}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className={styled.messageToast}>{message}</div>
      </div>
    </div>
  );
};
