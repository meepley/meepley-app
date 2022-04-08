import React from "react";
import { Pressable } from "react-native";

import { Avatar, Box, Center, Flex, Heading, Icon, Text } from "native-base";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ChooseCard: React.FC<{
  title: string;
  text: string | null;
  asset: string;
  onPressCard: () => void;

}> = ({ title, text, asset, onPressCard}) => {
  return (
    <Pressable onPress={onPressCard}>
      <Flex
        p={6}
        shadow={2}
        flexDirection="row"
        alignItems="center"
        borderRadius="full"
        backgroundColor="white"
      >
        <Center
          mr={3}
          width="50"
          height="50"
          borderRadius="full"
          backgroundColor="brand.500"
        >
            <Icon
              as={FontAwesome5}
              name={asset}
              color="white"
              size="6"
              ml = { title === "Local" ? 1 : 0}
            />
            

        </Center>
        <Box w="58%" mx={2}>
          <Heading numberOfLines={2} fontSize="14" pb={text ? 1 : 0}>
            {title}
          </Heading>
          {text ? (
            <Text fontSize="10" numberOfLines={1} color="gray.500">
              {text}
            </Text>
          ) : null}
        </Box>
        <Icon as={Feather} name="edit" color="lGreen.500" size={4} />
      </Flex>
    </Pressable>
  );
};

export default ChooseCard;
