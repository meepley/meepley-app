import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import {
  Box,
  Flex,
  Heading,
  ScrollView,
  VStack,
  FormControl,
  Input,
  Select,
  Radio,
  Stack,
  HStack,
  Pressable,
  Icon,
  useToast,
} from "native-base";

import ChooseCard from "@components/screens/CreateMatchRoom/ChooseCard";
import Btn from "@components/common/buttons/Btn";
import { Alert, BackHandler, useWindowDimensions } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import meepleyAPI from "@services/api/meepley";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@ts/types/navigation/RootStack";

const CreateMatchRoomFormSchema = Yup.object().shape({
  game: Yup.string().required("Precisas de selecionar um ou mais jogos"),
  place: Yup.string().required("Precisas de selecionar um local"),
  match_name: Yup.string()
    .required("Tens de escrever um nome para a partida")
    .min(4)
    .max(70),
  players_number: Yup.string().required("Precisas de uma data"),
  date: Yup.string().required("Precisas de uma data"),
  hour: Yup.string().required("Tens de escolher uma hora"),
  match_privacy: Yup.string().required(
    "É necessário especificar o tipo da partida"
  ),
});

const CreateMatchRoomScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, "CreateMatch">
> = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const toast = useToast();
  // const [hourText, setHourText] = useState("");
  const [didCreateRoom, setDidCreateRoom] = useState(false);
  // const [pubPriv, setPubPriv] = React.useState("publico");
  // const [numPessoas, setNumPessoas] = useState("");
  // const [dataText, setDataText] = useState("");

  const navig = useNavigation();
  const [isHourPickerVisible, setHourPickerVisibility] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const _onCreateMatchRoomFormSubmit = async ({
    match_name,
    match_privacy,
    players_number,
    date,
    hour,
  }: {
    match_name: string;
    match_privacy: string;
    players_number: string;
    date: string;
    hour: string;
  }) => {
    console.log("adeus");

    await meepleyAPI.createMatchRoom(
      match_name,
      match_privacy,
      parseInt(players_number),
      date,
      hour
    );

    console.log("olá");

    toast.show({
      title: "Partida criada com sucesso!",
      status: "success",
      description: "Bora lá aproveitar e jogar uns boardgames!",
    });

    navigation.navigate("Dashboard");
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor="#FAFAFA" />
      <ScrollView>
        <Formik
          initialValues={{
            place: "",
            game: "",
            match_name: "",
            players_number: "",
            date: "",
            hour: "",
            match_privacy: "publico",
          }}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            setDidCreateRoom(true);
            await _onCreateMatchRoomFormSubmit(values);
          }}
        >
          {({
            handleSubmit,
            isSubmitting,
            values,
            errors,
            setFieldValue,
            handleBlur,
          }) => {
            return (
              <Box p={10} minHeight={height} backgroundColor="#FAFAFA">
                <Stack space={4} pt={1} pb={6}>
                  {/*  <Field
                    name="password"
                    label="Password"
                    type="password"
                    component={PasswordInput}
                    placeholder="insere a tua password"
                  /> */}

                  <ChooseCard
                    onPressCard ={() => navig.navigate("BoardgamesList", {
                      previousRoute: 'createMatch',
                      })}
                    asset={"map-marker"}
                    title="Local"
                    text="Escolhe o local"
                  />

                  <ChooseCard
                    onPressCard={() => {}}
                    asset={"dice-d20"}
                    title={"Jogo"}
                    text={"Escolhe um jogo para a partida"}
                  />
                </Stack>
                <Box>
                  <Heading pt={4} pb={6}>
                    Detalhes
                  </Heading>

                  <VStack space={6} width="100%">
                    <FormControl isRequired w="100%">
                      <FormControl.Label fontWeight="bold">
                        <Heading fontSize={14}>Nome da partida</Heading>
                      </FormControl.Label>
                      <Input
                        px={4}
                        type="text"
                        variant="rounded"
                        backgroundColor="white"
                        value={values.match_name}
                        isDisabled={isSubmitting}
                        onBlur={() => handleBlur("match_name")}
                        placeholder="Nome da tua partida"
                        onChangeText={(val) => setFieldValue("match_name", val)}
                      />
                    </FormControl>

                    <FormControl w="100%">
                      <FormControl.Label>
                        <Heading fontSize={14}>Nrº máximo de jogadores</Heading>
                      </FormControl.Label>
                      <Select
                        px={4}
                        mt={1}
                        pr={10}
                        variant="rounded"
                        backgroundColor="white"
                        isDisabled={isSubmitting}
                        selectedValue={values.players_number}
                        placeholder="Número de jogadores"
                        accessibilityLabel="O número de jogadores"
                        onValueChange={(itemValue) =>
                          setFieldValue("players_number", itemValue)
                        }
                        _selectedItem={{
                          color: "red.100",
                          bg: "brand.500",
                          startIcon: (
                            <Icon mr={2} size={4} name="check" as={Feather} />
                          ),
                        }}
                        dropdownIcon={
                          <Icon
                            mr={4}
                            size={5}
                            as={Ionicons}
                            color="gray.300"
                            name="chevron-down-outline"
                          />
                        }
                      >
                        {Array.from({ length: 7 }, (_, i) => i + 2).map(
                          (item) => (
                            <Select.Item
                              key={item}
                              label={`${item}`}
                              value={`${item}`}
                            />
                          )
                        )}
                      </Select>
                    </FormControl>

                    {/* <Field name="players_number" type="text" component={} /> */}

                    <Stack direction={"row"} mb={2.5} mt={1.5} space={3}>
                      <FormControl width={"50%"}>
                        <FormControl.Label textAlign={"center"}>
                          <Heading fontSize={14}>Data</Heading>
                        </FormControl.Label>

                        <Pressable
                          onPress={() =>
                            !isSubmitting
                              ? setDatePickerVisibility(!isDatePickerVisible)
                              : null
                          }
                        >
                          <Input
                            pr={4}
                            variant="rounded"
                            value={values.date}
                            backgroundColor="white"
                            isRequired={true}
                            type="text"
                            isReadOnly={true}
                            placeholder="Dia da partida"
                            InputLeftElement={
                              <Icon
                                ml={2}
                                size={4}
                                name="calendar"
                                color="muted.300"
                                as={MaterialCommunityIcons}
                              />
                            }
                          />
                        </Pressable>

                        <DateTimePickerModal
                          locale="pt_PT"
                          isVisible={isDatePickerVisible}
                          mode="date"
                          onConfirm={(date) => {
                            const parseDate = date.toLocaleDateString("pt-PT");
                            setFieldValue("date", parseDate);
                            setDatePickerVisibility(false);
                          }}
                          onCancel={() =>
                            setDatePickerVisibility(!isDatePickerVisible)
                          }
                        />
                      </FormControl>

                      <FormControl width={"50%"}>
                        <FormControl.Label textAlign={"center"}>
                          <Heading fontSize={14}>Hora</Heading>
                        </FormControl.Label>

                        <Pressable
                          onPress={() =>
                            !isSubmitting
                              ? setHourPickerVisibility(!isHourPickerVisible)
                              : null
                          }
                        >
                          <Input
                            pr={4}
                            type="text"
                            isReadOnly={true}
                            isRequired={true}
                            variant="rounded"
                            value={values.hour}
                            backgroundColor="white"
                            placeholder="Hora da partida"
                            InputLeftElement={
                              <Icon
                                ml={2}
                                size={4}
                                color="muted.300"
                                name="clock-outline"
                                as={MaterialCommunityIcons}
                              />
                            }
                          />
                        </Pressable>

                        <DateTimePickerModal
                          mode="time"
                          locale="pt_PT"
                          onConfirm={(hour) => {
                            const parseHour = `${hour.getHours()} : ${hour.getMinutes()}`;
                            setFieldValue("hour", parseHour);
                            setHourPickerVisibility(false);
                          }}
                          isVisible={isHourPickerVisible}
                          onCancel={() =>
                            setHourPickerVisibility(!isHourPickerVisible)
                          }
                        />
                      </FormControl>
                    </Stack>

                    {/* <Field name="hour" type="text" component={} /> */}

                    <FormControl>
                      <FormControl.Label>
                        <Heading fontSize={14}>Tipo de Partida</Heading>
                      </FormControl.Label>
                      <Radio.Group
                        name="match_privacy"
                        accessibilityLabel="tipo de partida"
                        defaultValue="publico"
                        onChange={(newValue) =>
                          setFieldValue("match_privacy", newValue)
                        }
                        value={values.match_privacy}
                      >
                        <HStack mt={2} space={4} w="100%">
                          <Radio
                            size="sm"
                            colorScheme="brand"
                            value="publico"
                            isDisabled={isSubmitting}
                          >
                            Pública
                          </Radio>
                          <Radio
                            size="sm"
                            colorScheme="brand"
                            value="privado"
                            isDisabled={isSubmitting}
                          >
                            Privada
                          </Radio>
                        </HStack>
                      </Radio.Group>
                    </FormControl>
                  </VStack>

                  <Flex pt={10} direction="row" justifyContent="center">
                    <Btn
                      minWidth={40}
                      width={40}
                      variant="solid"
                      isLoading={isSubmitting}
                      onPress={handleSubmit as (values: any) => void}
                    >
                      Criar Partida
                    </Btn>
                  </Flex>
                </Box>
              </Box>
            );
          }}
        </Formik>
      </ScrollView>
    </>
  );
};

export default CreateMatchRoomScreen;
