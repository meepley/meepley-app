import React from "react";
import { AspectRatio, Box, Heading, Image, Stack, Text } from "native-base";

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
    <Box alignItems="center">
      <Box
        backgroundColor={bgColor}
        rounded="lg"
        overflow="hidden"
        _dark={{
          borderColor: "coolGray.600",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: img,
              }}
              alt={`${name} Image`}
            />
          </AspectRatio>
        </Box>
        <Stack p="4" space={3}>
          <Heading color="white" size="md" ml="-1">
            {name}
          </Heading>
          {genresString !== undefined && (
            <Box>
              <Text fontStyle="italic" color="white">
                {genresString}
              </Text>
            </Box>
          )}
          <Box>
            <Text color="white">{players}</Text>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default BoardgameCard;
