import { useContext } from "react";
import { PomodoroContext } from "../context/PomodoroContext";

export const usePomodoro = () => {
  const context = useContext(PomodoroContext);
  if (!context) {
    throw new Error("usePomodoro debe usarse dentro de un PomodoroProvider");
  }
  return context;
};