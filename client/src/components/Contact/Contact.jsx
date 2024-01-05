import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Contact.module.css";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import storage from "../../utils/storage";
import contactServices from "../../services/contact.services";
export const Contact = ({ handleContact, handleToast, setToast }) => {
  const { email } = storage.getStorage("user");
  const [message, setMessage] = useState({
    from: email,
    subject: "",
    message: "",
  });

  const resetContact = () => {
    setMessage({
      from: email,
      subject: "",
      message: "",
    });
  };

  const closeContact = () => {
    handleContact();
    resetContact();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid =
      Object.values(message).find((value) => value.length === 0) === undefined;
    if (isValid) {
      const response = await contactServices.createMessage(message);
      setToast({
        ...response,
      });
      resetContact();
      handleContact();
    } else {
      setToast({
        type: "error",
        message: "Campos obligatorios",
      });
    }

    handleToast();
  };

  return (
    <div className={`${styled.containerContact}`}>
      <form className={styled.form} onSubmit={handleSubmit}>
        <h2>Contáctame</h2>
        <div className={styled.formGroup}>
          <label htmlFor="" className={styled.formLabel}>
            De
          </label>
          <div className={styled.inputGroup}>
            <div className={styled.boxIcon}>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="text"
              disabled
              className={styled.inputField}
              value={email}
            />
          </div>
        </div>
        <div className={styled.formGroup}>
          <label htmlFor="" className={styled.formLabel}>
            Asunto
          </label>
          <div className={styled.inputGroup}>
            <div className={styled.boxIcon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <input
              type="text"
              className={styled.inputField}
              value={message.subject}
              name="subject"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styled.formGroup}>
          <label htmlFor="" className={styled.formLabel}>
            Mensaje
          </label>
          <div className={styled.formGroup}>
            <textarea
              className={styled.textarea}
              value={message.message}
              name="message"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className={styled.buttons}>
          <button
            className={`${styled.btn} ${styled.btnCancel}`}
            onClick={closeContact}
            type="button"
          >
            Cancelar
          </button>
          <button className={`${styled.btn}  ${styled.btnSend}`}>Enviar</button>
        </div>
      </form>
    </div>
  );
};
