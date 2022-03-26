import React from "react";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Menu,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSnapshot } from "valtio";
import authStore from "@services/store/authStore";

const AppHeader: React.FC<{
  navigation: NativeStackNavigationProp<ParamListBase, string>;
  options: NativeStackNavigationOptions;
  back:
    | {
        title: string;
      }
    | undefined;
  title: string;
  isAuth: boolean;
}> = ({ navigation, options, back, title }) => {
  const { setAuth, isAuth } = useSnapshot(authStore);
  const navigationState = navigation.getState();

  return (
    <SafeAreaView>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        style={{
          height: 75,
          backgroundColor:
            navigationState.routes[navigationState.routes.length - 1].name ===
              "BoardgamesList" ||
            navigationState.routes[navigationState.routes.length - 1].name ===
              "Profile" ||
            navigationState.routes[navigationState.routes.length - 1].name ===
              "CreateMatch"
              ? "#FAFAFA"
              : "transparent",
        }}
      >
        <Center height={10} width={10} ml={4}>
          {back && options.headerBackVisible && (
            <Button
              w="12"
              h="12"
              variant="ghost"
              rounded="full"
              colorScheme="brand"
              onPress={() => navigation.canGoBack() && navigation.goBack()}
            >
              <Icon
                size="7"
                as={Ionicons}
                color="brand.500"
                name="chevron-back"
              />
            </Button>
          )}
        </Center>
        <Box>
          {options?.title ? (
            <Heading color="brand.500" fontSize="lg">
              {options.title}
            </Heading>
          ) : (
            options?.headerTitle &&
            typeof options.headerTitle !== "string" &&
            options.headerTitle({ children: "" }) // @ts-ignore
          )}
        </Box>
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
                      rounded="full"
                      variant="ghost"
                      colorScheme="brand"
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
    </SafeAreaView>
  );
};

export default AppHeader;
