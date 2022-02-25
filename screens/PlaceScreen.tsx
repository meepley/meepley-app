import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  EvilIcons,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
  Ionicons
} from "@expo/vector-icons";
import MatchRoomCard from "@components/common/MatchRoomCard";
import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import { useNavigation } from "@react-navigation/native";

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

const PlaceScreen = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <ScrollView marginTop={"-20"}>
        <View>
          <Image
            source={{
              uri: "https://imagens.publico.pt/imagens.aspx/1387318?tp=UH&db=IMAGENS&type=JPG",
            }}
            style={{ width: 400, height: 400, opacity: 0.7 }}
          />

          <Flex bgColor="white" borderTopRadius={"50"} p={"10"} mt={"-20"}>
            <Heading marginBottom={2}>Avenida Café-Concerto</Heading>

            <View style={styles.verticalAlign}>
              <Icon
                as={Ionicons}
                name="location-outline"
                size="5"
                color={"brand.500"}
              />
                <Text fontSize={11}> Praça do Mercado nº1, 3800-224 Aveiro</Text>

            </View>

            <View style={styles.verticalAlign}>
            <Icon as={MaterialCommunityIcons} name="clock-outline" size="5" color={"brand.500"} />
                <Text fontSize={11}> Seg-Sab, 09:00 às 01:00</Text>

            </View>

            <View style={styles.verticalAlign}>
              <Icon
                as={MaterialCommunityIcons}
                name="storefront-outline"
                size="5"
                color={"brand.500"}
              />
                <Text fontSize={11}> Café-restaurante</Text>

            </View>

            <View style={styles.verticalAlign}>
              <Icon
                as={MaterialIcons}
                name="attach-money"
                size="5"
                color={"brand.500"}
              />
                <Text fontSize={11}> 1.5€ consumo mínimo no local</Text>

            </View>

          </Flex>
        </View>

        <MatchRoomCard />

        <Flex flex={1}  alignItems="center">

        <Btn
            onPress={() => navigation.navigate("CreateMatch")}
            minWidth={40}
            width={40}
            variant="solid"
            marginBottom={10}
            marginTop={7}
          >
            Criar partida
          </Btn>
            </Flex>


      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  verticalAlign: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },
});

export default PlaceScreen;
