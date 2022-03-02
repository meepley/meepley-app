import React, {useState} from "react";
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
  Stack, Button,
} from "native-base";

import Container from "@components/common/Container";
import ChooseCard from "@components/screens/CreateMatchRoom/ChooseCard";
import Btn from "@components/common/buttons/Btn";
import {StyleSheet} from "react-native";
import {background} from "native-base/lib/typescript/theme/styled-system";

const CreateMatchRoomFormSchema = Yup.object().shape({
  name: Yup.string().required("Necessita de inserir o seu email para realizar o login"),
  
  password: Yup.string().required(
    "Necessita de inserir a sua palavra-passe para realizar o login"
  ),
});

const CreateMatchRoomScreen = () => {

  //Nome Partida  
  let [nomePartida, setNomePartida] = React.useState("");

  
  //Form Pessoas
  let [numPessoas, setNumPessoas] = useState("");
  
  //________________
  //Form Data
  const [dataText, setDataText] = useState("Escolhe o Dia")
  
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
  const [hourText, setHourText] = useState("Escolhe a Hora")
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
  }
  //_____________________
  //Publico/Privado
  const [pubPriv, setPubPriv] = React.useState('publico');

  //---------------------
  const toast = useToast();
  const { value, onCopy } = useClipboard();

  const _onCreateMatchRoomFormSubmit = () => {};

  return (
    <Container>
      <ScrollView>
        <Box px={8}>
          <Stack space={4} pt={1} pb={6}>
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
                    
                          <FormControl
                            isRequired
                            w="100%"
                            maxW="300px"
                          >
                            <FormControl.Label>
                              Nome da partida
                            </FormControl.Label>
                            <Input
                              mt={1}
                              variant={"rounded"}    
                              value={nomePartida}
                              onChangeText={newValue => setNomePartida(newValue)}
                              isRequired={true}
                              type="text"
                              placeholder="Escolhe o nome da tua partida"
                            />
                            
                          </FormControl>
                    
                    

                    <FormControl w="100%" maxW="300px">
                      <FormControl.Label>Número de jogadores</FormControl.Label>
                      <Select
                        variant={"rounded"}
                        selectedValue={numPessoas}
                        w="50%"
                        accessibilityLabel="Escolhe o número de jogadores"
                        placeholder="Escolhe o número de jogadores"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={itemValue => setNumPessoas(itemValue)}
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
                      <FormControl.Label textAlign={"center"}>Data</FormControl.Label>
                      <Button variant={"ghost"} borderWidth={1} borderColor={"gray.200"} height={10} borderRadius={"3xl"} onPress={showDatePicker}>
                        <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                      />
                       <Text>{dataText}</Text> 
                      </Button>
                    </FormControl>

                    <FormControl width={"50%"}>
                      <FormControl.Label textAlign={"center"}>Hora</FormControl.Label>
                      <Button variant={"ghost"} borderWidth={1} borderColor={"gray.200"} height={10} borderRadius={"3xl"} onPress={showHourPicker}>
                      <DateTimePickerModal
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
                      <FormControl.Label>Tipo de Partida</FormControl.Label>
                      <Radio.Group
                        name="tipoPartida"
                        accessibilityLabel="tipo de partida"
                        defaultValue={"publico"}
                        onChange={newValue => setPubPriv(newValue)}
                        value={pubPriv}
                      >
                        <Stack mt={2} direction={{
                          base: "row",
                        }} justifyContent={"center"} space={4} w="100%" maxW="300px"
                        >
                        <Radio size={"sm"} colorScheme={"violet"} value="publico" my={1} >
                          Publico
                        </Radio>
                        <Radio size={"sm"} colorScheme={"violet"} value="privado" my={1}>
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

