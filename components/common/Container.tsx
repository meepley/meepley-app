import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box } from "native-base";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  // #FAFAFA
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
