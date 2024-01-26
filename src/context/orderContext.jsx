import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setUserDataContext = (data) => {
    setUserData(data);
  };

  return (
    <AppContext.Provider value={{ userData, setUserDataContext }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
