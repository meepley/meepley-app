import React from "react";
import { Flex, Icon, Text } from "native-base";
import { EvilIcons } from "@expo/vector-icons";

const TextWithIcon: React.FC<{
  w: string;
  iconName: string;
  text: (string | undefined)[] | string;
  fontStyle?: string;
  iconLibrary?: any;
}> = ({ iconName, text, w, fontStyle = "normal", iconLibrary = EvilIcons }) => {
  return (
    <Flex width={w} flexDirection="row" alignItems="center">
      <Icon
        size="6"
        color="brand.500"
        as={iconLibrary}
        name={iconName}
        mr={1}
      />
      <Text fontSize="11" fontStyle={fontStyle}>
        {text}
      </Text>
    </Flex>
  );
};

export default TextWithIcon;
