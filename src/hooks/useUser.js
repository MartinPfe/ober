import React from "react";
import SessionContext from "../contexts/SessionContext";

const useUser = () => {
  const {
    state: { user },
  } = React.useContext(SessionContext);

  return user;
};

export default useUser;
