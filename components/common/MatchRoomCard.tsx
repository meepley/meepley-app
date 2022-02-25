import React, { useState } from "react";
import { Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { EvilIcons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

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

const matchRooms = [
  {
    id: 1,
    title: "Partida de Gloomhaven",
    place: "Avenida Café-Concerto",
    date: "14/1",
    hour: "14h",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu26EP6jwc7w70XdKaZznjwgpuyEZnqAzgvw&usqp=CAU",
  },
  {
    id: 2,
    title: "Partida de Root",
    place: "Avenida Café-Concerto",
    date: "20/2",
    hour: "12h",
    img: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    id: 3,
    title: "Partida de 3 Tigres",
    place: "Avenida Café-Concerto",
    date: "25/3",
    hour: "20h",
    img: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    id: 4,
    title: "Partida de 3 Tigres",
    place: "Avenida Café-Concerto",
    date: "25/3",
    hour: "20h",
    img: "https://i.imgur.com/UYiroysl.jpg",
  },
];

const MatchRoomCard = () => {
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
  const slideWidth = wp(50);
  const itemHorizontalMargin = wp(3);

  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin * 2;
  let sliderRef;

  return (
    <Flex flex={1} h="full" alignItems="center" bgColor="white">
      <ScrollView>
        <Heading px={10} pt={5} pb={8}>
          Partidas neste local
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
                <Box h="290" w="210" borderRadius={"40"} bgColor="lGreen.100">
                  <Image
                    borderTopRadius={"40"}
                    h="170"
                    w="full"
                    source={{
                      uri: item.img,
                    }}
                    alt={item.title}
                  />

                  <Text
                    fontSize={13}
                    color="white"
                    fontWeight={700}
                    marginLeft="2"
                    padding="2"
                    style={styles.textWithShadow}
                  >
                    {item.title}
                  </Text>

                  <View style={styles.verticalAlign}>
                    <Text pr={1} pb={2} fontSize={11} style={styles.textWithShadow}>
                      <Icon
                        as={Ionicons}
                        name="location-outline"
                      size="4"
                      color="white"
                      />
                    </Text>
                    <Text
                      fontSize={11}
                      color="white"
                      style={styles.textWithShadow}
                    >
                      {item.place}
                    </Text>
                  </View>

                  <View style={styles.verticalAlign}>
                    <Text pr={1} pb={2} fontSize={11} style={styles.textWithShadow}>
                      <Icon
                        as={MaterialCommunityIcons}
                        name="calendar-blank-outline"
                        color="white"
                        size="4"
                      />
                    </Text>
                    <Text
                      fontSize={11}
                      color="white"
                      style={styles.textWithShadow}
                    >
                       {item.date + " às " + item.hour}
                    </Text>
                  </View>
                </Box>
              </Pressable>
            );
          }}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={1}
          inactiveSlideScale={0.8}
          inactiveSlideOpacity={0.5}
          loop={true}
          loopClonesPerSide={2}
          autoplay={false}
          onSnapToItem={(index) => setSliderActiveItem(index)}
        />

        <Pagination
          dotsLength={matchRooms.length}
          activeDotIndex={sliderActiveItem}
          dotColor="#A69BEA"
          inactiveDotColor="rgba(78, 78, 78, 0.92)"
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={sliderRef}
          tappableDots={!!sliderRef}
        />
      </ScrollView>
    </Flex>
  );
};

const styles = StyleSheet.create({
  textWithShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },

  verticalAlign: {
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
  },
});

export default MatchRoomCard;
