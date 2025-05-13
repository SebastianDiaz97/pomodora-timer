import { useEffect, useState } from "react";
import { PomodoroContext } from "../context/PomodoroContext";
import { SessionType } from "../type/SessionType";

export const PomodoroProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [timePomodoro, setTimePomodoro] = useState(25 * 60);
  const [timeSb, setTimeSb] = useState(5 * 60);
  const [timeLb, setTimeLb] = useState(15 * 60);
  const [time, setTime] = useState(timePomodoro);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState<SessionType>("Pomodoro");

  useEffect(() => {
    let interval: number;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }, 10);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (sessionType === "Pomodoro") setTime(timePomodoro);
    if (sessionType === "Short Break") setTime(timeSb);
    if (sessionType === "Long Break") setTime(timeLb);
  }, [sessionType, timePomodoro, timeSb, timeLb]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    if (sessionType === "Pomodoro") setTime(timePomodoro);
    if (sessionType === "Short Break") setTime(timeSb);
    if (sessionType === "Long Break") setTime(timeLb);
  };

  return (
    <PomodoroContext.Provider
      value={{
        timePomodoro,
        setTimePomodoro,
        timeSb,
        setTimeSb,
        timeLb,
        setTimeLb,
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
