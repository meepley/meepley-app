import React from "react";
import { Flex, Pressable } from "native-base";

const SpeechBubbleBtn: React.FC<{
  children: React.ReactNode;
  direction: string;
  color: string;
  onNavigate: () => void;
}> = ({ children, direction, color, onNavigate }) => {
  return (
    <Pressable onPress={onNavigate}>
      <Flex
        bgColor={color}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        borderTopRadius="full"
        w="24"
        h="24"
        m="1"
        shadow="5"
        borderBottomLeftRadius={direction === "left" ? "none" : "full"}
        borderBottomRightRadius={direction === "right" ? "none" : "full"}
      >
        {children}
      </Flex>
    </Pressable>
  );
};

export default SpeechBubbleBtn;
