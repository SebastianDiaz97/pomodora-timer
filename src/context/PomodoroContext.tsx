// PomodoroContext.tsx
import { createContext } from "react";
import { SessionType } from "../type/SessionType";


interface PomodoroContextProps {
  timePomodoro: number;
  timeSb: number;
  timeLb: number;
  time: number;
  isRunning: boolean;
  sessionType: SessionType;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  setSessionType: (type: SessionType) => void;
  setTimePomodoro: (type: number) => void;
  setTimeSb: (type: number) => void;
  setTimeLb: (type: number) => void;
}

export const PomodoroContext = createContext<PomodoroContextProps | undefined>(
  undefined
);
