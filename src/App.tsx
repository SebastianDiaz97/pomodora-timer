import Title from "./components/Title";
import SelectMode from "./components/SelectMode";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import MainTimer from "./components/MainTimer";
import ModalSettings from "./components/ModalSettings";

function App() {
  const [mode, setMode] = useState("Pomodoro");
  return (
    <Container maxW={"90%"} centerContent mt={"20px"}>
      <Title />
      <SelectMode setMode={setMode} />
      <MainTimer mode={mode} />
      <ModalSettings/>
    </Container>
  );
}

export default App;
