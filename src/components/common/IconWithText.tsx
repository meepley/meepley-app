import React from "react";
import { Flex, Icon, Text } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import { AccessibilityRole } from "react-native";

const TextWithIcon: React.FC<{
  w: string;
  iconName: string;
  text: (string | undefined)[] | string;
  fontStyle?: string;
  iconLibrary?: any;
  accLabel: string;
}> = ({
  iconName,
  text,
  w,
  fontStyle = "normal",
  iconLibrary = EvilIcons,
  accLabel,
}) => {
  return (
    <Flex width={w} flexDirection="row" alignItems="center">
      <Icon
        size="6"
        color="brand.500"
        as={iconLibrary}
        name={iconName}
        accessibilityLabel={accLabel}
        accessibilityRole="image"
        mr={1}
      />
      <Text fontStyle={fontStyle}>{text}</Text>
    </Flex>
  );
};

export default TextWithIcon;
