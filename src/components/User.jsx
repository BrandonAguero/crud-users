const User = ({
  user,
  removeUser,
  setDataUserRemove,
  setClassDelete,
  setUpdateInfoUser,
}) => {
  const handleRemoveUser = () => {
    setDataUserRemove([user]);
    removeUser("/users/", user.id);
    setClassDelete("show-message-delete");
  };

  const handleUpdateUser = () => {
    setUpdateInfoUser(user);
  };

  return (
    <div>
      <h5>
        {user.first_name} {user.last_name}
      </h5>
      <div></div>
      <div>
        <h6>CORREO</h6>
        <p>{user.email}</p>
      </div>
      <div>
        <h6>Cumpleaños</h6>
        <p>{user.birthday}</p>
      </div>
      <div>
        <div>
          <i
            onClick={handleRemoveUser}
            className="bx bx-trash"
            style={{ color: "#ffffff", cursor: "pointer" }}
          ></i>
          <i
            onClick={handleUpdateUser}
            className="bx bx-edit-alt"
            style={{ color: "#d3d3d3", cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default User;
