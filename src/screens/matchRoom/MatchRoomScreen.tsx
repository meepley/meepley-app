import React, { useEffect, useState } from "react";
import {
  useWindowDimensions,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  ScrollView,
  Text,
  HStack,
  VStack,
  Center,
  Stack,
  useClipboard,
  Toast,
  useToast,
} from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import TransparentHeader from "@components/common/navigation/TransparentHeader";
import Btn from "@components/common/buttons/Btn";
import BottomTab from "@components/common/navigation/BottomTab";
import TextWithIcon from "@components/common/TextWithIcon";

import { MatchRoomProps } from "@ts/types/navigation/RootStack";
import meepleyAPI from "@services/api/meepley";

const MatchRoomScreen: React.FC<MatchRoomProps> = ({ route, navigation }) => {
  const { matchRoom } = route.params;
  const { height } = useWindowDimensions();
  const { value, onCopy } = useClipboard();
  const toast = useToast();

  const [isInMatch, setIsInMatch] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        if (!isInMatch) {
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          "Abandonar Partida?",
          "You have unsaved changes. Are you sure to discard them and leave the screen?",
          [
            { text: "Cancelar", style: "cancel", onPress: () => {} },
            {
              text: "Sair",
              style: "destructive",
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, isInMatch]
  );

  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => null}
            tintColor="#A69BEA"
            colors={["#A69BEA"]}
          />
        }
      >
        {/* Place Image Section + Transparent Header */}
        <Box height={height * 0.5}>
          <TransparentHeader />
          <Image
            accessibilityRole="image"
            accessibilityLabel="image"
            source={{ uri: matchRoom.img }}
            alt={`${matchRoom.name} Imagem`}
            style={{ width: 400, height: "100%", opacity: 0.7 }}
          />
        </Box>

        <Flex
          mt="-20"
          bgColor="white"
          borderTopRadius="50"
          minHeight={height * 0.6}
        >
          <Box p={10}>
            <Heading pb={4}>{matchRoom.name}</Heading>
            {isInMatch ? <Text>teste</Text> : null}

            <VStack space={1}>
              <HStack justifyContent="space-between">
                <TextWithIcon
                  w="45%"
                  iconName="calendar"
                  iconLibrary={MaterialCommunityIcons}
                  text={`${matchRoom.date} - ${matchRoom.hour}`}
                />
                <TextWithIcon
                  w="45%"
                  iconName="clock-outline"
                  iconLibrary={MaterialCommunityIcons}
                  text={`${matchRoom.estimated_duration}`}
                />
              </HStack>

              <TextWithIcon
                w="100%"
                iconName="location-outline"
                iconLibrary={Ionicons}
                text={matchRoom.place.name}
              />
              {matchRoom.place.minimum_consumption ? (
                <TextWithIcon
                  w="100%"
                  iconName="attach-money"
                  iconLibrary={MaterialIcons}
                  text={`${matchRoom.place.minimum_consumption}€ consumo mínimo no local`}
                />
              ) : null}
            </VStack>

            <Box pt={8}>
              <Heading
                mb={2}
                fontSize="sm"
                color="brand.500"
                textTransform="uppercase"
              >
                Sobre o jogo
              </Heading>
              <Text fontSize={11} justifyContent="center" numberOfLines={8}>
                {matchRoom.games[0].description}
              </Text>
            </Box>

            <Box pt={8} pb={10}>
              <Flex pb={4} alignItems="center" flexDirection="row">
                <Heading pr={2}>Jogadores</Heading>
                <Center
                  w={12}
                  h={6}
                  ml={1}
                  bgColor="lGreen.100"
                  borderRadius="3xl"
                >
                  <Text color="lGreen.600" fontSize="10">
                    {matchRoom?.users.length} / {matchRoom.max_players}
                  </Text>
                </Center>
              </Flex>
              <HStack space={4}>
                {matchRoom?.users.map((following) => (
                  <TouchableOpacity
                    key={following.slug}
                    onPress={() =>
                      navigation.navigate("Profile", {
                        profile: { username: following.username },
                      })
                    }
                  >
                    <Center
                      style={{ height: 80, width: 80 }}
                      rounded="full"
                      borderWidth="4"
                      borderColor="brand.500"
                    >
                      <Avatar
                        h="97%"
                        w="97%"
                        borderWidth={2}
                        borderColor="#FAFAFA"
                        source={following.avatar}
                      />
                    </Center>
                  </TouchableOpacity>
                ))}
              </HStack>
            </Box>

            {isInMatch ? (
              <>
                <Stack pt={6} pb={40} space={2}>
                  <Text
                    underline
                    color="brand.600"
                    textAlign="center"
                    onPress={() => {
                      onCopy(matchRoom.code);
                      toast.show({
                        title: "Código copiado com sucesso!",
                        status: "success",
                        description:
                          "Cuidado com quem partilhas o código da sala",
                      });
                    }}
                  >
                    Copiar código de convite
                  </Text>
                  <Text
                    underline
                    color="brand.600"
                    textAlign="center"
                    onPress={() => null}
                  >
                    Convidar conexões
                  </Text>
                </Stack>
                <Center flex={1} alignItems="center">
                  <Btn
                    minWidth={40}
                    width={40}
                    variant="solid"
                    marginBottom={10}
                    marginTop={7}
                    onPress={() =>
                      meepleyAPI.updateMatchroom(matchRoom.id, "finish")
                    }
                  >
                    Concluir Partida
                  </Btn>
                </Center>

                {/* Bottom Navigation Section */}
                <BottomTab isInsideMatchroom={true} />
              </>
            ) : (
              <Center flex={1} alignItems="center">
                <Btn
                  onPress={() => {
                    meepleyAPI.updateMatchroom(matchRoom.id, "enter", {});
                    setIsInMatch(true);
                  }}
                  minWidth={40}
                  width={40}
                  variant="solid"
                >
                  Entrar
                </Btn>
              </Center>
            )}
          </Box>
        </Flex>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MatchRoomScreen;
