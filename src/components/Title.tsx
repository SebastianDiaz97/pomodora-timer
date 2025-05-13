import { Box, Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { FiMoon, FiSun } from "react-icons/fi";
import { GiTomato } from "react-icons/gi";

function Title() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex alignContent={"center"}>
      <Box alignContent={"center"} mr={"10px"}>
        <GiTomato color="red" size={"30px"} />
      </Box>
      <Heading textAlign={"center"} fontSize={"35px"}>
        Pomodoro Timer
      </Heading>
      <Box alignContent={"center"}>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
          onClick={toggleColorMode}
          variant="ghost"
          fontSize="20px"
          isRound
        />
      </Box>
    </Flex>
  );
}

export default Title;
