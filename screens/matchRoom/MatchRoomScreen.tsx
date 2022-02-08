import { View, Text } from "react-native";
import React, { useState } from "react";
import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import { useNavigation } from "@react-navigation/native";
import { Flex, ScrollView } from "native-base";
import BottomTab from "@components/common/BottomTab";

const MatchRoomScreen = () => {
  const navigation = useNavigation();
  const [isInMatch, setIsInMatch] = useState(false);
  return (
    <Flex flex={1} h="full" alignItems="center" bgColor="white">
      {!isInMatch ? (
        <>
          <Text>Matchroom View</Text>
          <Btn
            onPress={() => setIsInMatch(true)}
            minWidth={40}
            width={40}
            variant="solid"
          >
            Entrar
          </Btn>
        </>
      ) : (
        <>
          <ScrollView>
            <Text>Matchroom View Joined</Text>
          </ScrollView>

          <BottomTab
            content={
              <>
                <Btn
                  onPress={() => navigation.navigate("Chat")}
                  variant="solid"
                >
                  Chat
                </Btn>
                <Btn
                  onPress={() => navigation.navigate("Utilities")}
                  variant="solid"
                >
                  Utilitários
                </Btn>
                <Btn onPress={() => setIsInMatch(false)} variant="solid">
                  Deixar Sala
                </Btn>
              </>
            }
          />
        </>
      )}
    </Flex>
  );
};

{
  /* <>
  
</>; */
}

export default MatchRoomScreen;
