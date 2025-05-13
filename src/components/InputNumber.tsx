import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { usePomodoro } from "../hooks/usePomodoro";
import { ReactNode } from "react";

type Props = {
  defaultValue: number;
  change: (change: number) => void;
  children: ReactNode;
};

function InputNumber({ defaultValue, change, children }: Props) {
  const { resetTimer } = usePomodoro();
  function onChange(e: string) {
    change(Number(e) * 60);
    resetTimer();
  }
  return (
    <>
      <Text>{children}</Text>
      <NumberInput defaultValue={defaultValue} min={0} onChange={onChange}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
}

export default InputNumber;
