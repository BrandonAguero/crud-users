import { useState } from "react";

const UserDeleteMessage = ({ dataUserRemove, setDataUserRemove }) => {
  const [classDelete, setClassDelete] = useState();

  const handleAcceptUserDeleted = () => {
    setDataUserRemove();
  };

  return (
    <div>
      <h5>Eliminar usuario</h5>
      <p>
        El usuario {dataUserRemove.first_name} {dataUserRemove.last_name}z
      </p>
      <button onClick={handleAcceptUserDeleted}>Aceptar</button>
    </div>
  );
};

export default UserDeleteMessage;
