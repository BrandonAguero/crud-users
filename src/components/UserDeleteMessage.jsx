const UserDeleteMessage = ({
  dataRemoved,
  setDataUserRemove,
  setClassDelete,
}) => {
  const handleAcceptUserDeleted = () => {
    setDataUserRemove();
    setClassDelete("hide-message-delete");
  };

  const handleRemoveSection = () => {
    setClassDelete("hide-message-delete");
  };

  return (
    <>
      <i
        onClick={handleRemoveSection}
        className="bx bx-x"
        style={{ color: "#212121", cursor: "pointer" }}
      ></i>
      <h5>Eliminar usuario</h5>
      <p>
        El usuario {dataRemoved.first_name} {dataRemoved.last_name} ha sido
        eliminado correctamente
      </p>
      <button onClick={handleAcceptUserDeleted}>Aceptar</button>
    </>
  );
};

export default UserDeleteMessage;
