import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Box, Flex, Icon, IconButton, Pressable, Text } from "native-base";

import { IS_IPHONE_X } from "@utils/helpers/misc";
import Btn from "@components/common/buttons/Btn";

const BottomTab: React.FC<{ content: React.ReactNode }> = ({ content }) => {
  const navigation = useNavigation();

  return (
    <>
      <Flex
        position="absolute"
        flex="0.1"
        direction="row"
        left="0"
        right="0"
        bottom="-10"
        height={"1/6"}
        alignItems="center"
        bgColor="brand.500"
        justifyContent="space-evenly"
      >
        {content}
      </Flex>

      {IS_IPHONE_X && (
        <Box
          position={"absolute"}
          bottom="0"
          left={"0"}
          right="0"
          height={"32"}
        />
      )}
    </>
  );
};

export default BottomTab;
