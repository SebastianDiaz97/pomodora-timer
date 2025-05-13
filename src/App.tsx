import { Container } from "@chakra-ui/react";
import MainTimer from "./components/MainTimer";
import ModalSettings from "./components/ModalSettings";
import SelectMode from "./components/SelectMode";
import Title from "./components/Title";

function App() {
  return (
    <Container maxW={"90%"} centerContent mt={"20px"}>
      <Title />
      <SelectMode />
      <MainTimer />
      <ModalSettings />
    </Container>
  );
}

export default App;
