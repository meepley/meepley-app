import React from "react";
import { Flex, Pressable } from "native-base";

const SpeechBubbleBtn: React.FC<{
  children: React.ReactNode;
  direction: string;
  color: string;
  onNavigate: () => void;
}> = ({ children, direction, color, onNavigate }) => {
  return (
    <Pressable
      accessibilityLabel=""
      accessibilityRole="button"
      onPress={onNavigate}
    >
      <Flex
        shadow="5"
        bgColor={color}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        borderTopRadius="full"
        style={{ width: 110, height: 110 }}
        borderBottomLeftRadius={direction === "left" ? "none" : "full"}
        borderBottomRightRadius={direction === "right" ? "none" : "full"}
      >
        {children}
      </Flex>
    </Pressable>
  );
};

export default SpeechBubbleBtn;
