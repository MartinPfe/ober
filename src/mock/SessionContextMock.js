import { default as React } from "react";

const MockSessionContext = React.createContext(null);

const MockSessionProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [status, setStatus] = React.useState("init");

  React.useEffect(() => {
    const user = {
      uid: "123123",
      displayName: "Martin Pfeiffer",
    };

    setUser(user);

    setStatus("restored");
  }, []);

  const state = { user };
  const actions = {};

  return (
    <MockSessionContext.Provider value={{ state, actions, status }}>
      {children}
    </MockSessionContext.Provider>
  );
};

export { MockSessionProvider as Provider, MockSessionContext as default };
