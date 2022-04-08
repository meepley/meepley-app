import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import { Center, Heading } from "native-base";

import { rnd } from "@utils/helpers/main/random";

const loadingMessages = [
  "A carregar estratégias...",
  "A lançar os dados...",
  "A procurar party players...",
  "A preparar o tabuleiro...",
  "A mergulhar em mundos distantes...",
];

const Loading: React.FC<{
  isBgWhite?: boolean;
  hasMessage?: true;
  size?: number;
}> = ({ isBgWhite = true, hasMessage = true, size = 150 }) => {
  const randomMessage = loadingMessages[rnd(loadingMessages.length - 1)];

  return (
    <Center>
      <LottieView
        autoPlay
        style={styles.animation}
        source={
          isBgWhite
            ? require("@assets/animations/dice-animation-white.json")
            : require("@assets/animations/dice-animation-gray.json")
        }
      />
      <Heading fontSize="16">{randomMessage}</Heading>
    </Center>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 150,
    height: 150,
  },
});

export default Loading;
