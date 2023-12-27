import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "./Table.module.css";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowCircleDown,
  faArrowDown,
  faArrowDown19,
  faCaretDown,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
export const Table = () => {
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
  const activities = [
    {
      id: "1",
      description: "Paseo en bicicleta",
      difficulty: 1,
      duration: 3,
      season: "Invierno",
      isCompleted: false,
      countries: ["Ecuador", "Colombia"],
    },
    {
      id: "2",
      description: "Caminata en montaña",
      difficulty: 2,
      duration: 3,
      season: "Verano",
      isCompleted: false,
      countries: ["Ecuador", "Colombia"],
    },
    {
      id: "3",
      description: "Salto en paracaídas",
      difficulty: 3,
      duration: 3,
      season: "Invierno",
      isCompleted: false,
      countries: ["Ecuador", "Colombia"],
    },
    {
      id: "4",
      description: "Buceo",
      difficulty: 4,
      duration: 3,
      season: "Invierno",
      isCompleted: false,
      countries: ["Ecuador", "Colombia"],
    },
    {
      id: "5",
      description: "Entender mujeres",
      difficulty: 5,
      duration: 3,
      season: "Invierno",
      isCompleted: false,
      countries: ["Ecuador", "Colombia"],
    },
  ];
  return (
    <table className={`${styled.table}`}>
      <thead className={styled.thead}>
        <tr>
          <th>
            Descripción <FontAwesomeIcon icon={faCaretDown} />
          </th>
          <th>Dificultad</th>
          <th>Duración</th>
          <th>Temporada</th>
          <th>Países</th>
          <th>Estado</th>
          <th></th>
        </tr>
      </thead>
      <tbody className={styled.tbody}>
        {activities.map((activity, idx) => (
          <tr key={idx}>
            <td>{activity.description}</td>
            <td className={difficulties[activity.difficulty].css}>
              {difficulties[activity.difficulty].value}
            </td>
            <td>{activity.duration} hrs.</td>
            <td>{activity.season}</td>
            <td className={styled.pills}>
              {activity.countries.map((name, idx) => (
                <span key={idx} className={styled.pill}>
                  {name}
                </span>
              ))}
            </td>
            <td>{activity.isCompleted}</td>
            <td className={styled.buttons}>
              <button className={`${styled.btn} ${styled.btnEdit}`}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className={`${styled.btn} ${styled.btnDelete}`}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};
