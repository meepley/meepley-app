import React from "react";
import { View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";
import { LinearGradient } from "expo-linear-gradient";

import { Box, Text, Button, Flex, Heading, VStack } from "native-base";

import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import Emoji from "@components/common/Emoji";

const steps = [
  {
    title: "Bem-vindo ao MeePley",
    description: (
      <>
        Aqui poderás marcar partidas de jogos de tabuleiro em locais públicos e
        comerciais de referência de Aveiro <Emoji>🤩</Emoji>
      </>
    ),
    img: require("@assets/images/onboarding/gt1.png"),
  },
  {
    title: "Em qualquer lado",
    description: (
      <>
        Vê os locais disponíveis para jogar na tua localização ou procura por
        outros pontos através do nosso mapa <Emoji>🗺️</Emoji>
      </>
    ),

    img: require("@assets/images/onboarding/gt2.png"),
  },
  {
    title: "Descobre novos jogos",
    description: (
      <>
        Fica a conhecer novos jogos de tabuleiro para poderes experimentar com
        outros jogadores <Emoji>🎲</Emoji>
      </>
    ),
    img: require("@assets/images/onboarding/gt3.png"),
  },
  {
    title: "Chat",
    description: (
      <>
        Combina todos os pormenores da partida com os outros jogadores através
        do nosso chat integrado <Emoji>😊</Emoji>
      </>
    ),
    img: require("@assets/images/onboarding/gt4.png"),
  },
  {
    title: "Tudo à mão",
    description: (
      <>
        Temos todos os utilitários que podes precisar numa partida de jogo de
        tabuleiro <Emoji>⏲</Emoji>
      </>
    ),
    img: require("@assets/images/onboarding/gt5.png"),
  },
];

const OnboardingInitialFooter = () => {
  const navigation = useNavigation();

  return (
    <VStack space={4}>
      <Btn variant="outline" onPress={() => navigation.navigate("Register")}>
        Registar
      </Btn>
      <Btn variant="solid" onPress={() => navigation.navigate("Login")}>
        Entrar
      </Btn>
    </VStack>
  );
};

const OnboardingInitialScreen = () => {
  return (
    <Container>
      <Box minH="full">
        <PagerView
          onPageSelected={(e: PagerViewOnPageSelectedEvent) => console.log("z")}
          style={{ flex: 1 }}
        >
          {steps.map((item, key) => {
            return (
              <View
                style={{
                  height: "100%",
                  flexDirection: "column",
                }}
                key={key++}
              >
                <LinearGradient
                  style={{ height: "45%" }}
                  // Background Linear Gradient
                  colors={["transparent", "rgb(255, 255, 255)"]}
                >
                  <Box h="100%" zIndex="-1">
                    <ImageBackground
                      resizeMode="cover"
                      style={{ width: "100%", height: "100%" }}
                      source={item.img}
                    />
                  </Box>
                </LinearGradient>

                <Flex justifyContent="center" textAlign="center" px={12}>
                  <Heading pb={8} textAlign="center">
                    {item.title}
                  </Heading>
                  <Text pb={8} textAlign="center">
                    {item.description}
                  </Text>
                  <OnboardingInitialFooter />
                </Flex>
              </View>
            );
          })}
        </PagerView>
      </Box>
    </Container>
  );
};

export default OnboardingInitialScreen;
