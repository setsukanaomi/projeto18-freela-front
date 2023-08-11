/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [poros, setPoros] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        name,
        setName,
        poros,
        setPoros,
        loading,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};
