import React, { Fragment, useState } from "react";
import { Share, TouchableOpacity, useWindowDimensions } from "react-native";
import { useSnapshot } from "valtio";
import { StatusBar } from "expo-status-bar";

import {
  View,
  Center,
  HStack,
  Avatar,
  Text,
  ScrollView,
  Box,
  Heading,
  Icon,
  Modal,
  Divider,
  Flex,
  IconButton,
  Image,
} from "native-base";
import { AntDesign, EvilIcons, Feather, Ionicons } from "@expo/vector-icons";

import Btn from "@components/common/buttons/Btn";
import Achievement from "@components/common/buttons/Achievement";

import authStore from "@services/store/authStore";
import { ProfileProps } from "@ts/types/navigation/RootStack";
import openUrl from "@utils/helpers/openUrl";

const ProfileScreen: React.FC<ProfileProps> = ({ route, navigation }) => {
  const { height } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const [follow, setFollow] = useState(false);
  const [openAchievement, setOpenAchievement] = useState<{
    title: string;
    icon: string;
    description: string;
  } | null>(null);

  const { profile } = route.params;
  const { user } = useSnapshot(authStore);
  const isUserLoggedInProfile = user?.username === profile.username;

  const userProfile = user;

  const onShare = async (message: string) => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error?.message);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#FAFAFA" />
      <ScrollView>
        <Box py={10} px={12} minH={height} backgroundColor="#FAFAFA">
          <Center>
            <Avatar size={40} shadow={4} source={userProfile?.avatar}>
              {userProfile?.username}
            </Avatar>
            <Heading pt={6}>{userProfile?.username}</Heading>
            <HStack
              justifyContent="center"
              alignItems="center"
              space={2}
              pt={2}
            >
              <AntDesign name="Trophy" size={16} color="gold" />
              <Text color="lYellow.500" fontWeight="bold">
                Mestre no Dixit
              </Text>
            </HStack>
          </Center>

          <Center mt={6}>
            {isUserLoggedInProfile ? (
              <Btn
                width="70%"
                variant="solid"
                colorScheme="brand"
                isDisabled={true}
                leftIcon={
                  <Icon
                    mr={1}
                    size={5}
                    name="edit"
                    as={Feather}
                    color="white"
                  />
                }
              >
                Editar Perfil
              </Btn>
            ) : (
              <HStack space={2}>
                <Btn
                  width="42.5%"
                  colorScheme="brand"
                  variant={!follow ? "outline" : "solid"}
                  onPress={() => setFollow(!follow)}
                  leftIcon={
                    <Icon
                      mr={1}
                      size={5}
                      as={Ionicons}
                      color="brand.500"
                      name="person-add-outline"
                    />
                  }
                >
                  {!follow ? "Seguir" : "Deixar de Seguir"}
                </Btn>

                <Btn
                  width="42.5%"
                  variant="solid"
                  colorScheme="brand"
                  isDisabled={true}
                  leftIcon={
                    <Icon
                      mr={1}
                      size={5}
                      as={Ionicons}
                      color="white"
                      name="paper-plane-outline"
                    />
                  }
                >
                  Mensagem
                </Btn>
              </HStack>
            )}
          </Center>

          <Box
            pt={10}
            flexDirection="row"
            alignContent="center"
            justifyContent="center"
          >
            {/* Matches Played */}
            <View>
              <Heading textAlign="center">{userProfile?.matchs_played}</Heading>
              <Text
                fontSize="xs"
                textAlign="center"
                color="rgba(187,186,186,0.97)"
              >
                Partidas
              </Text>
            </View>

            {/* Divider */}
            <Box style={{ width: 0.4 }} h="full" mx={8} bgColor="gray.300" />

            {/* Number of Followers */}
            <Box>
              <Heading textAlign="center">{userProfile?.followers}</Heading>
              <Text
                fontSize="xs"
                textAlign="center"
                color="rgba(187,186,186,0.97)"
              >
                Seguidores
              </Text>
            </Box>
          </Box>

          {/* Achievements */}
          <Box pt={10}>
            <Heading pb={4}>Proezas</Heading>
            {userProfile?.achievements.map((achievement) => (
              <Fragment key={achievement.title}>
                <Achievement
                  color="green"
                  icon={achievement.icon}
                  title={achievement.title}
                  text={achievement.description}
                  openAchievementCallback={() => {
                    setOpenAchievement(achievement);
                    setModalVisible(!modalVisible);
                  }}
                />
              </Fragment>
            ))}
          </Box>

          {/* 
          Favorite Games 
          <Box pt={10}>
            <Heading pb={4}>Jogos Favoritos</Heading>
          </Box>
          */}

          {/* If it is the user logged in show the users they follow */}
          {isUserLoggedInProfile ? (
            <Box pt={10}>
              <Heading pb={4}>Quem segues</Heading>
              <HStack space={4}>
                {userProfile?.following.map((following) => (
                  <TouchableOpacity
                    key={following.slug}
                    onPress={() =>
                      navigation.navigate("Profile", {
                        profile: { username: following.username },
                      })
                    }
                  >
                    <Center
                      style={{ height: 80, width: 80 }}
                      rounded="full"
                      borderWidth="4"
                      borderColor="brand.500"
                    >
                      <Avatar
                        h="97%"
                        w="97%"
                        borderWidth={2}
                        borderColor="#FAFAFA"
                        source={following.avatar}
                      />
                    </Center>
                  </TouchableOpacity>
                ))}
              </HStack>
            </Box>
          ) : null}

          {openAchievement ? (
            <Modal
              isOpen={modalVisible}
              onClose={() => setModalVisible(false)}
              avoidKeyboard
              size="lg"
            >
              <Modal.Content
                px={5}
                pt={5}
                pb={10}
                minH={300}
                shadow={0}
                borderRadius={40}
                textAlign="center"
                backgroundColor="white"
              >
                {/* Header of the Dialog */}
                <Flex
                  w="full"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <IconButton
                    variant="ghost"
                    rounded="full"
                    colorScheme="brand"
                    onPress={() => setModalVisible(false)}
                    icon={
                      <Icon
                        size="6"
                        name="close"
                        as={EvilIcons}
                        color="brand.500"
                      />
                    }
                  />
                </Flex>

                {/* Dialog Content */}
                <Center pt={2} width="full">
                  <Icon
                    size={24}
                    as={AntDesign}
                    color="#FDC500"
                    name={openAchievement?.icon}
                  />
                </Center>

                <Heading pt={30} fontSize="lg" width="full" textAlign="center">
                  {openAchievement?.title}
                </Heading>
                <Divider my={5} w="80%" alignSelf="center" />
                <Text width="full" textAlign="center">
                  {openAchievement?.description}
                </Text>

                <Center pt={4}>
                  <Btn
                    py={3}
                    mb={8}
                    variant="solid"
                    colorScheme="brand"
                    onPress={() =>
                      onShare(
                        `Conquistei a proeza - ${openAchievement?.title} - no MeePley, a plataforma para encontrar jogadores de tabuleiro em Aveiro. Experimenta já e ao fazê-lo estás a ajudar Aveiro na sua candidatura para Capital Europeia da Cultura de 2027 enquanto jogas boardgames! 🤩`
                      )
                    }
                    leftIcon={
                      <Icon
                        size={4}
                        color="white"
                        as={Ionicons}
                        name="ios-share-social-outline"
                      />
                    }
                  >
                    Partilhar
                  </Btn>
                  <Image
                    h="24"
                    resizeMode="contain"
                    alt="Aveiro 2027 Capital Europeia da Cultura"
                    source={require("@assets/images/branding/aveiro-full-black.png")}
                  />
                  <Text
                    mt={2}
                    underline
                    fontSize={11}
                    color="brand.600"
                    textAlign="center"
                    onPress={async () => await openUrl("https://aveiro2027.pt")}
                  >
                    Saber mais
                  </Text>
                </Center>
              </Modal.Content>
            </Modal>
          ) : null}
        </Box>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;
