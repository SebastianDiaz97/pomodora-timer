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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CiSettings } from "react-icons/ci";
import InputNumber from "./InputNumber";


function ModalSettings() {
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
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
            <Grid templateColumns={"repeat(3, 1fr)"}>
              <GridItem w={"100%"}>
                <Text>Pomodoro</Text>
                <InputNumber defaultValue={25} />
              </GridItem>
              <GridItem w={"100%"}>
                <Text>Short Break</Text>
                <InputNumber defaultValue={25} />
              </GridItem>
              <GridItem w={"100%"}>
                <Text>Long Break</Text>
                <InputNumber defaultValue={25} />
              </GridItem>
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalSettings;
