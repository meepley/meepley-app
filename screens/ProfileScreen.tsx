import { StyleSheet } from "react-native";
import React from "react";
import {AntDesign, FontAwesome5} from '@expo/vector-icons';
import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import {
  View,
  Center,
  VStack,
  Avatar,
  Text,
  Button, ScrollView, Icon,
} from "native-base";
import {Screen} from "react-native-screens";

const ProfileScreen = () => {
  return (
    <Container>
      <ScrollView>
      <View>
        <Center>
        <Avatar bg="pink.600" alignSelf="center" size="xl" source={{
        uri: "https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2876&q=80"
      }}>
        </Avatar>
          <Text style={styles.header}>
            Marta Silva
          </Text>
          <Text style={styles.text}>
            <AntDesign name="Trophy" size={16} color="gold" />
            Mestre no Dixit
          </Text>
          </Center>
      </View>
      <View style={styles.edit}>
        <Btn minWidth={"1/2"} variant="solid">
          Editar Perfil
        </Btn>
      </View>
      
      <View style={styles.globalInfo}>

        {/*Partidas*/}
        <View>
          <Text paddingLeft={2} bold fontSize={"2xl"}>
            65
          </Text>
          <Text color={"rgba(187,186,186,0.97)"} fontSize={"xs"}>
            Partidas
          </Text>
        </View>
        
        {/*Barra Vertical - Separador*/}
        <View>
          <View style={styles.verticalLine}></View>
        </View>
        
        {/*Avaliações*/}
        <View>
          <Text paddingLeft={3} bold fontSize={"2xl"}>
            5/5
          </Text>
          <Text color={"rgba(187,186,186,0.97)"} fontSize={"xs"}>
            Avaliações
          </Text>
        </View>

        {/*Barra Vertical - Separador*/}
        <View>
          <View style={styles.verticalLine}></View>
        </View>

        {/*Seguidores*/}
        <View>
          <Text paddingLeft={4} bold fontSize={"2xl"}>
            137
          </Text>
          <Text color={"rgba(187,186,186,0.97)"} fontSize={"xs"}>
            Seguidores
          </Text>
        </View>

      </View>
        
      {/*Proezas*/}
      <View>
          <Text paddingLeft={8} bold fontSize={"2xl"}>
            PROEZAS
          </Text>
        
 
        <Center paddingTop={5}>
          <Btn style={styles.badges} variant={"ghost"} minWidth={"3/4"} borderRadius={"3xl"} borderColor={"gray.200"} borderWidth={0.5}>
            <View style={styles.content}>
            <Text bold> Descobridor de Aveiro </Text>
            <Text fontWeight={"light"} fontSize={"xs"}>Jogou em 5 espaços diferentes</Text>
            </View>
          </Btn>
          <Btn marginTop={5} leftIcon={<Icon as={FontAwesome5} size={24} name={"medal"} color={"red"}/>} variant={"ghost"} style={styles.badges} minWidth={"3/4"} borderRadius={"3xl"} borderColor={"gray.200"} borderWidth={0.5}>
            <View style={styles.content}>
              <Text bold> Mestre em Xadrez </Text>
              <Text fontWeight={"light"} fontSize={"xs"}>Ganhou mais de 50 partidas</Text>
            </View>
          </Btn>
          <Btn variant={"ghost"} marginTop={5} style={styles.badges} minWidth={"3/4"} borderRadius={"3xl"} borderColor={"gray.200"} borderWidth={0.5}>
            <View style={styles.content}>
              <Text bold> Exemplo da Comunidade </Text>
              <Text fontWeight={"light"} fontSize={"xs"}>Recebeu 25 vezes 5* na avaliação</Text>
            </View>
          </Btn>
        </Center>
      </View>
      </ScrollView>
    </Container>
  );
};


const styles = StyleSheet.create({
  text: {
    color: "#FDC500",
    fontWeight: "bold",
  },
  header: {
    paddingTop: 30,
    fontWeight: "bold",
    fontSize: 25,
  },
  edit: {
    paddingTop: 30,
    color: "#FFFFFF",
    alignItems: "center",
  },
  globalInfo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 60,
    paddingLeft: 40,
    paddingRight: 30,
    alignContent: "center",
    height: "22%",
  },
  verticalLine: {
    marginTop: 12,
    width: 1,
    backgroundColor: 'rgba(122,122,122,0.35)',
    height: "30%",
  },
  badges: {
    shadowOffset: {width: 8, height: 8},
    shadowRadius: 100,
    shadowColor: "#282828",
    shadowOpacity: 1,
    backgroundColor: "white",
    elevation: 5,
  },
  content: {
    paddingVertical: 10,
  }
});


export default ProfileScreen;
