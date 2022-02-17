import React from "react";
import { Box, Image, Text } from "native-base";
import { rnd } from "@utils/helpers/random";
import BouncingPreloader from "react-native-bouncing-preloaders";

const loadingMessages = ["", "", "", "", ""];

const Loading = () => {
  const randomMessage = loadingMessages[rnd(loadingMessages.length - 1)];

  return (
    <Box>
      <BouncingPreloader
        icons={[
          "https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png",
          "https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png",
          "https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png",
        ]}
        leftRotation="-680deg"
        rightRotation="360deg"
        leftDistance={-180}
        rightDistance={-250}
        speed={1200}
      />
      <Text>Loading</Text>
      <Text>{randomMessage}</Text>
    </Box>
  );
};

export default Loading;
