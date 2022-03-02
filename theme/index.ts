import { extendTheme } from "native-base";

const meepleyColorTheme = {
  brand: {
    100: "#F0ECFD",
    200: "#E0DAFC",
    300: "#CEC6F8",
    400: "#BEB5F2",
    500: "#A69BEA",
    600: "#7C71C9",
    700: "#584EA8",
    800: "#393187",
    900: "#241D70",
  },
  brandGradients: {
    50: "#E3F2F9",
    100: "#C5E4F3",
  },
  lGreen: {
    100: "#CADF9A",
    200: "#C1D989",
    300: "#B9D479",
    400: "#B0CE68",
    500: "#A7C957",
    600: "#96B54E",
    700: "#86A146",
    800: "#758D3D",
    900: "#647934",
  },
  lYellow: {
    100: "#FEF8CB",
    200: "#FEEF98",
    300: "#FEE365",
    400: "#FDD83F",
    500: "#FDC500",
    600: "#D9A400",
    700: "#B68500",
    800: "#926800",
    900: "#795300",
  },
  lRed: {
    100: "#FEE9DE",
    200: "#FDCEBE",
    300: "#FBAD9D",
    400: "#F88D83",
    500: "#F45B5B",
    600: "#D1424E",
    700: "#AF2D44",
    800: "#8D1D3A",
    900: "#751133",
  },
  grays: {
    500: "#979797",
    light: "#FAFAFA",
    bottomBar: "#F4F4F4",
  },
};

const theme = extendTheme({
  colors: meepleyColorTheme,
  fontConfig: {
    Poppins: {
      300: {
        normal: "Poppins_300Light",
        italic: "Poppins_300Light_Italic",
      },
      400: {
        normal: "Poppins_400Regular",
        italic: "Poppins_400Regular_Italic",
      },
      500: {
        normal: "Poppins_500Medium",
        italic: "Poppins_500Medium_Italic",
      },
      700: {
        normal: "Poppins_700Bold",
        italic: "Poppins_700Bold_Italic",
      },
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
    mono: "Poppins",
  },
  components: {
    Text: {
      variants: {
        shadow: () => {
          return {
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          };
        },
      },
    },
    Input: {
      baseStyle: {
        _focus: {
          borderColor: "#A7C957",
        },
      },
    },
  },
});

type CustomThemeType = typeof theme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}

export default theme;
