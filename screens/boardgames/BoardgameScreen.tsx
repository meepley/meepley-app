import React from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@ts/types/navigation/RootStack";

import Container from "@components/common/Container";

type TBoardgameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Boardgame"
>;

const BoardgameScreen = ({ route, navigation }: TBoardgameScreenProps) => {
  const { boardgameId, boardgame } = route.params;

  return (
    <Container>
      <View>
        <Text>Individual Boardgame</Text>
      </View>
    </Container>
  );
};

export default BoardgameScreen;
