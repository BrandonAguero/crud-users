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

  useEffect(() => {
    getUsers("/users/");
  }, []);

  console.log(allUsers);

  return (
    <>
      <FormUser createNewUser={createNewUser} />
      <section>
        {allUsers?.map((user) => (
          <User
            key={user.id}
            user={user}
            removeUser={removeUser}
            setDataUserRemove={setDataUserRemove}
            setClassDelete={setClassDelete}
          />
        ))}
      </section>
      <div className={`${classDelete}`}>
        {dataUserRemove?.map((dataRemoved) => (
          <UserDeleteMessage
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
