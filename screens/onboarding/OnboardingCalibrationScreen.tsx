import React, { useRef, useState } from "react";
import {
  BackHandler,
  ImageSourcePropType,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import PagerView from "react-native-pager-view";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import {
  Button,
  Heading,
  VStack,
  AlertDialog,
  Box,
  Text,
  Flex,
  HStack,
  Pressable,
  Image,
  Divider,
  Checkbox,
  Icon,
  IconButton,
  useToast,
} from "native-base";
import { EvilIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import Btn from "@components/common/buttons/Btn";
import Emoji from "@components/common/Emoji";

import { places } from "@services/api/meepley";
import { _add } from "@utils/helpers/add";
import mapStyle from "@utils/config/googleMapsThemeConfig.json";

const steps: {
  label: string;
  title?: JSX.Element;
  description: JSX.Element;
  img?: ImageSourcePropType;
  contents?: (string | { name: string; emoji: JSX.Element })[];
  map?: boolean;
}[] = [
  {
    label: "start",
    title: (
      <>
        Olá! Sê bem-vindo ao MeePley{"  "}
        <Emoji size={25}>👋</Emoji>
      </>
    ),
    description: (
      <>
        <Text textAlign="left">
          Vamos fazer-te algumas perguntas para podermos personalizar o MeePley
          tendo em conta as tuas preferências.{"\n"} Os dados guardados das tuas
          preferência não serão visivéis para ninguém
        </Text>
      </>
    ),
    img: require("@assets/images/illustration-playing-family.png"),
  },
  {
    label: "experience",
    description: <>Qual é o teu nível de experiência com jogos de tabuleiro?</>,
    contents: [
      { name: "Iniciante", emoji: <Emoji size={30}>🐣</Emoji> },
      { name: "Médio", emoji: <Emoji size={30}>🦸</Emoji> },
      { name: "Avançado", emoji: <Emoji size={30}>🧙</Emoji> },
    ],
    img: require("@assets/images/illustration-playing.png"),
  },
  {
    label: "genres",
    title: (
      <>
        O teu estilo{"  "}
        <Emoji size={25}>😎</Emoji>
      </>
    ),
    description: <>Seleciona os teus géneros de jogos favoritos!</>,
    contents: [
      { name: "Ação", emoji: <Emoji size={30}>⚔️</Emoji> },
      { name: "Clássico", emoji: <Emoji size={30}>♟️</Emoji> },
      { name: "Fantasia", emoji: <Emoji size={30}>🦄</Emoji> },
      { name: "Magia", emoji: <Emoji size={30}>🔮</Emoji> },
      { name: "Medieval", emoji: <Emoji size={30}>👑</Emoji> },
      { name: "Mistério", emoji: <Emoji size={30}>🔍</Emoji> },
      { name: "Cooperativo", emoji: <Emoji size={30}>🤝</Emoji> },
      { name: "Ficção", emoji: <Emoji size={30}>🧬</Emoji> },
      { name: "Horror", emoji: <Emoji size={30}>👻</Emoji> },
    ],
  },
  {
    label: "disponibility",
    title: (
      <>
        Disponibilidade{"  "}
        <Emoji size={25}>⌚</Emoji>
      </>
    ),
    description: (
      <>Escolhe os dias da semana que tens disponibilidade para jogar</>
    ),
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
    title: (
      <>
        Locais{"  "}
        <Emoji size={25}>🗺️</Emoji>
      </>
    ),
    description: <>Seleciona os teus locais favoritos para jogar</>,
    map: true,
  },
];

const OnboardingCalibrationFooter: React.FC<{
  isLastPage: boolean;
  changePage: () => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isLastPage, changePage, setModal }) => {
  const navigation = useNavigation();
  const toast = useToast();

  return (
    <VStack alignItems="center" space={4} pt={8}>
      <Btn
        width="40"
        variant="solid"
        onPress={() => {
          if (isLastPage) {
            navigation.navigate("Dashboard");
          } else {
            changePage();
          }
        }}
      >
        {isLastPage ? "Concluir" : "Próximo"}
      </Btn>
      <Btn variant="ghost" onPress={() => setModal(true)}>
        Cancelar calibração
      </Btn>
    </VStack>
  );
};

const OnboardingCalibrationScreen = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const toast = useToast();

  //* States related to the user choices in the various steps of the calibration
  const [selectedFamiliarity, setSelectedFamiliarity] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const pageViewerRef = useRef<PagerView>(null);
  const cancelRef = useRef(null);

  //* Function to conclude the calibration of the user
  const completeCalibration = () => {
    const didCompleteCalibration =
      selectedFamiliarity !== "" &&
      selectedGenres !== [] &&
      selectedDays !== [] &&
      selectedPlaces !== [];

    if (didCompleteCalibration) {
    } else {
      toast.show({
        title: "Não concluíste todos os passos da calibração...",
        status: "warning",
      });
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <>
      <Box pb={20} backgroundColor="white" minH={height}>
        <PagerView style={{ flex: 1 }} ref={pageViewerRef}>
          {steps.map((item, key) => {
            return (
              <ScrollView key={`Screen ${key}`}>
                <Flex
                  px={10}
                  my={10}
                  direction="column"
                  textAlign="center"
                  backgroundColor="white"
                  _text={{ textAlign: "center" }}
                >
                  {item?.img && (
                    <Image
                      resizeMode="contain"
                      source={item.img}
                      h={"56"}
                      alt={item.label}
                    />
                  )}

                  {item?.title && (
                    <Heading textAlign="center">{item.title}</Heading>
                  )}

                  <Text pt={8} textAlign="center">
                    {item.description}
                  </Text>

                  {item?.contents && item.label === "experience" ? (
                    <HStack pt={4} space={2} justifyContent="space-between">
                      {item.contents.map((expItem, expI) => {
                        if (typeof expItem !== "string") {
                          const isSelectedExp =
                            selectedFamiliarity === expItem.name;
                          return (
                            <Pressable
                              key={expItem.name}
                              width="28%"
                              height="20"
                              onPress={() =>
                                setSelectedFamiliarity(expItem.name)
                              }
                            >
                              <Flex
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="30"
                                height="20"
                                borderWidth="1"
                                position="relative"
                                borderColor={
                                  isSelectedExp ? "brand.500" : "gray.200"
                                }
                              >
                                {isSelectedExp && (
                                  <Flex
                                    top="-5%"
                                    left="75%"
                                    width="30"
                                    height="30"
                                    rounded="full"
                                    borderWidth="4"
                                    borderColor="white"
                                    position="absolute"
                                    backgroundColor="brand.500"
                                    justifyContent="center"
                                    alignItems="center"
                                  >
                                    <Icon
                                      size="3"
                                      shadow="2"
                                      color="white"
                                      as={Feather}
                                      name="check"
                                    />
                                  </Flex>
                                )}
                                {expItem.emoji}
                              </Flex>
                              <Text
                                pt={2}
                                fontSize="12"
                                textAlign="center"
                                color={isSelectedExp ? "brand.500" : "gray.300"}
                              >
                                {expItem.name}
                              </Text>
                            </Pressable>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </HStack>
                  ) : item?.contents && item.label === "genres" ? (
                    <Flex
                      pt={6}
                      flexWrap="wrap"
                      flexDirection="row"
                      justifyContent="space-between"
                    >
                      {item.contents.map((genItem, genI) => {
                        if (typeof genItem !== "string") {
                          const isGenreSelected = selectedGenres.find(
                            (genre) => genre === genItem?.name
                          );
                          return (
                            <Pressable
                              key={genItem?.name}
                              width="28%"
                              mb={
                                item.contents && genI < item.contents.length - 4
                                  ? 4
                                  : 0
                              }
                              onPress={() =>
                                isGenreSelected
                                  ? setSelectedGenres([
                                      ...selectedGenres.filter(
                                        (item) => item !== genItem?.name
                                      ),
                                    ])
                                  : setSelectedGenres([
                                      ...selectedGenres,
                                      genItem?.name,
                                    ])
                              }
                            >
                              <Flex
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="30"
                                height="24"
                                borderWidth="1"
                                position="relative"
                                borderColor={
                                  isGenreSelected ? "brand.500" : "gray.200"
                                }
                              >
                                {isGenreSelected && (
                                  <Flex
                                    width="30"
                                    height="30"
                                    position="absolute"
                                    top="-5%"
                                    left="75%"
                                    rounded="full"
                                    borderWidth="4"
                                    borderColor="white"
                                    backgroundColor="brand.500"
                                    justifyContent="center"
                                    alignItems="center"
                                  >
                                    <Icon
                                      color="white"
                                      size="3"
                                      shadow="2"
                                      as={Feather}
                                      name="check"
                                    />
                                  </Flex>
                                )}
                                {genItem?.emoji}
                              </Flex>
                              <Text
                                mt={2}
                                textAlign="center"
                                fontSize="12"
                                color={
                                  isGenreSelected ? "brand.500" : "gray.300"
                                }
                              >
                                {genItem?.name}
                              </Text>
                            </Pressable>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </Flex>
                  ) : (
                    item?.contents &&
                    item.label === "disponibility" && (
                      <Checkbox.Group
                        pt={8}
                        mx="auto"
                        width="75%"
                        onChange={setSelectedDays}
                        value={selectedDays}
                        accessibilityLabel="Escolher dias da semana"
                      >
                        {item.contents.map((dispItem, dispI) => {
                          const lastI =
                            item.contents && item.contents.length - 1;
                          return (
                            <>
                              <Box
                                key={`checkbox ${dispI}`}
                                mx="auto"
                                width="70%"
                              >
                                <Checkbox
                                  colorScheme="brand"
                                  value={
                                    typeof dispItem === "string"
                                      ? dispItem.toLowerCase()
                                      : `${dispI}`
                                  }
                                  my={2}
                                  style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 18,
                                    height: 18,
                                    marginRight: 20,
                                  }}
                                  _text={{
                                    fontSize: "11",
                                    color: "gray.400",
                                    textAlign: "center",
                                  }}
                                >
                                  {dispItem}
                                </Checkbox>
                              </Box>
                              {lastI !== dispI && <Divider width="100%" />}
                            </>
                          );
                        })}
                      </Checkbox.Group>
                    )
                  )}

                  {item?.map && (
                    <Box
                      shadow="8"
                      style={{
                        borderRadius: 25,
                        overflow: "hidden",
                        marginTop: 30,
                      }}
                    >
                      <MapView
                        style={{ width: "100%", height: 300 }}
                        provider={PROVIDER_GOOGLE}
                        mapType="mutedStandard"
                        loadingEnabled={true}
                        loadingIndicatorColor="#A69BEA"
                        customMapStyle={mapStyle}
                        initialRegion={{
                          latitude: 40.642114497340515,
                          longitude: -8.654069429068207,
                          latitudeDelta: 0.01,
                          longitudeDelta: 0.0421,
                        }}
                      >
                        {places.map((place, index) => {
                          const isPlaceSelected = selectedPlaces.find(
                            (p) => p === place.name
                          );

                          return (
                            <Marker
                              key={`marker ${index}`}
                              coordinate={place.latlng}
                              title={place.name}
                              description={place.name}
                              onPress={() =>
                                isPlaceSelected
                                  ? setSelectedPlaces([
                                      ...selectedPlaces.filter(
                                        (item) => item !== place.name
                                      ),
                                    ])
                                  : setSelectedPlaces([
                                      ...selectedPlaces,
                                      place.name,
                                    ])
                              }
                            >
                              <Flex
                                justifyContent="center"
                                alignItems="center"
                                borderWidth={3}
                                borderColor="white"
                                rounded="full"
                                height="10"
                                width="10"
                                position="relative"
                                backgroundColor={
                                  isPlaceSelected ? "brand.500" : "gray.400"
                                }
                              >
                                <Icon
                                  size="6"
                                  color="white"
                                  name="map-marker-outline"
                                  as={MaterialCommunityIcons}
                                />
                              </Flex>
                            </Marker>
                          );
                        })}
                      </MapView>
                    </Box>
                  )}
                  <HStack pt={16} space={3} justifyContent="center">
                    {steps.map((_, dotKey) => (
                      <Pressable
                        key={`dot ${dotKey}`}
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
                  <OnboardingCalibrationFooter
                    isLastPage={key === steps.length - 1 ? true : false}
                    changePage={() =>
                      pageViewerRef.current?.setPage(_add(key, 1))
                    }
                    setModal={() => setModalVisible(!modalVisible)}
                  />
                </Flex>
              </ScrollView>
            );
          })}
        </PagerView>

        {/* Cancel Calibration Dialog */}
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          justifyContent="center"
          bottom="4"
          size="lg"
        >
          <AlertDialog.Content p={5}>
            {/* Header of the Dialog */}
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              pb={4}
            >
              <Heading fontSize="16">Cancelar Calibração</Heading>
              <IconButton
                onPress={() => setModalVisible(false)}
                icon={
                  <Icon
                    as={EvilIcons}
                    name="close"
                    size="6"
                    color="brand.500"
                  />
                }
              />
            </Flex>

            {/* Dialog Content */}
            <Text pb={6}>
              Sem concluires este processo o MeePley não conseguirá dar-te uma
              experiência e sugestões de salas personalizadas tendo em conta as
              tuas características.
            </Text>

            {/* Dialog Footer */}
            <HStack justifyContent="flex-end" space={2}>
              <Button
                ref={cancelRef}
                variant="ghost"
                colorScheme="brand"
                borderRadius={"3xl"}
                px={5}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Voltar
              </Button>
              <Btn
                variant="solid"
                minWidth={"0.2"}
                px={5}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Dashboard");
                }}
              >
                Cancelar
              </Btn>
            </HStack>
          </AlertDialog.Content>
        </AlertDialog>
      </Box>
    </>
  );
};

export default OnboardingCalibrationScreen;
