import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer
      autoClose={1000}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      limit={1}
    />
    <App />
  </StrictMode>
);
