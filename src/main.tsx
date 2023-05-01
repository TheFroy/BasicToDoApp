import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme as theme } from "./config/theme.ts";

const Root = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Global
        styles={{
          "& body": {
            fontFamily: "Lato, sans-serif !important",
            position: "relative",
            overflow: "hidden",
          },
        }}
      />
      <ThemeProvider theme={isDark ? theme.dark : theme.light}>
        <App isDark={isDark} setIsDark={setIsDark} />
      </ThemeProvider>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
