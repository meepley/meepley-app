import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSnapshot } from "valtio";

import { Button, Center, Flex, Icon, Menu } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import authStore from "@services/store/authStore";

const TransparentHeader = () => {
  /**
   * * This component server as a transparent header without any title or logo
   * * It simply contains two buttons, the go back button on the left and
   * * the right button that opens a menu with the option to logout or go to the settings
   * * It's used in the following screens: PlaceScreen, BoardgameScreen, MatchRoomScreen
   */
  const { setAuth, isAuth } = useSnapshot(authStore);
  const navigation = useNavigation();

  return (
    <Flex
      w="100%"
      pt={10}
      zIndex="5"
      direction="row"
      position="absolute"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="transparent"
      style={{
        height: 75,
      }}
    >
      <Center height={8} width={8} ml={8}>
        <Button
          w="12"
          h="12"
          shadow="3"
          rounded="full"
          variant="solid"
          backgroundColor="white"
          onPress={() => navigation.goBack()}
        >
          <Icon size="7" as={Ionicons} color="brand.500" name="chevron-back" />
        </Button>
      </Center>
      <Flex justifyContent="center" height={8} width={8} mr={8}>
        {isAuth && (
          <>
            <Menu
              w="160"
              shouldOverlapWithTrigger={false} // @ts-ignore
              placement={"bottom right"}
              trigger={(triggerProps) => {
                return (
                  <Button
                    {...triggerProps}
                    w="12"
                    h="12"
                    shadow="3"
                    rounded="full"
                    variant="solid"
                    backgroundColor="white"
                  >
                    <Icon
                      size="6"
                      as={Ionicons}
                      color="brand.500"
                      name="ellipsis-vertical"
                    />
                  </Button>
                );
              }}
            >
              <Menu.Item onPress={() => navigation.navigate("Settings")}>
                Definições
              </Menu.Item>
              <Menu.Item
                onPress={() => {
                  setAuth(false, "logout");
                  navigation.navigate("Login");
                }}
              >
                Logout
              </Menu.Item>
            </Menu>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default TransparentHeader;
