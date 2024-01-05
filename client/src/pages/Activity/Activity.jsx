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
import { Dialog } from "../../components/Dialog/Dialog";
export const Activity = ({ showMenu }) => {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [idActivity, setIdActivity] = useState("");
  const [overflow, setOverflow] = useState(false);
  const [toast, setToast] = useState({
    type: "",
    message: "",
  });
  const [currentActivity, setCurrentActivity] = useState({});
  const [typeRequest, setTypeRequest] = useState("post");

  const user = storage.getStorage("user");

  const handleModal = () => {
    setShowModal(!showModal);
    setOverflow(!overflow);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
    setToast({
      ...response,
    });
    handleToast();
    getActivities();
  };

  const handleToast = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const deleteActivity = async () => {
    const response = await activityService.deleteActivity(idActivity);
    setToast({
      ...response,
    });
    handleToast();
    setShowDialog(false);
    getActivities();
  };

  const createActivity = async (activity, error = null) => {
    if (!error) {
      const response = await activityService.createActivity(activity);
      setToast({
        ...response,
      });
      handleModal();
      getActivities();
    } else {
      setToast({
        ...error,
      });
    }

    handleToast();
  };

  const putActivity = async (activity, id, error = null) => {
    if (!error) {
      const response = await activityService.updateActivity(activity, id);
      setToast({
        ...response,
      });

      handleModal();
      getActivities();
    } else {
      setToast({
        ...error,
      });
    }

    handleToast();
  };

  return (
    <div
      className={`${styled.containerActivity} ${
        overflow ? styled.overflow : ""
      }`}
    >
      <Toast showToast={showToast} toast={toast} />
      {showDialog && (
        <Dialog setShowDialog={setShowDialog} deleteActivity={deleteActivity} />
      )}
      {activities.length > 0 ? (
        <div
          className={`${styled.containerTable} ${
            showMenu ? styled.tableIndex : ""
          }`}
        >
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
            setShowDialog={setShowDialog}
            setIdActivity={setIdActivity}
            setTypeRequest={setTypeRequest}
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
          createActivity={createActivity}
          typeRequest={typeRequest}
          putActivity={putActivity}
        />
      )}
    </div>
  );
};
