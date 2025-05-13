import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
// import { usePomodoro } from "../hooks/usePomodoro";

type Props = {
  setMode: (mode: string) => void;
};

function SelectMode({ setMode }: Props) {
  // const {setSessionType} = usePomodoro();
  const [active, setActive] = useState<number | null>(null);
  return (
    <>
      <ButtonGroup isAttached variant="outline" mt={"20px"}>
        {["Pomodoro", "Short Break", "Long Break"].map((n, i) => (
          <Button
            key={i}
            onClick={() => {
              setActive(i);
              setMode(n);
            }}
            p={1}
            border={active === i ? "2px solid" : "1px solid"}
            borderColor={active === i ? "red.300" : "gray.200"}
          >
            {n}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
}

export default SelectMode;
