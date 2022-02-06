import { INativebaseConfig } from "native-base";

export const nbConfig: INativebaseConfig = {
  strictMode: "off",
  disableContrastText: true,
  suppressColorAccessibilityWarning: true,
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};
