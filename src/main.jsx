import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MovieProvider } from "./components/MovieContext.jsx";
createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </MovieProvider>
);
