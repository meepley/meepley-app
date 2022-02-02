import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, Flex, Heading, HStack, Stack, Text, VStack } from "native-base";

import Container from "@components/common/Container";

const utilities = [
  {
    name: "Dados",
    emoji: "",
  },
  {
    name: "Quem joga primeiro?",
    emoji: "",
  },
  {
    name: "Ampulheta",
    emoji: "",
  },
  {
    name: "Calculadora",
    emoji: "",
  },
];

const UtilitiesScreen = () => {
  return (
    <Container>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Box pb={10}>
          <Heading textAlign="center">Utilitários</Heading>
          <Text textAlign="center">
            Ferramentas para auxiliar as tuas partidas!
          </Text>
        </Box>

        <Flex flexWrap="wrap" justifyContent="space-evenly" direction="row">
          {utilities.map((item, i) => (
            <Box key={i} w="40%" mt={3} h={20} bg={"brand.500"} rounded="md">
              <Text>{item.name}</Text>
            </Box>
          ))}
        </Flex>
      </View>
    </Container>
  );
};

export default UtilitiesScreen;

const styles = StyleSheet.create({});
