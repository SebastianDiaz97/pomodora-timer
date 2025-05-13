// PomodoroContext.tsx
import { createContext } from "react";
import { SessionType } from "../type/SessionType";

// type SessionType = "work" | "shortBreak" | "longBreak";

interface PomodoroContextProps {
  time: number;
  isRunning: boolean;
  sessionType: SessionType;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  setSessionType: (type: SessionType) => void;
}

export const PomodoroContext = createContext<PomodoroContextProps | undefined>(
  undefined
);
