import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@ts/types/navigation/RootStack";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiView, AnimatePresence } from "moti";
import { WebView } from "react-native-webview";
import { useSnapshot } from "valtio";

import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
} from "native-base";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

import Btn from "@components/common/buttons/Btn";
import TextWithIcon from "@components/common/TextWithIcon";
import TransparentHeader from "@components/common/navigation/TransparentHeader";
import Emoji from "@components/common/Emoji";

import openUrl from "@utils/helpers/openUrl";
import { regexHtml } from "@utils/helpers/regex";
import authStore from "@services/store/authStore";

type TBoardgameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Boardgame"
>;

const BoardgameScreen = ({ route, navigation }: TBoardgameScreenProps) => {
  const { height } = useWindowDimensions();
  const { boardgameId, boardgame, boardgameGenres } = route.params;
  const { isAuth, user } = useSnapshot(authStore);
  const [section, setSection] = useState("Detalhes");

  const genres = [
    ...boardgame.categories.map(
      (genre) => boardgameGenres.find((item) => item.id === genre.id)?.name
    ),
  ];

  const genresString: (string | undefined)[] = genres.map((genre, i) =>
    i === genres.length - 1 ? genre : `${genre}, `
  );

  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView>
        <ScrollView>
          <Box height={height * 0.4}>
            <TransparentHeader />
            <Image
              accessibilityRole="image"
              accessibilityLabel="image"
              source={{
                uri: boardgame.image_url,
              }}
              alt={`${boardgame.name} Image`}
              style={{ width: 400, height: "100%", opacity: 0.7 }}
            />
          </Box>

          <Box
            bgColor="white"
            borderTopRadius="50"
            minHeight={height * 0.6}
            p={10}
            mt="-20"
          >
            <Flex
              flexWrap="wrap"
              flexDirection="row"
              justifyContent="space-between"
              pb={8}
            >
              <TextWithIcon
                w="50%"
                iconName="clock"
                text={`${boardgame.min_playtime}min - ${boardgame.max_playtime}min`}
              />
              <TextWithIcon
                w="50%"
                iconName="user"
                text={`${boardgame.min_players} - ${boardgame.max_players} Jogadores`}
              />
              <TextWithIcon
                w="50%"
                iconName="calendar"
                text={`Lançado em ${boardgame.year_published}`}
              />

              <TextWithIcon
                w="50%"
                iconName="star"
                text={
                  boardgame.num_user_complexity_votes > 100
                    ? "Jogo Difícil"
                    : "Jogo Fácil"
                }
              />
              {genresString !== undefined ? (
                <TextWithIcon
                  w="100%"
                  iconName="star"
                  text={genresString}
                  fontStyle="italic"
                />
              ) : null}
            </Flex>

            <HStack alignItems="center" space={2}>
              <Heading mr={2}>{boardgame.name}</Heading>
              {isAuth ? (
                <IconButton
                  size="sm"
                  rounded="full"
                  backgroundColor="gray.100"
                  icon={
                    <Icon
                      as={Ionicons}
                      name={
                        user?.favorite_games.find(
                          (item) => item === boardgame.name
                        )
                          ? "heart-outline"
                          : "heart"
                      }
                      color="lRed.400"
                    />
                  }
                />
              ) : null}

              {boardgame.official_url ? (
                <IconButton
                  size="sm"
                  rounded="full"
                  backgroundColor="gray.100"
                  icon={<Icon as={EvilIcons} name="external-link" />}
                  onPress={() =>
                    boardgame?.official_url && openUrl(boardgame.official_url)
                  }
                />
              ) : null}
            </HStack>

            <HStack pt={4} pb={8} space={2}>
              {["Detalhes", "Regras / FAQ"].map((item, i) => (
                <Btn
                  key={i}
                  height={10}
                  padding={0}
                  colorScheme="brand"
                  variant={section === item ? "solid" : "outline"}
                  onPress={() => setSection(item)}
                >
                  {item}
                </Btn>
              ))}
            </HStack>

            <AnimatePresence exitBeforeEnter initial={true}>
              <MotiView
                key={section}
                from={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {section === "Detalhes" ? (
                  <Box>
                    <TextWithIcon
                      w="50%"
                      iconName="clock"
                      text={`Publisher: ${boardgame.primary_publisher.name}`}
                    />
                    <TextWithIcon
                      w="100%"
                      iconName="clock"
                      text={`Preços: ${boardgame.price}$, ${boardgame.price_uk}£, ${boardgame.price}$`}
                    />
                    <TextWithIcon
                      w="50%"
                      iconName="clock"
                      text={`Designer: ${boardgame.primary_designer.name}`}
                    />
                    {boardgame.artists && (
                      <TextWithIcon
                        w="50%"
                        iconName="clock"
                        text={`Artista(s): ${boardgame.artists?.map(
                          (artist, i) =>
                            boardgame.artists &&
                            i === boardgame.artists.length - 1
                              ? artist
                              : `${artist}, `
                        )}`}
                      />
                    )}

                    <Text pt={4}>
                      {boardgame.description.replace(regexHtml, "")}
                    </Text>
                  </Box>
                ) : (
                  <Box>
                    {boardgame?.rules_url ? (
                      <Btn
                        variant="solid"
                        colorScheme="brand"
                        onPress={() =>
                          boardgame.rules_url && openUrl(boardgame.rules_url)
                        }
                      >
                        Ficheiro com regras
                      </Btn>
                    ) : (
                      <Text>
                        Este jogo de tabuleiro não tem nenhum externo que remete
                        para as suas regras <Emoji size={14}>😥</Emoji>
                      </Text>
                    )}

                    <Divider my={8} />

                    <Heading mb={2}>FAQ</Heading>
                    {boardgame?.faq ? (
                      <WebView
                        originWhitelist={["*"]}
                        source={{
                          html: boardgame.faq,
                        }}
                      />
                    ) : (
                      <Text>
                        Este jogo de tabuleiro não possuí uma secção de FAQ{" "}
                        <Emoji size={14}>😥</Emoji>
                      </Text>
                    )}

                    <Divider mb={8} />

                    {/* 
                    <Heading>Vídeos</Heading>
                    <Box></Box> 
                    */}
                  </Box>
                )}
              </MotiView>
            </AnimatePresence>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default BoardgameScreen;
