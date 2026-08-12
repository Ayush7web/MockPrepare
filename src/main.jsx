import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
// import AuthContext from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </>,
);
