import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Field, Formik } from "formik";
import { useSnapshot } from "valtio";

import {
  Box,
  Text,
  Divider,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Input,
  Modal,
  VStack,
  Flex,
  ScrollView,
  Image,
  Center,
} from "native-base";

import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import PasswordInput from "@components/common/forms/PasswordInput";
import EmailInput from "@components/common/forms/EmailInput";
import SpeechBubbleBtn from "@components/common/buttons/SpeechBubbleBtn";

import authStore from "@services/store/authStore";
import logInSchema from "@utils/helpers/validation/logInSchema";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { setAuth, isAuth } = useSnapshot(authStore);

  const _onLoginFormSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuth && setAuth(true, "login");
    if (isAuth) {
      navigation.navigate("CalibrationOnboarding");
    }
  };

  return (
    <Container>
      <ScrollView>
        <Box position="absolute" top="2%" left="80%">
          <Image
            alt="First Meeple"
            resizeMode="contain"
            style={[
              { zIndex: 200, width: 35, height: 35 },
              { transform: [{ rotate: "-70deg" }] },
            ]}
            source={require("@assets/images/meeples/meeple.png")}
          />
        </Box>
        <Box position="absolute" top="10%" left="-5%">
          <Image
            alt="Second Meeple"
            resizeMode="contain"
            style={{ zIndex: 200, width: 60, height: 60 }}
            source={require("@assets/images/meeples/meeple.png")}
          />
        </Box>
        <Box position="absolute" top="28%" left="75%">
          <Image
            alt="Third Meeple"
            resizeMode="contain"
            style={[{ zIndex: 200, width: 80, height: 80 }]}
            source={require("@assets/images/meeples/meeple.png")}
          />
        </Box>
        <Flex
          p="12"
          h="500"
          w="full"
          direction="column"
          alignItems="center"
          justifyContent="flex-start"
          bg={{
            linearGradient: {
              colors: ["#614eca", "rgba(157, 146, 218, 0.5312)"],
              start: [-1.2, 0],
              end: [0, 2],
              location: [0.25, 0.4, 1],
            },
          }}
        >
          <Image
            alt="MeePley Logo"
            resizeMode="contain"
            style={{ width: 250, height: 100 }}
            source={require("@assets/images/branding/logo-w-slogan-white.png")}
          />
          <Text color="white" pt={4}>
            Diversão nos tabuleiros de Aveiro para todos os{" "}
            <Text fontStyle="italic">boardgamers</Text>
          </Text>
          <Center pt={2}>
            <Image
              alt="Aveiro 2027 Logo"
              resizeMode="contain"
              style={{ width: 120, height: 60 }}
              source={require("@assets/images/branding/aveiro-full-white.png")}
            />
          </Center>
        </Flex>

        <Box
          w="full"
          bgColor="white"
          marginTop="-200"
          borderTopRightRadius={135}
        >
          <Box p={12}>
            <Heading pb={6}>Log in</Heading>
            <Formik
              validationSchema={logInSchema}
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values, actions) => {
                actions.setSubmitting(true);
                await _onLoginFormSubmit(values);
              }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <VStack space={6} width="100%">
                  <Field name="email" type="email" component={EmailInput} />
                  <Field
                    name="password"
                    label="Password"
                    type="password"
                    component={PasswordInput}
                    placeholder="a tua password"
                  />

                  <Flex direction="row" justifyContent="center" pb={6}>
                    <Btn
                      width={40}
                      minWidth={40}
                      variant="solid"
                      isLoading={isSubmitting}
                      isDisabled={isSubmitting}
                      onPress={handleSubmit as (values: any) => void}
                    >
                      Entrar
                    </Btn>
                  </Flex>
                </VStack>
              )}
            </Formik>

            <Text textAlign="center" pb={2}>
              Não tens conta?{" "}
              <Text
                underline
                color="brand.600"
                onPress={() => navigation.navigate("Register")}
              >
                Regista-te aqui
              </Text>
            </Text>
            <Text textAlign="center">
              Esqueceste-te da tua password?{" "}
              <Text
                underline
                color="brand.600"
                onPress={() => setModalVisible(!modalVisible)}
              >
                Carrega aqui
              </Text>
            </Text>

            <Divider my={8} />

            <Text
              textAlign="center"
              pb={4}
              textTransform="uppercase"
              fontWeight="bold"
            >
              Entrar com
            </Text>
            <HStack justifyContent="center" space={2}>
              <IconButton
                size="lg"
                bgColor="blue.400"
                borderRadius="full"
                accessibilityRole="button"
                accessibilityLabel="Botão de registo Facebook"
                _icon={{
                  as: FontAwesome5,
                  name: "facebook",
                  color: "white",
                  size: 7,
                }}
              />
              <IconButton
                size="lg"
                bgColor="red.400"
                borderRadius="full"
                accessibilityRole="button"
                accessibilityLabel="Botão de registo Google"
                _icon={{
                  as: FontAwesome5,
                  name: "google",
                  color: "white",
                  size: 7,
                }}
              />
            </HStack>
          </Box>

          <Flex direction="row" justifyContent="space-between">
            <SpeechBubbleBtn
              color="lYellow.500"
              direction="left"
              onNavigate={() =>
                navigation.navigate("BoardgamesList", {
                  previousRoute: "Login",
                })
              }
            >
              <FontAwesome5 name="dice-d20" size={24} color="white" />
              <Text textAlign="center" pt={2} color="white">
                Jogos
              </Text>
            </SpeechBubbleBtn>
            <SpeechBubbleBtn
              color="lGreen.500"
              direction="right"
              onNavigate={() => navigation.navigate("Utilities")}
            >
              <Ionicons name="list-outline" size={24} color="white" />
              <Text textAlign="center" pt={2} color="white">
                Utilidades
              </Text>
            </SpeechBubbleBtn>
          </Flex>

          {/* Modal de forgot password */}
          <Modal
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            avoidKeyboard
            justifyContent="flex-end"
            bottom="4"
            size="lg"
          >
            <Modal.Content p={6} shadow={0}>
              <Modal.CloseButton />
              <Heading fontSize="lg" py={4} px={3} borderBottomWidth={0}>
                Recuperar Password
              </Heading>
              <Modal.Body>
                Escreve o teu email no input abaixo para nós te pudermos enviar
                instruções para recuperares a tua password
                <Box pt="4" pb="3">
                  <Input
                    type="email"
                    variant="underlined"
                    fontSize="sm"
                    placeholder="insere o teu email"
                  />
                </Box>
              </Modal.Body>
              <Modal.Footer bg="white">
                <Btn
                  flex="1"
                  minWidth={40}
                  width={40}
                  variant="solid"
                  onPress={() => {
                    setModalVisible(false);
                  }}
                >
                  Continuar
                </Btn>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Box>
      </ScrollView>
    </Container>
  );
};

export default LoginScreen;
