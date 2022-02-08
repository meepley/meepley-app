import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Field, Formik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Button,
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
} from "native-base";

import { AuthContext } from "@utils/hooks/useAuthContext";
import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import PasswordInput from "@components/common/forms/PasswordInput";
import EmailInput from "@components/common/forms/EmailInput";
import SpeechBubbleBtn from "@components/common/buttons/SpeechBubbleBtn";

const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Necessita de inserir o seu email para realizar o login"),
  password: Yup.string().required(
    "Necessita de inserir a sua palavra-passe para realizar o login"
  ),
});

const LoginScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { setAuth } = useContext(AuthContext);

  const _onLoginFormSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log(email, password);
    setAuth && setAuth(true);
    navigation.navigate("CalibrationOnboarding");
  };

  return (
    <Container>
      <ScrollView>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          w="full"
          bg={{
            linearGradient: {
              colors: ["brand.300", "brand.800"],
              start: [0, 0],
              end: [1, 0],
            },
          }}
        >
          <Box p={16}>
            <Image
              alt="MeePley Logo"
              resizeMode="contain"
              style={{ width: 250, height: 100 }}
              source={require("@assets/images/branding/logo-w-slogan.png")}
            />
            <Text color="white" pt={4} textAlign="center">
              Encontra outros jogadores para jogar os teus jogos favoritos
            </Text>
          </Box>

          <Box w="full" bgColor="white" borderTopRightRadius={135}>
            <Box p={12}>
              <Heading pb={6}>Log in</Heading>
              <Formik
                validationSchema={LogInSchema}
                initialValues={{
                  email: "",
                  password: "",
                }}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true);
                  await _onLoginFormSubmit(values);
                  actions.setSubmitting(false);
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  isSubmitting,
                }) => (
                  <VStack space={6} width="100%">
                    <Field name="email" type="email" component={EmailInput} />
                    <Field
                      name="password"
                      label="Password"
                      placeholder="insere a tua password"
                      type="password"
                      component={PasswordInput}
                    />

                    <Flex direction="row" justifyContent="center" pb={6}>
                      <Btn
                        minWidth={40}
                        width={40}
                        variant="solid"
                        isDisabled={isSubmitting}
                        isLoading={isSubmitting}
                        onPress={handleSubmit}
                      >
                        Entrar
                      </Btn>
                    </Flex>
                  </VStack>
                )}
              </Formik>

              <Text textAlign="center" pb={2}>
                Já tens conta?{" "}
                <Text
                  underline
                  color="brand.600"
                  onPress={() => navigation.navigate("Login")}
                >
                  Entra aqui
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
                  bgColor="blue.400"
                  borderRadius="full"
                  size="lg"
                  _icon={{
                    as: FontAwesome5,
                    name: "facebook",
                    color: "white",
                    size: 7,
                  }}
                />
                <IconButton
                  _icon={{
                    as: FontAwesome5,
                    name: "google",
                    color: "white",
                    size: 7,
                  }}
                  bgColor="red.400"
                  borderRadius="full"
                  size="lg"
                />
              </HStack>
            </Box>

            <Flex direction="row" justifyContent="space-between">
              <SpeechBubbleBtn
                color="lYellow.500"
                direction="left"
                onNavigate={() => navigation.navigate("BoardgamesList")}
              >
                <FontAwesome5 name="list" size={24} color="white" />
                <Text textAlign="center" pt={2} color="white">
                  Jogos
                </Text>
              </SpeechBubbleBtn>
              <SpeechBubbleBtn
                color="lGreen.500"
                direction="right"
                onNavigate={() => navigation.navigate("Utilities")}
              >
                <FontAwesome5 name="dice-d20" size={24} color="white" />
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
              <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Forgot Password?</Modal.Header>
                <Modal.Body>
                  Enter email address and we'll send a link to reset your
                  password.
                  <FormControl mt="3">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                  </FormControl>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    flex="1"
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  >
                    Proceed
                  </Button>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Box>
        </Flex>
      </ScrollView>
    </Container>
  );
};

export default LoginScreen;
