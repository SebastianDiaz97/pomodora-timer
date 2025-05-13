import { Button } from "@chakra-ui/react";
import { usePomodoro } from "../hooks/usePomodoro";

type Props = { children: string; onClick: () => void };

function colorButton(children: string) {
  switch (children) {
    case "Start":
      return "green";
    case "Stop":
      return "red";
    case "Reset":
      return "gray";

    default:
      break;
  }
}

function TimerButton({ children, onClick }: Props) {
  const { isRunning } = usePomodoro();
  const color = colorButton(children);
  return (
    <Button
      fontSize="xl"
      h={"50px"}
      mt={"30px"}
      bg={`${color}.600`}
      borderRadius={"20px"}
      color={"white"}
      _hover={{ bg: `${color}.500` }}
      onClick={onClick}
      isDisabled={
        children === "Reset"
          ? false
          : children === "Start"
          ? isRunning
          : !isRunning
      }
    >
      {children}
    </Button>
  );
}

export default TimerButton;
