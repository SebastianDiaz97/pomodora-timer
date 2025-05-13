import { Heading } from "@chakra-ui/react";

type Props = { time: string };

function Cycle({ time }: Props) {
  return (
    <>
      <Heading
        fontSize="6xl"
        h={"60px"}
        w={"200px"}
        p={0}
        textAlign={"center"}
        border={"0px"}
        // mb={'30px'}
      >{time}</Heading>
    </>
  );
}

export default Cycle;
