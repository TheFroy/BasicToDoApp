import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global
      styles={{
        "& body": {
          fontFamily: "Lato, sans-serif !important",
          background: "linear-gradient(135deg, #f5af19, #f12711)",
          overflow: "hidden",
          margin: 0,
          padding: 0,
          height: "100vh",
          width: "100vw",
          position: "relative",
        },
      }}
    />
    <App />
  </React.StrictMode>
);
