import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { StatusBar } from "expo-status-bar";

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
  Button,
  HStack,
} from "native-base";

import ChooseCard from "@components/screens/CreateMatchRoom/ChooseCard";
import Btn from "@components/common/buttons/Btn";
import { StyleSheet, useWindowDimensions } from "react-native";

const CreateMatchRoomFormSchema = Yup.object().shape({
  name: Yup.string().required(
    "Necessita de inserir o seu email para realizar o login"
  ),

  password: Yup.string().required(
    "Necessita de inserir a sua palavra-passe para realizar o login"
  ),
});

const CreateMatchRoomScreen = () => {
  const { height } = useWindowDimensions();

  //Nome Partida
  let [nomePartida, setNomePartida] = React.useState("");

  //Form Pessoas
  let [numPessoas, setNumPessoas] = useState("");

  //________________
  //Form Data
  const [dataText, setDataText] = useState("Dia");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    let data = date.toString();
    setDataText(data);
    hideDatePicker();
  };

  //_____________________
  // Form Hora
  const [hourText, setHourText] = useState("Hora");
  const [isHourPickerVisible, setHourPickerVisibility] = useState(false);

  const showHourPicker = () => {
    setHourPickerVisibility(true);
  };

  const hideHourPicker = () => {
    setHourPickerVisibility(false);
  };

  const hourConfirm = (hour) => {
    let hora = hour.getHours() + ":" + hour.getMinutes();
    setHourText(hora);
    hideHourPicker();
  };
  //_____________________
  //Publico/Privado
  const [pubPriv, setPubPriv] = React.useState("publico");

  //---------------------
  const toast = useToast();
  const { value, onCopy } = useClipboard();

  const _onCreateMatchRoomFormSubmit = () => {};

  //Change Local
  let [didChoosePlace, setDidChoosePlace] = useState(false);
  let [didChooseGame, setDidChooseGame] = useState(false);

  return (
    <>
      <StatusBar backgroundColor="#FAFAFA" />
      <ScrollView>
        <Box p={10} minHeight={height} backgroundColor="#FAFAFA">
          <Stack space={4} pt={1} pb={6}>
            <ChooseCard
              onPressCard={() => setDidChoosePlace(!didChoosePlace)}
              didChoose={didChoosePlace}
              asset={
                !didChoosePlace
                  ? "map-marker-outline"
                  : "https://www.eurodicas.com.br/wp-content/uploads/2021/07/universidade-de-aveiro-1200x675.jpg"
              }
              title={!didChoosePlace ? "Local" : "Universidade de Aveiro"}
              text={!didChoosePlace ? "Escolhe o Local" : null}
            />
            <ChooseCard
              onPressCard={() => setDidChooseGame(!didChooseGame)}
              didChoose={didChooseGame}
              asset={
                !didChooseGame
                  ? "dice-d20"
                  : "https://www.continente.pt/on/demandware.static/-/Sites-col-master-catalog/default/dwd523a974/images/col/745/7454064-frente.jpg"
              }
              title={!didChooseGame ? "Jogo" : "Dixit"}
              text={!didChooseGame ? "Escolhe um jogo para a partida" : null}
            />
          </Stack>
          <Box>
            <Heading pt={4} pb={6}>
              Detalhes
            </Heading>

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
                    <FormControl isRequired w="100%">
                      <FormControl.Label fontWeight="bold">
                        <Heading fontSize={14}>Nome da partida</Heading>
                      </FormControl.Label>
                      <Input
                        px={4}
                        variant={"rounded"}
                        value={nomePartida}
                        backgroundColor="white"
                        onChangeText={(newValue) => setNomePartida(newValue)}
                        isRequired={true}
                        type="text"
                        placeholder="Nome da tua partida"
                      />
                    </FormControl>

                    <FormControl w="100%">
                      <FormControl.Label>
                        <Heading fontSize={14}>Número de jogadores</Heading>
                      </FormControl.Label>
                      <Select
                        backgroundColor="white"
                        variant={"rounded"}
                        selectedValue={numPessoas}
                        px={4}
                        accessibilityLabel="O número de jogadores"
                        placeholder="Número de jogadores"
                        _selectedItem={{
                          bg: "brand.500",
                          startIcon: <CheckIcon mr={2} size="4" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setNumPessoas(itemValue)}
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
                        <FormControl.Label textAlign={"center"}>
                          <Heading fontSize={14}>Data</Heading>
                        </FormControl.Label>
                        <Button
                          px={4}
                          backgroundColor="white"
                          variant={"ghost"}
                          borderWidth={1}
                          borderColor={"gray.200"}
                          height={10}
                          borderRadius={"3xl"}
                          colorScheme="brand"
                          onPress={showDatePicker}
                        >
                          <DateTimePickerModal
                            locale="pt_PT"
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                          />
                          <Text>{dataText}</Text>
                        </Button>
                      </FormControl>

                      <FormControl width={"50%"}>
                        <FormControl.Label textAlign={"center"}>
                          <Heading fontSize={14}>Hora</Heading>
                        </FormControl.Label>
                        <Button
                          px={4}
                          backgroundColor="white"
                          variant={"ghost"}
                          borderWidth={1}
                          borderColor={"gray.200"}
                          height={10}
                          borderRadius={"3xl"}
                          colorScheme="brand"
                          onPress={showHourPicker}
                        >
                          <DateTimePickerModal
                            locale="pt_PT"
                            isVisible={isHourPickerVisible}
                            mode="time"
                            onConfirm={hourConfirm}
                            onCancel={hideHourPicker}
                          />
                          <Text>{hourText}</Text>
                        </Button>
                      </FormControl>
                    </Stack>

                    {/* <Field name="hour" type="text" component={} /> */}

                    <FormControl>
                      <FormControl.Label>
                        <Heading fontSize={14}>Tipo de Partida</Heading>
                      </FormControl.Label>
                      <Radio.Group
                        name="tipoPartida"
                        accessibilityLabel="tipo de partida"
                        defaultValue={"publico"}
                        onChange={(newValue) => setPubPriv(newValue)}
                        value={pubPriv}
                      >
                        <HStack mt={2} space={4} w="100%">
                          <Radio size="sm" colorScheme="brand" value="publico">
                            Pública
                          </Radio>
                          <Radio size="sm" colorScheme="brand" value="privado">
                            Privada
                          </Radio>
                        </HStack>
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
                  <Flex direction="row" justifyContent="center">
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
    </>
  );
};

export default CreateMatchRoomScreen;
