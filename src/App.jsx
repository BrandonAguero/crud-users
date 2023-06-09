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
  const [updateInfoUser, setUpdateInfoUser] = useState();

  useEffect(() => {
    getUsers("/users/");
  }, []);

  console.log(allUsers);

  return (
    <>
      <FormUser
        createNewUser={createNewUser}
        updateInfoUser={updateInfoUser}
        setUpdateInfoUser={setUpdateInfoUser}
        updateUser={updateUser}
      />
      <section>
        {allUsers?.map((user) => (
          <User
            key={user.id}
            user={user}
            removeUser={removeUser}
            setDataUserRemove={setDataUserRemove}
            setClassDelete={setClassDelete}
            setUpdateInfoUser={setUpdateInfoUser}
          />
        ))}
      </section>
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
    </>
  );
}

export default App;
