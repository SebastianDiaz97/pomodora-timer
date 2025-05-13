import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/700.css"; // Bold
import theme from "./theme";
import { PomodoroProvider } from "./providers/PomodoroProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <PomodoroProvider>
        <App />
      </PomodoroProvider>
    </ChakraProvider>
  </React.StrictMode>
);
