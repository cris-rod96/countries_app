import styled from "./Toast.module.css";
export const Toast = () => {
  return (
    <div className={`${styled.containerToast} ${styled.hide}`}>
      <p className={styled.toast}>Mensaje de prueba</p>
    </div>
  );
};
