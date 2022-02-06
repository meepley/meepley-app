import React from "react";
import { Image } from "react-native";

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 175, height: 80 }}
      resizeMode="contain"
      source={require("@assets/images/branding/logo.png")}
    />
  );
};

export default LogoTitle;
