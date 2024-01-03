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
import { Toast } from "../../components/Toast/Toast";
export const Activity = () => {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({
    type: "",
    message: "",
  });

  const [currentActivity, setCurrentActivity] = useState({});
  const user = storage.getStorage("user");

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const getActivities = async () => {
    const response = await activityService.getActivities();
    setActivities(response);
  };

  useEffect(() => {
    getActivities();
  }, []);

  const handleUpdate = async (id) => {
    const response = await activityService.updateActivity(
      { isCompleted: true },
      id
    );

    getActivities();
  };

  const handleToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className={styled.containerActivity}>
      <Toast showToast={showToast} toast={toast} />
      {activities.length > 0 ? (
        <div className={styled.containerTable}>
          <div className={styled.buttonBox}>
            <button className={styled.btnAdd} onClick={handleModal}>
              <FontAwesomeIcon icon={faAdd} />
              Nueva Actividad
            </button>
          </div>
          <Table
            activities={activities}
            handleUpdate={handleUpdate}
            setCurrentActivity={setCurrentActivity}
            handleModal={handleModal}
          />
        </div>
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
      {showModal && (
        <Modal
          handleModal={handleModal}
          currentActivity={currentActivity}
          handleToast={handleToast}
          setToast={setToast}
        />
      )}
    </div>
  );
};
