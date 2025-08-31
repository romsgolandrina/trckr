import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import JobTracker from "./pages/JobTracker";
import Resources from "./pages/Resources";
import Layout from "./pages/Layout/Layout";
import Loader from "./components/loader/loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path="/" element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/jobtracker" element={<JobTracker />} />
              <Route path="/resources" element={<Resources />} />
            </Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
