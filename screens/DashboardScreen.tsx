import React, { useState } from "react";
import { Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import MapView, {
  AnimatedRegion,
  LatLng,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";

import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
} from "native-base";

import Container from "@components/common/Container";
import BottomTab from "@components/common/BottomTab";
import PaddingWrapper from "@components/common/PaddingWrapper";
import Btn from "@components/common/buttons/Btn";

const filters = [];

const markers: {
  latlng: LatLng | AnimatedRegion;
  title: string;
  description: string;
}[] = [
  {
    latlng: {
      latitude: 40.62663162639325,
      longitude: -8.650004736177138,
    },
    title: "FriendZone Lounge",
    description: "",
  },
  {
    latlng: {
      latitude: 40.64239282703135,
      longitude: -8.649612359409039,
    },
    title: "Avenida Café-Concerto",
    description: "",
  },
  {
    latlng: {
      latitude: 40.630537815536385,
      longitude: -8.65750746319497,
    },
    title: "Universidade de Aveiro",
    description: "",
  },
  {
    latlng: {
      latitude: 40.63405795547598,
      longitude: -8.648266475764512,
    },
    title: "Convívio",
    description: "",
  },
  {
    latlng: {
      latitude: 40.640994722057314,
      longitude: -8.651877533113431,
    },
    title: "Forum Aveiro",
    description: "",
  },
];

const matchRooms = [
  {
    id: 1,
    title: "Partida de Gloomhaven",
    place: "Lorem ipsum dolor sit amet et nuncat mergitur",
    date: "https://i.imgur.com/UYiroysl.jpg",
    hour: "",
    img: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    id: 2,
    title: "Partida de Root",
    place: "Lorem ipsum dolor sit amet et nuncat mergitur",
    date: "https://i.imgur.com/UYiroysl.jpg",
    hour: "",
    img: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    id: 3,
    title: "Partida de 3 Tigres",
    place: "Lorem ipsum dolor sit amet et nuncat mergitur",
    date: "https://i.imgur.com/UYiroysl.jpg",
    hour: "",
    img: "https://i.imgur.com/UYiroysl.jpg",
  },
];

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [sliderActiveItem, setSliderActiveItem] = useState(1);

  const { width: viewportWidth, height: viewportHeight } =
    Dimensions.get("window");

  function wp(percentage: number) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }

  const slideHeight = viewportHeight * 0.36;
  const slideWidth = wp(75);
  const itemHorizontalMargin = wp(2);

  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin * 2;
  let sliderRef;

  return (
    <Flex flex={1} h="full" alignItems="center" bgColor="white">
      <ScrollView>
        <Heading px={12} pt={8} pb={4}>
          Partidas abertas
        </Heading>
        <Carousel
          ref={(c) => (sliderRef = c)}
          data={matchRooms}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("MatchRoom", { title: "", match: "" })
                }
              >
                <Box h="64" borderRadius={"3xl"} bgColor="brand.100">
                  <Image
                    borderTopRadius={"3xl"}
                    h="20"
                    w="full"
                    source={{
                      uri: item.img,
                    }}
                    alt={item.title}
                  />
                  <Box p="6">
                    <Text>{item.title}</Text>
                  </Box>
                </Box>
              </Pressable>
            );
          }}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          loop={true}
          loopClonesPerSide={2}
          autoplay={false}
          onSnapToItem={(index) => setSliderActiveItem(index)}
        />

        <Pagination
          dotsLength={matchRooms.length}
          activeDotIndex={sliderActiveItem}
          dotColor="rgba(255, 255, 255, 0.92)"
          inactiveDotColor="rgba(78, 78, 78, 0.92)"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={sliderRef}
          tappableDots={!!sliderRef}
        />

        <Box px={12} pb={10}>
          <Heading pb={4}>Locais para jogar</Heading>
          <MapView
            style={{ width: 200, height: 400 }}
            provider={PROVIDER_GOOGLE}
            /* customMapStyle={mapStyle} */
            initialRegion={{
              latitude: 40.642114497340515,
              longitude: -8.654069429068207,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {markers.map((marker, index) => (
              <Marker
                key={index}
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                onPress={() => navigation.navigate("Place")}
              />
            ))}
          </MapView>
        </Box>
      </ScrollView>

      <BottomTab
        content={
          <>
            <Btn
              variant="ghost"
              colorScheme="brand"
              onPress={() => navigation.navigate("Profile")}
            >
              <Flex flexDirection="column" alignItems="center">
                <Icon />
                <Text>Perfil</Text>
              </Flex>
            </Btn>

            <Btn
              colorScheme="brand"
              variant="ghost"
              position={"relative"}
              alignItems={"center"}
              pointerEvents="box-none"
              onPress={() => navigation.navigate("CreateMatch")}
            >
              <Box bgColor={"red.200"} position={"absolute"} top="0" />
              <Icon />
              <Text>Criar Partida</Text>
            </Btn>

            <Btn
              variant="ghost"
              colorScheme="brand"
              onPress={() => navigation.navigate("Utilities")}
            >
              <Flex flexDirection="column" alignItems="center">
                <Icon />
                <Text>Utilitários</Text>
              </Flex>
            </Btn>
          </>
        }
      />
    </Flex>
  );
};

export default DashboardScreen;
