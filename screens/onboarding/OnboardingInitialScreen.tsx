import React from "react";
import { View, Text, Button } from "react-native";
import PagerView from "react-native-pager-view";
import { useNavigation } from "@react-navigation/native";

const steps = [
  {
    title: "Bem-vindo ao MeePley",
    description:
      "Aqui poderás marcar partidas de jogos de tabuleiro em locais públicos e comerciais de referência de Aveiro",
  },
  {
    title: "Em qualquer lado",
    description:
      "Vê os locais disponíveis para jogar na tua localização ou procura por outros pontos através do nosso mapa.",
  },
  {
    title: "Descobre novos jogos",
    description:
      "Fica a conhecer novos jogos de tabuleiro para poderes experimentar com outros jogadores.",
  },
  {
    title: "Chat",
    description:
      "Combina todos os pormenores da partida com os outros jogadores através do nosso chat integrado.",
  },
  {
    title: "Tudo à mão",
    description:
      "Temos todos os utilitários que podes precisar numa partida de jogo de tabuleiro.",
  },
];

const OnboardingInitialFooter = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Registar"
        onPress={() => navigation.navigate("Register")}
      />
      <Button title="Entrar" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

const OnboardingInitialScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PagerView style={{ flex: 1 }}>
        {steps.map((item, key) => {
          return (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                flexDirection: "column",
              }}
              key={key++}
            >
              <Text style={{ textAlign: "center" }}>{item.title}</Text>
              <Text style={{ textAlign: "center" }}>{item.description}</Text>
              <OnboardingInitialFooter />
            </View>
          );
        })}
      </PagerView>
    </View>
  );
};

export default OnboardingInitialScreen;
