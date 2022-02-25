import React from "react";
import { Box, Center, Flex, Heading, Icon, Text } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

const ChooseCard = ({title, text}) => {
  return (
    <Flex
      p={6}
      shadow={2}
      flexDirection="row"
      alignItems="center"
      borderRadius="full"
      backgroundColor="white"
    >
      <Center
        borderRadius="full"
        width="50"
        height="50"
        backgroundColor="brand.500"
        mr={3}
      >
        <Icon as={FontAwesome5} name="dice-d20" color="white" size="6" />
      </Center>
      <Box>
        <Heading fontSize="md" pb={1}>
          {title}
        </Heading>
        <Text fontSize={"xs"} color="gray.500">{text}</Text>
      </Box>
    </Flex>
  );
};

export default ChooseCard;
