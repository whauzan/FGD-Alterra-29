import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#9747FF",
      200: "#D1D1D1",
      300: "#B3B3B3",
      600: "#0A1128",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});
