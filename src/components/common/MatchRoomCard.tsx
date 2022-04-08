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
  isActive: boolean;
}> = ({ item, index, bgColor, isActive }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      my="4"
      key={index}
      height="330"
      accessibilityRole="button"
      onPress={() => navigation.navigate("MatchRoom", { matchRoom: item })}
    >
      <Box height="full" borderRadius="40" bgColor={bgColor}>
        <Image
          h="170"
          w="full"
          alt={item.name}
          borderTopRadius="40"
          accessibilityRole="image"
          accessibilityLabel="image"
          source={{
            uri: item.img,
          }}
        />
        <Box px={6} pt={4} pb={6}>
          <Text
            pb={2}
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
              size="4"
              color="white"
              as={Ionicons}
              name="location-outline"
            />
            <Text color="white" style={styles.textWithShadow}>
              {item.place.name}
            </Text>
          </Flex>

          <Flex flexDirection="row">
            <Text pr={1} pb={2} style={styles.textWithShadow}>
              <Icon
                size="4"
                color="white"
                as={MaterialCommunityIcons}
                name="calendar-blank-outline"
              />
            </Text>
            <Text color="white" style={styles.textWithShadow}>
              {item.date + " às " + item.hour}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Pressable>
  );
};

export default MatchRoomCard;
