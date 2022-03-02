import React from "react";
import {
  View,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as shape from "d3-shape";
import Svg, { Path } from "react-native-svg";

import { Box, Flex, Icon, Pressable, Text } from "native-base";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const getPath = (
  width: number,
  height: number,
  centerWidth: number,
  isInsideMatchroom: boolean
) => {
  const circleWidth = centerWidth + 15;

  const pathBorderTopLeftRight = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveBasis)(
    !isInsideMatchroom
      ? [
          // right
          { x: (width - circleWidth) / 2 + circleWidth + 20, y: 0 },
          { x: width - 40, y: 0 },
          { x: width - 20, y: 4 },
          { x: width - 4, y: 20 },
          { x: width, y: 30 },
          { x: width, y: height },
          { x: width, y: height },
          // bottom
          { x: width, y: height },
          { x: 0, y: height },
          // left
          { x: 0, y: height },
          { x: 0, y: height },
          { x: 0, y: 30 },
          { x: 0 + 4, y: 20 },
          { x: 0 + 20, y: 4 },
          { x: 0 + 40, y: 0 },
          { x: (width - circleWidth) / 2 - 20, y: 0 },

          { x: (width - circleWidth) / 2 - 18, y: 0 }, // border center left
          { x: (width - circleWidth) / 2 - 10, y: 2 },
          { x: (width - circleWidth) / 2 - 2, y: 10 },
          { x: (width - circleWidth) / 2, y: 17 },

          {
            x: width / 2 - circleWidth / 2 + 15,
            y: height / 2 + 2,
          },
          { x: width / 2 - 10, y: height / 2 + 10 },
          { x: width / 2, y: height / 2 + 10 },
          { x: width / 2 + 10, y: height / 2 + 10 },
          {
            x: width / 2 + circleWidth / 2 - 15,
            y: height / 2 + 2,
          },

          { x: (width - circleWidth) / 2 + circleWidth, y: 17 }, // border center right
          {
            x: (width - circleWidth) / 2 + circleWidth + 2,
            y: 10,
          },
          {
            x: (width - circleWidth) / 2 + circleWidth + 10,
            y: 2,
          },
          {
            x: (width - circleWidth) / 2 + circleWidth + 18,
            y: 0,
          },
        ]
      : [
          // right
          { x: (width - circleWidth) / 2 + circleWidth + 20, y: 0 },
          { x: width - 40, y: 0 },
          { x: width - 20, y: 4 },
          { x: width - 4, y: 20 },
          { x: width, y: 30 },
          { x: width, y: height },
          { x: width, y: height },
          // bottom
          { x: width, y: height },
          { x: 0, y: height },
          // left
          { x: 0, y: height },
          { x: 0, y: height },
          { x: 0, y: 30 },
          { x: 0 + 4, y: 20 },
          { x: 0 + 20, y: 4 },
          { x: 0 + 40, y: 0 },
          { x: (width - circleWidth) / 2 - 20, y: 0 },
        ]
  );

  return pathBorderTopLeftRight;
};

const BottomTab: React.FC<{ isInsideMatchroom?: boolean }> = ({
  isInsideMatchroom = false,
}) => {
  const navigation = useNavigation();
  const { width: w } = useWindowDimensions();
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
                  onPress={() => navigation.navigate("Profile")}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons
                    name="person-circle-outline"
                    size={30}
                    color={"#979797"}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Pressable
              style={{ top: -45.5, width: 80, height: 80, borderRadius: 35 }}
              onPress={() => navigation.navigate("CreateMatch")}
            >
              <Flex
                width="100%"
                height="100%"
                rounded="full"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                bg={{
                  linearGradient: {
                    colors: ["white", "#A69BEA"],
                    start: [-1.2, 0],
                    end: [0, 2],
                    location: [0.25, 0.4, 1],
                  },
                }}
              >
                <Icon as={Ionicons} name="add" color="white" />
              </Flex>
            </Pressable>

            <View style={[styles.row, { height: height }]}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("BoardgamesListScreen")}
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome5 name="dice-d20" size={25} color={"#979797"} />
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
