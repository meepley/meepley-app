import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Field, Formik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Text,
  Divider,
  Heading,
  HStack,
  IconButton,
  Link,
  Modal,
  Button,
  useToast,
  ScrollView,
  Flex,
  Image,
  VStack,
} from "native-base";

import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import PasswordInput from "@components/common/forms/PasswordInput";
import EmailInput from "@components/common/forms/EmailInput";
import SpeechBubbleBtn from "@components/common/buttons/SpeechBubbleBtn";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Necessitas de inserir o seu email para realizar o registo"),
  password: Yup.string()
    .required(
      "Necessitas de inserir a sua palavra-passe para realizar o registo"
    )
    .min(8, "A tua password tem de ter pelo menos oito caracteres"),
  passwordConfirmation: Yup.string()
    .required(
      "Necessitas de inserir a sua password novamente para realizar o registo"
    )
    .oneOf([Yup.ref("password"), null], "As passwords têm de ser iguais"),
});

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const toast = useToast();

  const _onRegisterFormSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
    passwordConfirmation: string;
  }) => {
    console.log(email, password);
    toast.show({
      title: "Conta registada com sucesso!",
      status: "success",
      description:
        "Parábens por te juntares à mesa connosco. Irás receber um email para confirmar a tua conta e a partir daí é só jogar!",
    });
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
              <Heading pb={6}>Registo</Heading>
              <Formik
                validationSchema={RegisterSchema}
                initialValues={{
                  email: "",
                  password: "",
                  passwordConfirmation: "",
                }}
                onSubmit={async (values, actions) => {
                  actions.setSubmitting(true);
                  await _onRegisterFormSubmit(values);
                  actions.setSubmitting(false);
                }}
              >
                {({ handleSubmit, isSubmitting }) => (
                  <VStack space={6} width="100%">
                    <Field name="email" type="text" component={EmailInput} />
                    <Field
                      name="password"
                      label="Password"
                      placeholder="insere a tua password"
                      type="password"
                      component={PasswordInput}
                    />
                    <Field
                      name="passwordConfirmation"
                      label="Reinserir Password"
                      placeholder="insere novamente a tua password"
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
                        onPress={() => handleSubmit}
                      >
                        Registar
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
                Ao fazeres o registo concordas com os Termos e aceitas as{" "}
                <Text
                  underline
                  color="brand.600"
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  Políticas de Privacidade
                </Text>
              </Text>

              <Divider my={8} />

              <Text
                textAlign="center"
                pb={4}
                textTransform="uppercase"
                fontWeight="bold"
              >
                Registar com
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
          </Box>
        </Flex>

        {/* Modal de condições, políticas para o registo */}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              scelerisque nec dolor at placerat. Phasellus vel ipsum tortor.
              Etiam faucibus lobortis ante quis ultrices. Aliquam ac lorem
              sodales, ornare felis in, vestibulum lorem. Nullam venenatis
              gravida arcu. Nullam pulvinar eros id nulla feugiat, et molestie
              magna ullamcorper. Cras at erat nibh. In maximus pellentesque
              justo id ultricies.
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex="1"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Fechar
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </ScrollView>
    </Container>
  );
};

export default RegisterScreen;
