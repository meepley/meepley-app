import React from "react";

import { Box, Flex, Heading, Text } from "native-base";

import Container from "@components/common/Container";
import Emoji from "@components/common/Emoji";

const utilities = [
  {
    name: "Dados",
    emoji: "🎲",
  },
  {
    name: "Quem joga primeiro?",
    emoji: "💥",
  },
  {
    name: "Cronómetro",
    emoji: "⏳",
  },
  {
    name: "Calculadora",
    emoji: "🧮",
  },
];

const UtilitiesScreen = () => {
  return (
    <Container>
      <Box px={10}>
        <Heading pb={4} textAlign="center">
          Utilitários
        </Heading>
        <Text textAlign="center" pb={10}>
          Ferramentas para auxiliar as tuas partidas!
        </Text>
        <Flex wrap="wrap" justifyContent="space-between" direction="row">
          {utilities.map((item, i) => (
            <Flex
              key={i}
              mt={3}
              w="45%"
              h="40"
              bg="grays.light"
              rounded="md"
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box style={{ height: 32 }}>
                <Emoji size={32}>{item.emoji}</Emoji>
              </Box>
              <Text pt="4" textAlign="center">
                {item.name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default UtilitiesScreen;
