import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Box, Flex, Icon, Image, Pressable, Text } from "native-base";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "@theme/utilsStyles";
import { IMatchRoom } from "@ts/interfaces/IMatchRoom";

const MatchRoomCard: React.FC<{
  item: IMatchRoom;
  index: number;
  bgColor: string;
}> = ({ item, index, bgColor }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      key={index}
      mx={2}
      onPress={() => navigation.navigate("MatchRoom", { matchRoom: item })}
    >
      <Box
        my={4}
        borderRadius="40"
        bgColor={bgColor}
        style={{
          elevation: 2,
          shadowRadius: 5,
          shadowColor: "#000",
          shadowOffset: { width: 4, height: 4 },
        }}
      >
        <Image
          borderTopRadius="40"
          h="170"
          w="full"
          source={{
            uri: item.img,
          }}
          alt={item.name}
        />
        <Box px={6} pt={4} pb={6}>
          <Text
            pb={2}
            fontSize={13}
            color="white"
            fontWeight={700}
            numberOfLines={1}
            style={styles.textWithShadow}
          >
            {item.name}
          </Text>

          <Flex flexDirection="row" pb={2}>
            <Icon
              mr={1}
              as={Ionicons}
              name="location-outline"
              size="4"
              color="white"
            />
            <Text fontSize={11} color="white" style={styles.textWithShadow}>
              {item.place.name}
            </Text>
          </Flex>

          <Flex flexDirection="row">
            <Text pr={1} pb={2} fontSize={11} style={styles.textWithShadow}>
              <Icon
                as={MaterialCommunityIcons}
                name="calendar-blank-outline"
                color="white"
                size="4"
              />
            </Text>
            <Text fontSize={11} color="white" style={styles.textWithShadow}>
              {item.date + " às " + item.hour}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Pressable>
  );
};

export default MatchRoomCard;
