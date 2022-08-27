import React, { useState } from "react";

const FormNomEdad = () => {
  const [user, setUser] = useState({
    name: "",
    edad: 0,
    error: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name === "" || user.edad < 10) setUser({ ...user, error: true });
    else {
      alert(`Hola ${user.name} tu edad nueva es: ${user.edad - 10}`);
      setUser({ ...user, name: "", edad: "" });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({ ...user, error: false, name: e.target.value })
          }
        />
        <br />
        <label>Edad (mayor a 10 años)</label>
        <input
          type="text"
          value={user.edad}
          onChange={(e) =>
            setUser({ ...user, error: false, edad: e.target.value })
          }
        />
        {console.log(user)}
        <br />
        {user.error && (
          <span>El nombre o la edad esta incorrecto. Reintentar</span>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormNomEdad;
