import React from "react";
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "native-base";
import { EvilIcons, FontAwesome5 } from "@expo/vector-icons";

const BoardgameCard: React.FC<{
  name: string;
  img: string;
  genres: (string | undefined)[];
  players: string;
  addButton?: boolean;
  bgColor?: string;
  mt?: number;
}> = ({ name, img, genres, players, bgColor = "", mt }) => {
  const genresString = genres.map((genre, i) =>
    i === genres.length - 1 ? genre : `${genre}, `
  );

  return (
    <Box
      backgroundColor={bgColor}
      borderRadius="20"
      overflow="hidden"
      shadow={4}
      _dark={{
        borderColor: "coolGray.600",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
    >
      <Box>
        <Image
          source={{
            uri: img,
          }}
          alt={`${name} Image`}
          w="full"
          resizeMode="cover"
          h="40"
        />
      </Box>
      <Stack p={6} space={3}>
        <Heading
          style={{
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 2,
          }}
          color="white"
          size="md"
          ml="-1"
        >
          {name}
        </Heading>
        {genresString !== undefined && (
          <HStack space="2" alignItems="flex-start">
            <Icon as={FontAwesome5} name="star" size="5" color="white" />
            <Text
              style={{
                textShadowColor: "rgba(0, 0, 0, 0.25)",
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 2,
                flexShrink: 1,
              }}
              numberOfLines={2}
              fontStyle="italic"
              color="white"
            >
              {genresString}
            </Text>
          </HStack>
        )}
        <HStack space="2">
          <Icon as={FontAwesome5} name="user" size="5" color="white" />
          <Text
            style={{
              textShadowColor: "rgba(0, 0, 0, 0.25)",
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 2,
            }}
            color="white"
          >
            {players}
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
};

export default BoardgameCard;
