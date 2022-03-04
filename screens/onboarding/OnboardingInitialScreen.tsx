import React, { useRef } from "react";
import { ImageBackground, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PagerView from "react-native-pager-view";
import { LinearGradient } from "expo-linear-gradient";

import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  HStack,
  Pressable,
  ScrollView,
} from "native-base";

import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import Emoji from "@components/common/Emoji";
import openUrl from "@utils/helpers/openUrl";

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
    title: <>Boardgames e Aveiro!</>,
    description: (
      <>
        Vê os locais disponíveis de referência para jogar boardgames e desfrutar
        em Aveiro <Emoji>🗺️</Emoji>
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
  {
    title: "Aveiro 2027",
    description: (
      <>
        Joga connosco boardgames e partilha a candidatura de Aveiro a Capital
        Europeia da Cultura em 2027! <Emoji>🌟</Emoji>{" "}
        <Text
          mt={2}
          underline
          fontSize={11}
          color="brand.600"
          textAlign="center"
          onPress={async () => await openUrl("https://aveiro2027.pt")}
        >
          (saber mais)
        </Text>
      </>
    ),
    img: require("@assets/images/onboarding/gt6.jpg"),
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
  const pageViewerRef = useRef<PagerView>(null);
  const { height } = useWindowDimensions();

  return (
    <Container>
      <PagerView initialPage={0} style={{ flex: 1 }} ref={pageViewerRef}>
        {steps.map((item, key) => {
          return (
            <ScrollView key={key}>
              <Box key={key++} minH={height}>
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
                  <HStack pt={4} pb={8} space={3} justifyContent="center">
                    {steps.map((_, dotKey) => (
                      <Pressable
                        key={dotKey}
                        height="2.5"
                        width="2.5"
                        borderRadius="full"
                        backgroundColor={
                          dotKey === key ? "brand.500" : "gray.300"
                        }
                        onPress={() => pageViewerRef.current?.setPage(dotKey)}
                      />
                    ))}
                  </HStack>
                  <Heading pb={8} textAlign="center">
                    {item.title}
                  </Heading>
                  <Text pb={8} textAlign="center">
                    {item.description}
                  </Text>
                  <OnboardingInitialFooter />
                </Flex>
              </Box>
            </ScrollView>
          );
        })}
      </PagerView>
    </Container>
  );
};

export default OnboardingInitialScreen;
