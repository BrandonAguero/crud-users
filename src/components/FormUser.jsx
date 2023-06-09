import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

const FormUser = ({
  createNewUser,
  updateInfoUser,
  setUpdateInfoUser,
  updateUser,
  setOpenSectionCreate,
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
    setOpenSectionCreate("hide-section-create");
  };

  const handleRemoveSection = () => {
    setOpenSectionCreate("hide-section-create");
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    setUpdateInfoUser();
  };

  return (
    <>
      <i
        onClick={handleRemoveSection}
        className="bx bx-x"
        style={{ color: "#212121", cursor: "pointer" }}
      ></i>
      <h3>{updateInfoUser ? "Editar Usuario" : "Nuevo Usuario"}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="first_name">Nombre</label>
          <input
            {...register("first_name", {
              required: true,
            })}
            type="text"
            placeholder="Luis José"
            id="first_name"
          />
        </div>
        <div>
          <label htmlFor="last_name">Apellidos</label>
          <input
            {...register("last_name", { required: true })}
            type="text"
            placeholder="Quispe Flores"
            id="last_name"
          />
        </div>
        <div>
          <label htmlFor="email">Correo</label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="luisquispe@gmail.com"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="**********"
            id="password"
          />
        </div>
        <div>
          <label htmlFor="birthday">Cumpleaños</label>
          <input
            {...register("birthday", { required: true })}
            type="date"
            id="birthday"
          />
        </div>
        <input
          type="submit"
          value={`${
            updateInfoUser ? "Guardar cambios" : "Agregar nuevo usuario"
          }`}
        />
      </form>
    </>
  );
};

export default FormUser;
