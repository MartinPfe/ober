import React from "react";
import AuthApi from "../api/AuthApi";
import useUser from "../hooks/useUser";

const Header = () => {
  const user = useUser();

  return (
    <div>
      {user ? (
        <div>
          <div> Bienvenid@ {user.displayName} </div>
          <button onClick={AuthApi.signOut}>Cerrar sesión</button>
        </div>
      ) : (
        <button onClick={AuthApi.signIn}>Iniciar sesión</button>
      )}
    </div>
  );
};

export default Header;
