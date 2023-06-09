import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import FormUser from "./components/FormUser";
import User from "./components/User";
import UserDeleteMessage from "./components/UserDeleteMessage";

function App() {
  const baseUrl = "https://users-crud.academlo.tech";

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
          {allUsers?.map((user) => (
            <User
              key={user.id}
              user={user}
              removeUser={removeUser}
              setDataUserRemove={setDataUserRemove}
              setClassDelete={setClassDelete}
              setUpdateInfoUser={setUpdateInfoUser}
              setOpenSectionCreate={setOpenSectionCreate}
            />
          ))}
        </div>
      </main>
      <div className={`${classDelete}`}>
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
      <div className={`${openSectionCreate}`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfoUser={updateInfoUser}
          setUpdateInfoUser={setUpdateInfoUser}
          updateUser={updateUser}
          setOpenSectionCreate={setOpenSectionCreate}
        />
      </div>
    </>
  );
}

export default App;
