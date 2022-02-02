import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
};

export default Container;
