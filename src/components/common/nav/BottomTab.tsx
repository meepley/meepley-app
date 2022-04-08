import React from "react";
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { useSnapshot } from "valtio";

import { Box, Center, Flex, Icon, Pressable, Text } from "native-base";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import authStore from "@services/store/authStore";
import { getPath } from "@utils/helpers/misc/getPath";

const BottomTab: React.FC<{ isInsideMatchroom?: boolean }> = ({
  isInsideMatchroom = false,
}) => {
  const navigation = useNavigation();
  const { width: w } = useWindowDimensions();
  const { user } = useSnapshot(authStore);
  const height = 75;
  const circleWidth = 80;

  const d = getPath(w, height, circleWidth, isInsideMatchroom);

  return (
    <Box alignSelf="center" position="absolute" bottom="0">
      <Svg width={w} height={height}>
        <Path fill={"#e4e4e4"} stroke="#f0f0f0" strokeWidth={0.75} {...{ d }} />
      </Svg>
      <Box
        position="absolute"
        flexDirection="row"
        justifyContent="space-between"
        style={{ width: w }}
      >
        {!isInsideMatchroom ? (
          <>
            <View style={[styles.row, { height: height }]}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityLabel="Ir para perfil do utilizador"
                  onPress={() =>
                    user?.username &&
                    navigation.navigate("Profile", {
                      profile: { username: user.username },
                    })
                  }
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons
                    size={30}
                    color="#979797"
                    name="person-circle-outline"
                  />
                  <Text mt={1} color="#979797">
                    Perfil
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <Pressable
              style={{
                top: -42.5,
                width: 75,
                height: 75,
                elevation: 8,
                borderRadius: 35,
              }}
              accessibilityRole="button"
              accessibilityLabel="Criar partida"
              onPress={() => navigation.navigate("CreateMatch")}
            >
              <Center
                width="100%"
                height="100%"
                rounded="full"
                style={{ elevation: 2 }}
                bg={{
                  linearGradient: {
                    colors: ["#eeedf7", "#7e71d3"],
                    start: [0.15, 0.0],
                    end: [0.75, 1.0],
                  },
                }}
              >
                <Icon size={10} as={Ionicons} name="add" color="white" />
              </Center>
            </Pressable>

            <View style={[styles.row, { height: height }]}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityLabel="Ir para lista de jogos de tabuleiro"
                  onPress={() =>
                    navigation.navigate("BoardgamesList", {
                      previousRoute: "Dashboard",
                    })
                  }
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome5 name="dice-d20" size={25} color="#979797" />
                  <Text mt={1} color="#979797">
                    Jogos
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <View style={[styles.row, { height: height }]}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Dashboard")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="exit-outline" size={30} color={"#979797"} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="chatbubbles-outline"
                  size={30}
                  color={"#979797"}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Utilities")}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FontAwesome5 name="dice-d20" size={30} color={"#979797"} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default BottomTab;
