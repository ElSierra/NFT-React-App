import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const dark = "rgba(0, 0, 0)";
const light = "rgba(0, 0, 0)";

const theme = extendTheme({
  config:  {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  breakpoints: {
    
    sm: "580px",
    md: "650px",
    lg: "960px",
    xl: "1000px",
    xll: "1280px",
    big: "1500px",
  },
 
});

export default theme;
