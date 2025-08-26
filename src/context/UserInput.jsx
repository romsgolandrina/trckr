import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserInput = ({ children }) => {
  // Load initial state from localStorage if available
  const [userData, setUserData] = useState(() => {
    const saved = localStorage.getItem("userData");
    return saved
      ? JSON.parse(saved)
      : {
          firstName: "",
          lastName: "",
          position: "",
        };
  });

  // Save to localStorage whenever userData changes
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
