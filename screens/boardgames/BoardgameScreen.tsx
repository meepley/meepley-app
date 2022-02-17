import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@ts/types/navigation/RootStack";

import Container from "@components/common/Container";
import { Flex, Heading, IconButton } from "native-base";
import PagerView from "react-native-pager-view";

type TBoardgameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Boardgame"
>;

const BoardgameScreen = ({ route, navigation }: TBoardgameScreenProps) => {
  const { boardgameId, boardgame } = route.params;

  return (
    <Container>
      <Flex>
        <Heading>{boardgame.name}</Heading>
        <IconButton />
      </Flex>
      <PagerView style={{ flex: 1 }}></PagerView>
    </Container>
  );
};

export default BoardgameScreen;
