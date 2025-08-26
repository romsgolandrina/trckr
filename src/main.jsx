import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UserInput } from "./context/UserInput.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserInput>
      <App />
    </UserInput>
  </StrictMode>
);
