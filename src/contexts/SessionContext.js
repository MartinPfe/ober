import React from "react";
import AuthApi from "../api/AuthApi";

const SessionContext = React.createContext(null);

const SessionProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [, setStatus] = React.useState("init");

  React.useEffect(() => {
    AuthApi.onChange((user) => {
      setUser(user);

      setStatus("restored");
    });
  }, []);

  //   if (!user) return <LoginButton signIn={AuthApi.signIn} status={status} />;

  const state = { user };
  const actions = { signOut: AuthApi.signOut, signIn: AuthApi.signIn };

  return (
    <SessionContext.Provider value={{ state, actions }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider as Provider, SessionContext as default };
