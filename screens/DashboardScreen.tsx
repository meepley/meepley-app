import React, { useState } from "react";
import { BackHandler, RefreshControl } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSnapshot } from "valtio";

import { Box, Flex, Heading, Icon, ScrollView, Text } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BottomTab from "@components/common/navigation/BottomTab";
import MatchRoomCarousel from "@components/common/MatchRoomCarousel";
import Emoji from "@components/common/Emoji";

import useDataFetch from "@utils/hooks/useDataFetch";
import meepleyDataStore from "@services/store/meepleyStore";
import mapStyle from "@utils/config/googleMapsThemeConfig.json";
import Loading from "@components/feedback/Loading";
import Error from "@components/feedback/Error";

const filters = [];

const colors = ["lYellow.500", "brand.500", "lGreen.500"];

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const { places, matchRooms, fetchMatchRooms, fetchPlaces } =
    useSnapshot(meepleyDataStore);
  const { isLoading, error, fetchData } = useDataFetch(
    [fetchMatchRooms, fetchPlaces],
    true
  );

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
    <Flex flex={1} h="full" alignItems="center" bgColor="white">
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={async () => {
              setRefreshing(true);
              await fetchData();
              setRefreshing(false);
            }}
            tintColor="#A69BEA"
            colors={["#A69BEA"]}
          />
        }
      >
        {/* Matchroom Section */}
        <Box px={10} pt={8} pb={4}>
          <Heading pb={2}>Partidas abertas</Heading>
          <Text fontSize={13}>
            Começa já a jogar ao encontrar uma partida ideal para ti!{" "}
            <Emoji size={15}>🎲</Emoji>
          </Text>
        </Box>

        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error type="500" />
        ) : (
          <MatchRoomCarousel matchRooms={matchRooms} />
        )}

        {/* Map with Places Section */}
        <Box px={10} pb={40} pt={8}>
          <Heading pb={2}>Locais para jogar</Heading>

          {isLoading ? (
            <Loading />
          ) : error ? (
            <Error type="500" />
          ) : (
            <>
              <Text fontSize={13}>
                Explora a seleção de locais de referência para jogares em
                Aveiro! <Emoji size={15}>🗺️</Emoji>
              </Text>

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
                    const bgColor = colors[(index + 1) % colors.length];

                    return (
                      <Marker
                        key={index}
                        coordinate={place.latlng}
                        title={place.name}
                        description={place.name}
                        onPress={() =>
                          navigation.navigate("Place", {
                            place: place,
                          })
                        }
                      >
                        <Flex
                          height="10"
                          width="10"
                          rounded="full"
                          borderWidth={3}
                          alignItems="center"
                          justifyContent="center"
                          borderColor="white"
                          position="relative"
                          backgroundColor={bgColor}
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
              <Text fontSize={13} pt={8}>
                Sabias que ao jogar boardgames em Aveiro estás a ajudar a cidade
                para a sua candidatura a Capital Europeia da Cultura em 2027?{" "}
                <Emoji size={15}>😊</Emoji>{" "}
                <Text
                  mt={2}
                  underline
                  fontSize={11}
                  color="brand.600"
                  textAlign="center"
                >
                  (saber mais)
                </Text>
              </Text>
            </>
          )}
        </Box>
      </ScrollView>

      {/* Bottom Navigation Section */}
      <BottomTab />
    </Flex>
  );
};

export default DashboardScreen;
