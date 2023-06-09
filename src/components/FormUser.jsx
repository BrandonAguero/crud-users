import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({
  createNewUser,
  updateInfoUser,
  setUpdateInfoUser,
  updateUser,
}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(updateInfoUser);
  }, [updateInfoUser]);

  const onSubmit = (data) => {
    if (updateInfoUser) {
      updateUser("/users", data.id, data);
      setUpdateInfoUser();
    } else {
      createNewUser("/users/", data);
    }

    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="first_name">Nombre</label>
        <input
          {...register("first_name")}
          type="text"
          placeholder="Luis José"
          id="first_name"
        />
      </div>
      <div>
        <label htmlFor="last_name">Apellidos</label>
        <input
          {...register("last_name")}
          type="text"
          placeholder="Quispe Flores"
          id="last_name"
        />
      </div>
      <div>
        <label htmlFor="email">Correo</label>
        <input
          {...register("email")}
          type="email"
          placeholder="luisquispe@gmail.com"
          id="email"
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <input
          {...register("password")}
          type="password"
          placeholder="**********"
          id="password"
        />
      </div>
      <div>
        <label htmlFor="birthday">Cumpleaños</label>
        <input {...register("birthday")} type="date" id="birthday" />
      </div>
      <input type="submit" />
    </form>
  );
};

export default FormUser;
