import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";

import { Button, Heading, Modal, VStack, AlertDialog } from "native-base";

const steps: {
  label: string;
  title?: string;
  description: string;
  img?: string;
  contents?: string[] | { name: string; emoji: string }[];
  map?: boolean;
}[] = [
  {
    label: "start",
    title: "Bem-vindo ao MeePley",
    description:
      "Vamos fazer-te algumas perguntas para podermos apresentar as melhores funcionalidades que o MeePley tem a oferecer.",
    img: require("@assets/images/illustration-playing-family.png"),
  },
  {
    label: "experience",
    description: "Qual é o teu nível de experiência com jogos de tabuleiro?",
    contents: [
      { name: "Iniciante", emoji: "" },
      { name: "Intermediário", emoji: "" },
      { name: "Avançando", emoji: "" },
    ],
    img: require("@assets/images/illustration-playing.png"),
  },
  {
    label: "genres",
    title: "O teu estilo",
    description: "Seleciona os teus géneros de jogos favoritos!",
    contents: [],
  },
  {
    label: "disponibility",
    title: "Disponibilidade",
    description:
      "Escolhe os dias da semana que tens disponibilidade para jogar",
    contents: [
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
      "Domingo",
    ],
  },
  {
    label: "places",
    title: "Locais",
    description: "Seleciona os teus locais favoritos para jogar",
    map: true,
  },
];

const OnboardingCalibrationFooter: React.FC<{ isLastPage: boolean }> = ({
  isLastPage,
}) => {
  const navigation = useNavigation();

  return (
    <VStack space={4}>
      <Button variant="outline" onPress={() => null}>
        {isLastPage ? "Terminar calibração" : "Próximo"}
      </Button>
      <Button variant="ghost" onPress={() => navigation.navigate("Dashboard")}>
        Cancelar calibração
      </Button>
    </VStack>
  );
};

const OnboardingCalibrationScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const cancelRef = React.useRef(null);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <PagerView
        onPageSelected={(e: PagerViewOnPageSelectedEvent) =>
          console.log(e.target)
        }
        style={{ flex: 1 }}
      >
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
              {item?.img && <Text></Text>}
              {item?.title && <Heading>{item.title}</Heading>}
              <Text>{item.description}</Text>
              {item?.contents && item.label === "experience" ? (
                <Heading>{item.title}</Heading>
              ) : item?.contents && item.label === "genres" ? (
                <Text></Text>
              ) : (
                item?.contents &&
                item.label === "disponibility" && <Text></Text>
              )}

              {item?.map && <Heading>{item.title}</Heading>}
            </View>
          );
        })}
        <OnboardingCalibrationFooter isLastPage={false} />
      </PagerView>

      {/* Modal de confirmação de cancelar calibração */}
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        justifyContent="flex-end"
        bottom="4"
        size="lg"
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Cancelar Calibração?</AlertDialog.Header>
          <AlertDialog.Body>
            Enter email address and we'll send a link to reset your password.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button
              ref={cancelRef}
              flex="1"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Proceed
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </View>
  );
};

export default OnboardingCalibrationScreen;
