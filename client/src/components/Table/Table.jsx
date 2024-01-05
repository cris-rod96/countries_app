import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Table.module.css";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowCircleDown,
  faArrowDown,
  faArrowDown19,
  faCaretDown,
  faSpinner,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export const Table = (props) => {
  const {
    activities,
    handleUpdate,
    setCurrentActivity,
    handleModal,
    setShowDialog,
    setIdActivity,
    setTypeRequest,
  } = props;
  const [updating, setUpdating] = useState(false);
  const [idUpdate, setIdUpdate] = useState("");
  const difficulties = {
    1: {
      css: styled.easy,
      value: "Fácil",
    },
    2: {
      css: styled.moderate,
      value: "Moderado",
    },
    3: {
      css: styled.intermediate,
      value: "Intermedio",
    },
    4: {
      css: styled.hard,
      value: "Díficil",
    },
    5: {
      css: styled.expert,
      value: "Experto",
    },
  };

  const updateStatus = (id) => {
    setUpdating(true);
    setIdUpdate(id);
    setTimeout(() => {
      setUpdating(false);
      handleUpdate(id);
    }, 1500);
  };

  const selectActivity = (activity) => {
    setCurrentActivity({
      ...activity,
    });
    handleRequest("put");
    handleModal();
  };

  const handleDelete = (id) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setShowDialog(true);
    setIdActivity(id);
  };

  const handleRequest = (request) => {
    setTypeRequest(request);
  };

  return (
    <table className={`${styled.table}`}>
      <thead className={styled.thead}>
        <tr>
          <th>Descripción</th>
          <th>Dificultad</th>
          <th>Duración</th>
          <th>Temporada</th>
          <th>Países</th>
          <th>Estado</th>
          <th></th>
        </tr>
      </thead>
      <tbody className={styled.tbody}>
        {activities &&
          activities.map((activity, idx) => (
            <tr key={idx}>
              <td>{activity.description}</td>
              <td className={difficulties[activity.difficulty].css}>
                {difficulties[activity.difficulty].value}
              </td>
              <td>{activity.duration} hrs.</td>
              <td>{activity.season}</td>
              <td className={styled.pills}>
                {activity.Countries &&
                  activity.Countries.map((country, idx) => (
                    <span key={idx} className={styled.pill}>
                      {country.commonName}
                    </span>
                  ))}
              </td>
              <td>
                {updating && idUpdate === activity.id ? (
                  <FontAwesomeIcon icon={faSpinner} spinPulse />
                ) : (
                  <input
                    type="checkbox"
                    checked={activity.isCompleted}
                    disabled={activity.isCompleted}
                    onChange={() => updateStatus(activity.id)}
                    className={styled.inputCheck}
                  />
                )}
              </td>
              <td className={styled.buttons}>
                <button className={`${styled.btn} ${styled.btnEdit}`}>
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => selectActivity(activity)}
                  />
                </button>
                <button
                  className={`${styled.btn} ${styled.btnDelete}`}
                  onClick={() => handleDelete(activity.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
