import { Box, ButtonGroup, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cycle from "./Cycle";
import TimerButton from "./TimerButton";

type Props = { mode: string };

function setTimer(mode: string) {
  switch (mode) {
    case "Pomodoro":
      return 25;
    case "Short Break":
      return 5;
    case "Long Break":
      return 15;
    default:
      return 0;
  }
}
const formatTime = (seconds: number) => {
  const min = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
};

function MainTimer({ mode }: Props) {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTime(setTimer(mode) * 60), setIsActive(false);
  }, [mode]);

  useEffect(() => {
    let intervalId: number = 0;

    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime(time - 1);
      }, 10);
    }

    if (time === 0 && isActive) {
      clearInterval(intervalId);
      setIsActive(false);
    }

    return () => clearInterval(intervalId);
  }, [isActive, time]);

  return (
    <>
      <Box
        w={"300px"}
        h={"300px"}
        mt={"30px"}
        borderRadius={"50%"}
        bg={mode === "Pomodoro" ? "red.500" : "green.500"}
        color={"white"}
        alignContent={"center"}
        justifyItems={"center"}
      >
        <Cycle time={formatTime(time)} />
        <Text fontSize={"3xl"} mt={"20px"}>
          {mode === "Pomodoro" ? "Focus" : ""}
          {mode === "Short Break" ? "Short Break" : ""}
          {mode === "Long Break" ? "Long Break" : ""}
        </Text>
      </Box>

      <ButtonGroup isAttached variant="outline" mt={"20px"}>
        <TimerButton onClick={() => setIsActive(true)}>Start</TimerButton>
        <TimerButton onClick={() => setIsActive(false)}>Stop</TimerButton>
        <TimerButton
          onClick={() => {
            setIsActive(false);
            setTime(setTimer(mode) * 60);
          }}
        >
          Reset
        </TimerButton>
      </ButtonGroup>
    </>
  );
}

export default MainTimer;
