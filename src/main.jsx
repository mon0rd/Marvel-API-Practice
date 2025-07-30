import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/styles/index.sass";
import App from "/src/Components/App/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
