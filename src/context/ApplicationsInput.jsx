import React, { createContext, useState, useContext, useEffect } from "react";

const ApplicationsContext = createContext();

export const UserApplication = ({ children }) => {
  // Load initial state from LocalStorage if available
  const [jobTrack, setJobTrack] = useState(() => {
    const saved = localStorage.getItem("jobTrack");
    return saved
      ? JSON.parse(saved)
      : {
          company: "",
          jobPosition: "",
          dateApplied: "",
          status: "",
          salary: "",
          location: "",
        };
  });

  // Save to localStorage whenever jobTrack changes
  useEffect(() => {
    localStorage.setItem("jobTrack", JSON.stringify(jobTrack));
  }, [jobTrack]);

  return (
    <ApplicationsContext.Provider value={{ jobTrack, setJobTrack }}>
      {children}
    </ApplicationsContext.Provider>
  );
};

export const useUserApplication = () => useContext(ApplicationsContext);
