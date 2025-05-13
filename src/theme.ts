// theme.ts
import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",  // o "dark"
    useSystemColorMode: false,
};
const theme = extendTheme({
    config,
    fonts: {
        heading: `'Poppins', sans-serif`,
        body: `'Poppins', sans-serif`,
    },
    styles: {
        global: (props: { colorMode: string; }) => ({
            body: {
                bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
                color: props.colorMode === "dark" ? "gray.100" : "gray.800",
            },
        }),
    },
});

export default theme;
