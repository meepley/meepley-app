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
} from "native-base";

import Container from "@components/common/Container";
import ChooseCard from "@components/screens/CreateMatchRoom/ChooseCard";
import Btn from "@components/common/buttons/Btn";

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
        <Box>
          <ChooseCard />
          <ChooseCard />
        </Box>
        <Box>
          <Heading>Detalhes</Heading>
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
                          <FormControl.Label>Email</FormControl.Label>
                          <Input
                            value={props?.field.value}
                            onChangeText={props?.form.handleChange("email")}
                            onBlur={props?.form.handleBlur("email")}
                            isRequired={true}
                            isInvalid={feedbackInvalid}
                            type="email"
                            variant="underlined"
                            placeholder="insere o teu email"
                          />

                          {feedbackInvalid && (
                            <FormControl.ErrorMessage
                              leftIcon={<WarningOutlineIcon size="xs" />}
                            >
                              {props?.form?.errors?.password}
                            </FormControl.ErrorMessage>
                          )}
                        </FormControl>
                      );
                    }}
                  />

                  <FormControl w="100%" maxW="300px">
                    <Select
                      selectedValue={values.players_number}
                      minWidth="200"
                      accessibilityLabel="Choose Service"
                      placeholder="Choose Service"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={1}
                      onValueChange={() => null}
                    >
                      <Select.Item label="UX Research" value="ux" />
                      <Select.Item label="Web Development" value="web" />
                      <Select.Item
                        label="Cross Platform Development"
                        value="cross"
                      />
                      <Select.Item label="UI Designing" value="ui" />
                      <Select.Item
                        label="Backend Development"
                        value="backend"
                      />
                    </Select>
                  </FormControl>
                  {/* <Field name="players_number" type="text" component={} /> */}

                  <DateTimePickerModal
                    isVisible={false}
                    mode="date"
                    onConfirm={() => {}}
                    onCancel={() => {}}
                  />

                  <DateTimePickerModal
                    isVisible={false}
                    mode="time"
                    onConfirm={() => {}}
                    onCancel={() => {}}
                  />

                  {/* <Field name="hour" type="text" component={} /> */}

                  <FormControl>
                    <Radio.Group
                      name="myRadioGroup"
                      accessibilityLabel="favorite number"
                      value={value}
                    >
                      <Radio value="one" my={1} bg="blue.200">
                        One
                      </Radio>
                      <Radio value="two" my={1} bg="red.200">
                        Two
                      </Radio>
                    </Radio.Group>
                  </FormControl>

                  {/* <Field name="match_privacy" type="text" component={} /> */}
                  {/* <Field name="match_difficulty" type="text" component={} /> */}
                </VStack>

                <Text onPress={() => onCopy("asd")}>
                  Copiar código de convite
                </Text>
                <Text onPress={() => null}>Convidar conexões</Text>

                <Flex direction="row" justifyContent="center" pb={6}>
                  <Btn
                    minWidth={40}
                    width={40}
                    variant="solid"
                    isDisabled={isSubmitting}
                    isLoading={isSubmitting}
                    onPress={() => handleSubmit}
                  >
                    Entrar
                  </Btn>
                </Flex>
              </>
            )}
          </Formik>
        </Box>
      </ScrollView>
    </Container>
  );
};

export default CreateMatchRoomScreen;
