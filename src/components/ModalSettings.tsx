import {
  Button,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { CiSettings } from "react-icons/ci";
import { usePomodoro } from "../hooks/usePomodoro";
import InputNumber from "./InputNumber";

function ModalSettings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    pauseTimer,
    timePomodoro,
    setTimePomodoro,
    timeSb,
    setTimeSb,
    timeLb,
    setTimeLb,
  } = usePomodoro();
  return (
    <>
      <Button
        onClick={() => {
          onOpen(), pauseTimer();
        }}
      >
        <CiSettings />
        Settings
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SETTING</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>Time (minutes)</Heading>
            <Grid templateColumns={"repeat(3, 1fr)"} mt={6}>
              <GridItem w={"100%"}>
                <InputNumber
                  defaultValue={timePomodoro / 60}
                  change={setTimePomodoro}
                >
                  Pomodoro
                </InputNumber>
              </GridItem>
              <GridItem w={"100%"}>
                <InputNumber defaultValue={timeSb / 60} change={setTimeSb}>
                  Short Break
                </InputNumber>
              </GridItem>
              <GridItem w={"100%"}>
                <InputNumber defaultValue={timeLb / 60} change={setTimeLb}>
                  Long Break
                </InputNumber>
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalSettings;
