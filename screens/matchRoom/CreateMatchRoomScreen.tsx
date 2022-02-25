import React from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Field, Formik } from "formik";
import * as Yup from "yup";

import {
  Box,
  Flex,
  Heading,
  ScrollView,
  Text,
  VStack,
  useClipboard,
  useToast,
  FormControl,
  Input,
  WarningOutlineIcon,
  Select,
  Radio,
  CheckIcon,
  Stack,
} from "native-base";

import Container from "@components/common/Container";
import ChooseCard from "@components/screens/CreateMatchRoom/ChooseCard";
import Btn from "@components/common/buttons/Btn";
import {StyleSheet} from "react-native";

const CreateMatchRoomFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Necessita de inserir o seu email para realizar o login"),
  password: Yup.string().required(
    "Necessita de inserir a sua palavra-passe para realizar o login"
  ),
});

const CreateMatchRoomScreen = () => {
  const toast = useToast();
  const { value, onCopy } = useClipboard();

  const _onCreateMatchRoomFormSubmit = () => {};

  return (
    <Container>
      <ScrollView>
        <Box px={8}>
          <Stack space={4} pb={6}>
            <ChooseCard title={"Local"}
                        text={"Escolhe o Local"} />
            <ChooseCard title={"Sem Jogo"}
                        text={"Escolhe um jogo para a partida"} />
          </Stack>
          <Box>
            <Heading pt={4} pb={6}>Detalhes</Heading>
            <Formik
              validationSchema={CreateMatchRoomFormSchema}
              initialValues={{
                match_name: "",
                players_number: "",
                date: "",
                hour: "",
                match_privacy: "",
                match_difficulty: "",
              }}
              onSubmit={async (values, actions) => {
                actions.setSubmitting(true);
                await _onCreateMatchRoomFormSubmit();
                actions.setSubmitting(false);
              }}
            >
              {({ handleSubmit, isSubmitting, values }) => (
                <>
                  <VStack space={6} width="100%">
                    <Field
                      name="match_name"
                      type="text"
                      component={(props) => {
                        const feedbackInvalid =
                          props?.form?.touched && props?.form?.errors?.email
                            ? true
                            : false;

                        return (
                          <FormControl
                            isInvalid={feedbackInvalid}
                            w="100%"
                            maxW="300px"
                          >
                            <FormControl.Label>
                              Nome da partida
                            </FormControl.Label>
                            <Input
                              mt={1}
                              variant={"rounded"}    
                              value={props?.field.value}
                              onChangeText={props?.form.handleChange("email")}
                              onBlur={props?.form.handleBlur("email")}
                              isRequired={true}
                              isInvalid={feedbackInvalid}
                              type="text"
                              placeholder="Escolhe o nome da tua partida"
                            />

                            {feedbackInvalid && (
                              <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}
                              >
                                {"Não escolheste um nome para a partida"}
                              </FormControl.ErrorMessage>
                            )}
                          </FormControl>
                        );
                      }}
                    />

                    <FormControl w="50%" maxW="300px">
                      <FormControl.Label>Número de jogadores</FormControl.Label>
                      <Select
                        variant={"rounded"}
                        selectedValue={values.players_number}
                        minWidth="100"
                        accessibilityLabel="Escolhe o número de jogadores"
                        placeholder="Escolhe o número de jogadores"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => itemValue}
                      >
                        <Select.Item label="2" value="2" />
                        <Select.Item label="3" value="3" />
                        <Select.Item label="4" value="4" />
                        <Select.Item label="5" value="5" />
                        <Select.Item label="6" value="6" />
                      </Select>
                    </FormControl>
                    {/* <Field name="players_number" type="text" component={} /> */}


                  <Stack direction={"row"} mb={2.5} mt={1.5} space={3}>
                    <FormControl width={"50%"}>
                      <FormControl.Label>Data</FormControl.Label>
                      <Select borderRadius={"3xl"}>
                      <DateTimePickerModal
                        isVisible={false}
                        mode="date"
                        onConfirm={() => {}}
                        onCancel={() => {}}
                      />
                      </Select>
                    </FormControl>

                    <FormControl width={"50%"}>
                      <FormControl.Label textAlign={"center"}>Hora</FormControl.Label>
                      <Select borderRadius={"3xl"}>
                        <DateTimePickerModal
                          isVisible={false}
                          mode="time"
                          onConfirm={() => {}}
                          onCancel={() => {}}
                        />
                      </Select>
                    </FormControl>
                  </Stack>

                    {/* <Field name="hour" type="text" component={} /> */}

                    <FormControl>
                      <FormControl.Label>Tipo de Partida</FormControl.Label>
                      <Radio.Group
                        name="tipoPartida"
                        accessibilityLabel="tipo de partida"
                        defaultValue={"publico"}
                        value={value}
                      >
                        <Stack mt={2} direction={{
                          base: "row",
                        }} justifyContent={"center"} space={4} w="100%" maxW="300px"
                        >
                        <Radio size={"sm"} value="publico" my={1} >
                          Publico
                        </Radio>
                        <Radio size={"sm"} value="privado" my={1}>
                          Privado
                        </Radio>
                        </Stack>
                      </Radio.Group>
                    </FormControl>

                    {/* <Field name="match_privacy" type="text" component={} /> */}
                    {/* <Field name="match_difficulty" type="text" component={} /> */}
                  </VStack>

                  <Stack py={6} space={2}>
                    <Text
                      underline
                      color="brand.600"
                      textAlign="center"
                      onPress={() => onCopy("asd")}
                    >
                      Copiar código de convite
                    </Text>
                    <Text
                      underline
                      color="brand.600"
                      textAlign="center"
                      onPress={() => null}
                    >
                      Convidar conexões
                    </Text>
                  </Stack>
                  <Flex direction="row" justifyContent="center" pb={16}>
                    <Btn
                      minWidth={40}
                      width={40}
                      variant="solid"
                      isDisabled={isSubmitting}
                      isLoading={isSubmitting}
                      onPress={() => handleSubmit}
                    >
                      Criar Partida
                    </Btn>
                  </Flex>
                </>
              )}
            </Formik>
          </Box>
        </Box>
      </ScrollView>
    </Container>
  );
};



export default CreateMatchRoomScreen;
