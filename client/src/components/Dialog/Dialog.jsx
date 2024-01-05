import styled from "./Dialog.module.css";
export const Dialog = (props) => {
  const { setShowDialog, deleteActivity } = props;
  const closeDialog = () => setShowDialog(false);
  const confirmDelete = () => deleteActivity();
  return (
    <div className={styled.containerDialog}>
      <div className={styled.dialog}>
        <div className={styled.contentDialog}>
          <h3>
            ¿Realmente desea eliminar esta actividad? Esta acción no podrá
            revertirse.
          </h3>
          <div className={styled.buttons}>
            <button
              className={`${styled.btn} ${styled.btnConfirm}`}
              onClick={confirmDelete}
            >
              Confirmar
            </button>
            <button
              className={`${styled.btn} ${styled.btnCancel}`}
              onClick={closeDialog}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
