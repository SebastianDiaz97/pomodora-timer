import { useEffect, useState } from "react";
import { PomodoroContext } from "../context/PomodoroContext";
import { SessionType } from "../type/SessionType";

export const PomodoroProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [time, setTime] = useState(25 * 60); // 25 minutos por defecto
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState<SessionType>("Pomodoro");

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (sessionType === "Pomodoro") setTime(25 * 60);
    if (sessionType === "Short Break") setTime(5 * 60);
    if (sessionType === "Long Break") setTime(15 * 60);
  }, [sessionType]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    if (sessionType === "Pomodoro") setTime(25 * 60);
    if (sessionType === "Short Break") setTime(5 * 60);
    if (sessionType === "Long Break") setTime(15 * 60);
  };

  return (
    <PomodoroContext.Provider
      value={{
        time,
        isRunning,
        sessionType,
        startTimer,
        pauseTimer,
        resetTimer,
        setSessionType,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
