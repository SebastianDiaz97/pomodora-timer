import { Button } from "@chakra-ui/react";

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

function TimerButton({ children, onClick}: Props) {
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
    >
      {children}
    </Button>
  );
}

export default TimerButton;
