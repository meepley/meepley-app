import React, { useState } from "react";
import { RefreshControl, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Box,
  Flex,
  Heading,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import TransparentHeader from "@components/common/navigation/TransparentHeader";
import Btn from "@components/common/buttons/Btn";
import MatchRoomCarousel from "@components/common/MatchRoomCarousel";
import TextWithIcon from "@components/common/TextWithIcon";
import Emoji from "@components/common/Emoji";

import { PlaceProps } from "@ts/types/navigation/RootStack";

const PlaceScreen: React.FC<PlaceProps> = ({ route, navigation }) => {
  const { place } = route.params;
  const { height } = useWindowDimensions();
  const [refreshing, setRefreshing] = useState(false);

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
            source={{ uri: place.img }}
            alt={`${place.name} Imagem`}
            style={{ width: 400, height: "100%", opacity: 0.7 }}
          />
        </Box>

        <Flex
          mt="-20"
          bgColor="white"
          borderTopRadius="50"
          minHeight={height * 0.6}
        >
          {/* Place Details Section */}
          <Box p={10}>
            <Heading pb={4}>{place.name}</Heading>
            <VStack space={1}>
              <TextWithIcon
                w="100%"
                iconName="location-outline"
                iconLibrary={Ionicons}
                text={place.address}
              />
              <TextWithIcon
                w="100%"
                iconName="clock-outline"
                iconLibrary={MaterialCommunityIcons}
                text={`${place.daysOpen} - ${place.hoursOpen}`}
              />
              <TextWithIcon
                w="100%"
                iconName="storefront-outline"
                iconLibrary={MaterialCommunityIcons}
                text={place.type.filter((item) => item).join(", ")}
              />
              {place.minimum_consumption && (
                <TextWithIcon
                  w="100%"
                  iconName="attach-money"
                  iconLibrary={MaterialIcons}
                  text={`${place.minimum_consumption}??? consumo m??nimo no local`}
                />
              )}
            </VStack>
          </Box>

          {/* Matchroom Section */}
          <Heading px={10} pb={4}>
            Partidas neste local
          </Heading>

          {/* Check if there are actual matches occuring in the place in question */}
          {place.matches.length > 0 ? (
            <MatchRoomCarousel matchRooms={place.matches} />
          ) : (
            <Flex
              px={10}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text mt={2}>
                N??o existe nenhuma partida de momento neste local, mas ningu??m
                te impede de criar uma a partir do bot??o abaixo{" "}
                <Emoji size={22}>????</Emoji>
              </Text>
            </Flex>
          )}

          <Flex flex={1} alignItems="center">
            <Btn
              mt={8}
              mb={10}
              width={40}
              minWidth={40}
              variant="solid"
              onPress={() => navigation.navigate("CreateMatch")}
            >
              Criar partida
            </Btn>
          </Flex>
        </Flex>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceScreen;
