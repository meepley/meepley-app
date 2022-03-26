import React from "react";
import { Flex, Heading } from "native-base";

import BottomTab from "@components/common/navigation/BottomTab";
import Emoji from "@components/common/Emoji";

const ChatScreen = () => {
  return (
    <Flex flex={1} h="full" alignItems="center" bgColor="white">
      {/* Matchroom Section */}
      <Heading px={12} pt={8} pb={4}>
        O nosso chat ainda se encontra em desenvolvimento! Passado uns turnos já
        deve estar pronto, por isso fica atento! <Emoji size={26}>😉</Emoji>
      </Heading>

      {/* Bottom Navigation Section */}
      <BottomTab isInsideMatchroom={true} />
    </Flex>
  );
};

export default ChatScreen;
