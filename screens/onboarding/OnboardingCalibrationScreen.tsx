import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import PagerView, {
  PagerViewOnPageSelectedEvent,
} from "react-native-pager-view";

import {
  Button,
  Heading,
  Modal,
  VStack,
  AlertDialog,
  Box,
  Text,
  Flex,
} from "native-base";
import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";

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

const OnboardingCalibrationFooter: React.FC<{
  isLastPage: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isLastPage, setModal }) => {
  const navigation = useNavigation();

  return (
    <VStack space={4} pt={8}>
      <Btn
        variant="solid"
        onPress={() => (isLastPage ? navigation.navigate("Dashboard") : null)}
      >
        {isLastPage ? "Terminar calibração" : "Próximo"}
      </Btn>
      <Btn variant="ghost" onPress={() => setModal(true)}>
        Cancelar calibração
      </Btn>
    </VStack>
  );
};

const OnboardingCalibrationScreen = () => {
  const navigation = useNavigation();
  const [selectedFamiliarity, setSelectedFamiliarity] = useState("");
  const [selectedGenres, setSelectedGenres] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const cancelRef = React.useRef(null);

  return (
    <Container>
      <Box minH="90%">
        <PagerView showPageIndicator={true} style={{ flex: 1 }}>
          {steps.map((item, key) => {
            return (
              <Flex
                direction="column"
                justifyContent="center"
                textAlign="center"
                px={12}
                _text={{ textAlign: "center" }}
                key={key++}
              >
                {item?.img && <Text></Text>}
                {item?.title && (
                  <Heading pb={8} textAlign="center">
                    {item.title}
                  </Heading>
                )}
                <Text textAlign="center">{item.description}</Text>
                {item?.contents && item.label === "experience" ? (
                  <Heading textAlign="center">{item.title}</Heading>
                ) : item?.contents && item.label === "genres" ? (
                  <Text></Text>
                ) : (
                  item?.contents &&
                  item.label === "disponibility" && <Text></Text>
                )}

                {item?.map && null}

                <OnboardingCalibrationFooter
                  isLastPage={false}
                  setModal={() => setModalVisible(!modalVisible)}
                />
              </Flex>
            );
          })}
        </PagerView>
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
              Sem concluires este processo o MeePley não conseguirá dar-te uma
              experiência e sugestões de salas personalizadas tendo em conta as
              tuas características.
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                ref={cancelRef}
                flex="1"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Voltar
              </Button>
              <Btn
                flex="1"
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Dashboard");
                }}
              >
                Cancelar
              </Btn>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
      </Box>
      {/* Modal de confirmação de cancelar calibração */}
    </Container>
  );
};

export default OnboardingCalibrationScreen;
