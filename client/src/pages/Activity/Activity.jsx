import { useEffect, useState } from "react";
import { Table } from "../../components/Table/Table";
import styled from "./Activity.module.css";
import storage from "../../utils/storage";
import cookies from "../../utils/cookies";
import { Modal } from "../../components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

import activityService from "../../services/activities.services";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
export const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const user = storage.getStorage("user");

  const handleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const token = cookies.getCookie("x-token");

    const getActivities = async () => {
      const response = await activityService.getActivities(user.id, token);
      setActivities(response);
    };
    getActivities();
  }, []);
  return (
    <div className={styled.containerActivity}>
      {activities.length > 0 ? (
        <>
          <h1>Actividades agendadas por {user.name}</h1>
          <div className={styled.containerTable}>
            <Table />
          </div>
        </>
      ) : (
        <div className={styled.emptyActivities}>
          <FontAwesomeIcon icon={faFileAlt} bounce />
          <p>Sin actividades registradas</p>
          <button className={styled.btnAdd} onClick={handleModal}>
            <FontAwesomeIcon icon={faAdd} />
            Nueva Actividad
          </button>
        </div>
      )}
      {showModal && <Modal />}
    </div>
  );
};
