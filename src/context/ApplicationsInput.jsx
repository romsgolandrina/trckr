import React, { createContext, useState, useContext, useEffect } from "react";

const ApplicationsContext = createContext();

export const UserApplication = ({ children }) => {
  const [jobTrack, setJobTrack] = useState(() => {
    try {
      const saved = localStorage.getItem("jobTrack");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("jobTrack", JSON.stringify(jobTrack));
  }, [jobTrack]);

  // ✅ Add a new application
  const addApplication = (application) => {
    setJobTrack((prev) => [
      ...prev,
      {
        company: "",
        jobPosition: "",
        dateApplied: "",
        status: "",
        salary: "",
        location: "",
        ...application, // overwrite with provided values
      },
    ]);
  };

  // ✅ Update an existing application by index
  const updateApplication = (index, updatedApp) => {
    setJobTrack((prev) =>
      prev.map((app, i) => (i === index ? { ...app, ...updatedApp } : app))
    );
  };

  // ✅ Delete an application by index
  const deleteApplication = (index) => {
    setJobTrack((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ApplicationsContext.Provider
      value={{ jobTrack, addApplication, updateApplication, deleteApplication }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

export const useUserApplication = () => useContext(ApplicationsContext);
