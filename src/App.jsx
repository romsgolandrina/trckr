import React, { useState, useEffect, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import JobTracker from "./pages/JobTracker";
import Resources from "./pages/Resources";
import Layout from "./pages/Layout/Layout";
import Loader from "./components/loader/loader";

// Create a simple context for app loading
const AppLoadingContext = createContext();

export const useAppLoading = () => {
  const context = useContext(AppLoadingContext);
  if (!context) {
    throw new Error("useAppLoading must be used within AppLoadingProvider");
  }
  return context;
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true); // Website first load
  const [appLoading, setAppLoading] = useState(false); // "Start Tracking" load

  // Initial website load
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Function to trigger app loading when "Start Tracking" is clicked
  const startAppLoading = () => {
    setAppLoading(true);

    // Simulate loading time for entering the main app
    setTimeout(() => {
      setAppLoading(false);
    }, 2000); // Adjust timing as needed
  };

  return (
    <AppLoadingContext.Provider value={{ startAppLoading }}>
      <div>
        {initialLoading || appLoading ? (
          <Loader />
        ) : (
          <Router>
            <Routes>
              <Route index element={<LoginPage />} />
              <Route path="/" element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/jobTracker" element={<JobTracker />} />
                <Route path="/resumeBuilder" element={<Resources />} />
              </Route>
            </Routes>
          </Router>
        )}
      </div>
    </AppLoadingContext.Provider>
  );
}

export default App;
