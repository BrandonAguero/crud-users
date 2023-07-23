import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import FormUser from "./components/FormUser";
import User from "./components/User";
import UserDeleteMessage from "./components/UserDeleteMessage";

function App() {
  const baseUrl = "https://users-crud-5t3r.onrender.com/api/v1";

  const [allUsers, getUsers, createNewUser, removeUser, updateUser] =
    useFetch(baseUrl);

  const [dataUserRemove, setDataUserRemove] = useState();
  const [classDelete, setClassDelete] = useState("hide-message-delete");
  const [openSectionCreate, setOpenSectionCreate] = useState(
    "hide-section-create"
  );
  const [updateInfoUser, setUpdateInfoUser] = useState();

  useEffect(() => {
    getUsers("/users/");
  }, []);

  const handleOpenCreateUser = () => {
    setOpenSectionCreate("show-section-create");
  };

  return (
    <>
      <header className="header">
        <div>
          <h1>Users</h1>
          <button onClick={handleOpenCreateUser}>
            <i className="bx bx-plus" style={{ color: "color:#ffffff" }}></i>
            Crear nuevo usuario
          </button>
        </div>
      </header>
      <main className="main">
        <div className="main__div">
          {allUsers?.length ? (
            allUsers.map((user) => (
              <User
                key={user.id}
                user={user}
                removeUser={removeUser}
                setDataUserRemove={setDataUserRemove}
                setClassDelete={setClassDelete}
                setUpdateInfoUser={setUpdateInfoUser}
                setOpenSectionCreate={setOpenSectionCreate}
              />
            ))
          ) : (
            <h2>Por el momento no hay usuarios registrados ☹️</h2>
          )}
        </div>
      </main>
      <div className={`${classDelete}`}>
        <div>
          {dataUserRemove?.map((dataRemoved) => (
            <UserDeleteMessage
              key={dataRemoved.id}
              dataRemoved={dataRemoved}
              setDataUserRemove={setDataUserRemove}
              setClassDelete={setClassDelete}
              classDelete={classDelete}
            />
          ))}
        </div>
      </div>
      <div className={`${openSectionCreate}`}>
        <div>
          <FormUser
            createNewUser={createNewUser}
            updateInfoUser={updateInfoUser}
            setUpdateInfoUser={setUpdateInfoUser}
            updateUser={updateUser}
            setOpenSectionCreate={setOpenSectionCreate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
