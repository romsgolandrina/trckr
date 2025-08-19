import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import Resources from "./pages/Resources";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/application" element={<Applications />} />
          <Route path="/resources" element={<Resources />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
