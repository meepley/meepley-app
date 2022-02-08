import React from "react";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import { Box, Center, Flex, Heading, IconButton, Menu } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

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
}> = ({ navigation, options, back, title, isAuth }) => {
  return (
    <SafeAreaView>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        style={{ height: 75, backgroundColor: "transparent" }}
      >
        <Center height={10} width={10} ml={4}>
          {back && options.headerBackVisible && (
            <IconButton
              onPress={() => navigation.canGoBack() && navigation.goBack()}
              width="full"
              variant="ghost"
              colorScheme="brand"
              borderRadius="full"
              _icon={{
                justifyContent: "center",
                as: FontAwesome5,
                name: "chevron-left",
                color: "brand.500",
                size: 6,
              }}
            />
          )}
        </Center>
        <Box>
          {
            options?.title ? (
              <Heading color="brand.500" fontSize="lg">
                {options.title}
              </Heading>
            ) : (
              options?.headerTitle && options.headerTitle()
            ) // @ts-ignore
          }
        </Box>
        <Flex justifyContent="center" height={10} width={10} mr={4}>
          {isAuth && (
            <>
              <Menu
                w="160"
                shouldOverlapWithTrigger={false} // @ts-ignore
                placement={"bottom right"}
                trigger={(triggerProps) => {
                  return (
                    <IconButton
                      {...triggerProps}
                      variant="ghost"
                      colorScheme="brand"
                      borderRadius="full"
                      _icon={{
                        as: Ionicons,
                        name: "ios-options",
                        color: "brand.500",
                        size: 6,
                      }}
                    />
                  );
                }}
              >
                <Menu.Item onPress={() => navigation.navigate("Settings")}>
                  Definições
                </Menu.Item>
                <Menu.Item
                  onPress={() => {
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
