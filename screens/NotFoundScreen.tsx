import React from "react";
import { Box, ScrollView } from "native-base";

import Error from "@components/feedback/Error";
import { useWindowDimensions } from "react-native";

const NotFoundScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <ScrollView>
      <Box bg="white" minH={height}>
        <Error type="400" />
      </Box>
    </ScrollView>
  );
};

export default NotFoundScreen;
