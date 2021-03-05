import React from "react";

const LoginButton = ({ signIn, status }) => (
  <div>
    {status === "init" && <span>Intentando de restaurar sesión...</span>}
    {status === "restored" && (
      <button onClick={signIn}>Iniciar sesión con Google</button>
    )}
  </div>
);

export default LoginButton;
