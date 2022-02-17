import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
  Modal,
  Stack,
} from "native-base";

import Container from "@components/common/Container";
import bgaStore from "@services/store/bgaStore";
import { _add } from "@utils/helpers/add";
import { IBoardgame } from "@ts/interfaces/IBoardgame";
import { useSnapshot } from "valtio";
import PaddingWrapper from "@components/common/PaddingWrapper";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import BoardgameCard from "@components/common/BoardgameCard";
import { FlatList } from "react-native";

const BoardgamesListScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const { boardgames, isLoading, error, fetchBoardgames } =
    useSnapshot(bgaStore);

  useEffect(() => {
    if (!boardgames.items.length) {
      fetchBoardgames(boardgames.page);
    }
  }, []);

  console.log(boardgames, !boardgames.items.length, isLoading, error);

  return (
    <Container>
      <ScrollView>
        <Box px={10}>
          <Heading textAlign="center" pb={8}>
            Jogos
          </Heading>
          <Box alignItems="center">
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
                  _icon={{
                    as: Ionicons,
                    name: "options",
                    size: 5,
                    color: "gray.700",
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                  mr="4"
                  color="muted.400"
                />
              }
            />
          </Box>
          {isLoading && !boardgames.items.length ? (
            <Text>Loading...</Text>
          ) : error && !boardgames.items.length ? (
            <Text>Error</Text>
          ) : (
            <Stack space={6}>
              {boardgames.items.map((bg: IBoardgame, i: number) => {
                const bgColor = i % 2 === 0;
                const marginTop = i % 2 === 0 && i !== 1 ? 0 : 4;

                return (
                  <Pressable
                    key={bg.id}
                    onPress={() =>
                      navigation.navigate("Boardgame", {
                        boardgameId: bg.id,
                        boardgame: bg,
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
                      bgColor="lGreen.500"
                      mt={marginTop}
                    />
                  </Pressable>
                );
              })}
            </Stack>
          )}
          {boardgames.items.length && !error ? (
            <Button
              onPress={() => {
                fetchBoardgames(_add(boardgames.page, 1));
              }}
              disabled={!boardgames.hasMore || isLoading}
            >
              {isLoading ? (
                <Text>"Loading more..."</Text>
              ) : boardgames.hasMore ? (
                <Text>"Ver Mais"</Text>
              ) : (
                <Text>"Nothing more to load"</Text>
              )}
            </Button>
          ) : null}
          {error ? !boardgames.items.length && <Text>Error...</Text> : null}

          {/* Modal for filtering the boardgames */}
          <Modal
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            avoidKeyboard
            bottom="4"
            size="lg"
          >
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Forgot Password?</Modal.Header>
              <Modal.Body>
                Enter email address and we'll send a link to reset your
                password.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  flex="1"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  Proceed
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Box>
      </ScrollView>
    </Container>
  );
};

export default BoardgamesListScreen;
