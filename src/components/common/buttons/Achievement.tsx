import React from "react";

import { Box, Center, Flex, Heading, Icon, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";

import Btn from "@components/common/buttons/Btn";

const Achievement: React.FC<{
  title: string;
  text: string;
  color: string;
  icon: string;
  openAchievementCallback: () => void;
}> = ({ title, text, color, icon, openAchievementCallback }) => {
  return (
    <Btn
      w="full"
      variant="ghost"
      bgColor="white"
      marginBottom={4}
      borderColor="gray.100"
      style={{
        elevation: 5,
        height: 90,
        borderRadius: 35,
        shadowColor: "rgba(40,40,40,0.78)",
      }}
      onPress={() => openAchievementCallback()}
    >
      <Flex
        w="100%"
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <Center w="50" h="50" rounded="full" bgColor={`${color}.500`}>
          <Icon size="6" name="staro" color="white" as={AntDesign} />
        </Center>
        <Box w="72%">
          <Heading pb="0.5" fontSize={16} numberOfLines={1}>
            {title}
          </Heading>
          <Text
            fontSize="xs"
            color="gray.400"
            fontWeight="light"
            numberOfLines={1}
          >
            {text}
          </Text>
        </Box>
      </Flex>
    </Btn>
  );
};

export default Achievement;
