import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  EvilIcons,
  MaterialCommunityIcons,
  Fontisto,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import MatchRoomCard from "@components/common/MatchRoomCard";
import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import { useNavigation } from "@react-navigation/native";

import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  HStack,
} from "native-base";
import { color } from "native-base/lib/typescript/theme/styled-system";

const MatchRoomScreen = () => {
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
              <Icon
                as={MaterialCommunityIcons}
                name="clock-outline"
                size="5"
                color={"brand.500"}
              />
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

        <View>
          <Heading marginLeft={15} mb={2} color={"brand.600"} fontSize={"sm"}>
            Sobre o jogo
          </Heading>
          <Text
            marginLeft={15}
            marginRight={15}
            fontSize={11}
            justifyContent={"center"}
          >
            Gloomhaven is a game of Euro-inspired tactical combat in a
            persistent world of shifting motives. Players will take on the role
            of a wandering adventurer with their own special set of skills and
            their own reasons for traveling to this dark corner of the...
          </Text>
        </View>

        {/*<BottomTab*/}
        {/*  content={*/}
        {/*    <>*/}
        {/*      <Btn*/}
        {/*        onPress={() => navigation.navigate("Chat")}*/}
        {/*        variant="solid"*/}
        {/*      >*/}
        {/*        Chat*/}
        {/*      </Btn>*/}
        {/*      <Btn*/}
        {/*        onPress={() => navigation.navigate("Utilities")}*/}
        {/*        variant="solid"*/}
        {/*      >*/}
        {/*        Utilitários*/}
        {/*      </Btn>*/}
        {/*      <Btn onPress={() => setIsInMatch(false)} variant="solid">*/}
        {/*        Deixar Sala*/}
        {/*      </Btn>*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}

        <View>
          <Heading marginTop={10} paddingLeft={15} marginBottom={5}>
            Jogadores
          </Heading>
          <HStack marginLeft={5} space={4}>
            <Avatar
              onTouchEnd={() => navigation.navigate("Profile")}
              borderWidth={2}
              borderColor={"yellow.300"}
              size="lg"
              source={require("../../assets/images/personas/persona4.png")}
            ></Avatar>
            <Avatar
              borderWidth={2}
              borderColor={"brand.300"}
              size="lg"
              source={require("../../assets/images/personas/persona3.png")}
            ></Avatar>
            <Avatar
              borderWidth={2}
              borderColor={"brand.300"}
              size="lg"
              source={require("../../assets/images/personas/persona1.png")}
            ></Avatar>
          </HStack>
        </View>

        <Flex flex={1} alignItems="center">
          <Btn
            onPress={() => navigation.navigate("CreateMatch")}
            minWidth={40}
            width={40}
            variant="solid"
            marginBottom={10}
            marginTop={7}
          >
            Entrar
          </Btn>
        </Flex>
      </ScrollView>
    </Container>
  );
};

export default MatchRoomScreen;

const styles = StyleSheet.create({
  verticalAlign: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
  },
});
