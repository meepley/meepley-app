import React from "react";
import { useWindowDimensions } from "react-native";

import { Box, Heading, ScrollView } from "native-base";

const SettingsScreen = () => {
  const { height } = useWindowDimensions();

  return (
    <ScrollView>
      {/* Place Image Section + Transparent Header */}
      <Box bgColor="white" minHeight={height}>
        <Heading>Definições</Heading>
      </Box>
    </ScrollView>
  );
};

export default SettingsScreen;
