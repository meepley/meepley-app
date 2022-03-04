import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useSnapshot } from "valtio";

import {
  Text,
  Heading,
  Pressable,
  Button,
  Box,
  ScrollView,
  Input,
  IconButton,
  Icon,
  Stack,
} from "native-base";
import { EvilIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

import bgaStore from "@services/store/bgaStore";
import { _add } from "@utils/helpers/add";
import BoardgameCard from "@components/common/BoardgameCard";
import { IBoardgame } from "@ts/interfaces/IBoardgame";
import Btn from "@components/common/buttons/Btn";
import Loading from "@components/feedback/Loading";

const colors = ["lYellow.500", "brand.500", "lGreen.500"];

const BoardgamesListScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [showFilter, setShowFilter] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const { boardgames, isLoading, error, fetchBoardgames } =
    useSnapshot(bgaStore);

  useEffect(() => {
    if (!boardgames.items.length) {
      fetchBoardgames(boardgames.page);
    }
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#FAFAFA" />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => null} />
        }
      >
        <Box minHeight={height} backgroundColor="#FAFAFA">
          <Heading textAlign="center" py={8}>
            Jogos
          </Heading>
          <Box px={10} alignItems="center">
            <Input
              p={4}
              mb={8}
              w="100%"
              shadow={9}
              variant="rounded"
              backgroundColor="white"
              borderColor="transparent"
              placeholder="Procurar jogo..."
              InputLeftElement={
                <Icon
                  as={<EvilIcons name="search" />}
                  color="gray.700"
                  size={5}
                  ml="4"
                />
              }
              InputRightElement={
                <IconButton
                  colorScheme="brand"
                  rounded="full"
                  _icon={{
                    as: Ionicons,
                    name: "options",
                    size: 5,
                    color: "gray.700",
                  }}
                  onPress={() => setShowFilter(!showFilter)}
                  mr="4"
                  color="muted.400"
                />
              }
            />
          </Box>

          {showFilter ? (
            <Box
              bgColor="#f5edff"
              borderTopRadius="50"
              minHeight={height * 0.7}
              p={10}
            >
              <Heading>Filtros</Heading>
              <Btn colorScheme="brand" variant="ghost">
                Restaurar Filtros Predefinidos
              </Btn>
              <Btn variant="solid" colorScheme="brand">
                Alterar Filtros
              </Btn>
            </Box>
          ) : isLoading && !boardgames.items.length ? (
            <Box px={10}>
              <Loading isBgWhite={false} />
            </Box>
          ) : error && !boardgames.items.length ? (
            <Box px={10}>
              <Text>Error</Text>
            </Box>
          ) : (
            <Box px={10}>
              <Stack space={6}>
                {boardgames.items.map((bg: IBoardgame, i: number) => {
                  const bgColor = colors[(i + 1) % colors.length];
                  const marginTop = i % 2 === 0 && i !== 1 ? 0 : 4;

                  return (
                    <Pressable
                      key={bg.id}
                      onPress={() =>
                        navigation.navigate("Boardgame", {
                          boardgameId: bg.id,
                          boardgame: bg,
                          boardgameGenres: boardgames.genres,
                        })
                      }
                    >
                      <BoardgameCard
                        name={bg.name}
                        img={bg.image_url}
                        genres={[
                          ...bg.categories.map(
                            (genre) =>
                              boardgames.genres.find(
                                (item) => item.id === genre.id
                              )?.name
                          ),
                        ]}
                        players={`${bg.min_players} - ${bg.max_players} jogadores`}
                        bgColor={bgColor}
                        mt={marginTop}
                      />
                    </Pressable>
                  );
                })}
              </Stack>
              {boardgames.items.length && !error ? (
                <Button
                  my={8}
                  variant="ghost"
                  colorScheme="brand"
                  onPress={() => {
                    fetchBoardgames(_add(boardgames.page, 1));
                  }}
                  leftIcon={
                    boardgames.hasMore ? (
                      <Icon as={FontAwesome5} name="plus" size="3" />
                    ) : undefined
                  }
                  disabled={!boardgames.hasMore || isLoading}
                >
                  {isLoading
                    ? "A carregar..."
                    : boardgames.hasMore
                    ? "Ver mais Jogos"
                    : "Não existem mais jogos de tabuleiro para mostrar"}
                </Button>
              ) : null}
            </Box>
          )}
        </Box>
      </ScrollView>
    </>
  );
};

export default BoardgamesListScreen;
