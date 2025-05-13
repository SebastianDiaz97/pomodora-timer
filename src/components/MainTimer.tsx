import { Box, ButtonGroup, Text } from "@chakra-ui/react";
import { usePomodoro } from "../hooks/usePomodoro";
import Cycle from "./Cycle";
import TimerButton from "./TimerButton";

const formatTime = (seconds: number) => {
  const min = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const sec = (seconds % 60).toString().padStart(2, "0");
  return `${min}:${sec}`;
};

function MainTimer() {
  const { time, sessionType, startTimer, pauseTimer, resetTimer } =
    usePomodoro();
  return (
    <>
      <Box
        w={"300px"}
        h={"300px"}
        mt={"30px"}
        borderRadius={"50%"}
        bg={sessionType === "Pomodoro" ? "red.500" : "green.500"}
        color={"white"}
        alignContent={"center"}
        justifyItems={"center"}
      >
        <Cycle time={formatTime(time)} />
        <Text fontSize={"3xl"} mt={"20px"}>
          {sessionType === "Pomodoro" ? "Focus" : ""}
          {sessionType === "Short Break" ? "Short Break" : ""}
          {sessionType === "Long Break" ? "Long Break" : ""}
        </Text>
      </Box>

      <ButtonGroup isAttached variant="outline" mt={"20px"}>
        <TimerButton onClick={() => startTimer()}>Start</TimerButton>
        <TimerButton onClick={() => pauseTimer()}>Stop</TimerButton>
        <TimerButton onClick={() => resetTimer()}>Reset</TimerButton>
      </ButtonGroup>
    </>
  );
}

export default MainTimer;
