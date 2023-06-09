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

  useEffect(() => {
    getUsers("/users/");
  }, []);

  console.log(allUsers);

  return (
    <>
      <FormUser createNewUser={createNewUser} />
      {allUsers?.map((user) => (
        <User
          key={user.id}
          user={user}
          removeUser={removeUser}
          setDataUserRemove={setDataUserRemove}
        />
      ))}
      {dataUserRemove && (
        <UserDeleteMessage
          dataUserRemove={dataUserRemove}
          setDataUserRemove={setDataUserRemove}
        />
      )}
    </>
  );
}

export default App;
