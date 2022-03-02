import { StyleSheet, } from "react-native";
import React from "react";
import {AntDesign, FontAwesome5, Ionicons} from '@expo/vector-icons';
import Container from "@components/common/Container";
import Btn from "@components/common/buttons/Btn";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Center,
  HStack,
  Avatar,
  Text,
  Button, ScrollView, Icon,
} from "native-base";

import Proezas from "@components/common/buttons/Proezas";
import {Screen} from "react-native-screens";

const ProfileScreen = () => {
  
  const navigation = useNavigation();
  
  return (
    <Container>
      <ScrollView>
      <View>
        <Center>
        <Avatar bg="pink.600" alignSelf="center" size="xl" source={require("../assets/images/personas/persona4.png")}>
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
        <View marginRight={3}>
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

        {/*Barra Vertical - Separador*/}
        <View>
          <View style={styles.verticalLine}></View>
        </View>

        {/*Seguidores*/}
        <View marginLeft={3}>
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
          <Text mt={10} paddingLeft={8} bold fontSize={"2xl"}>
            Proezas
          </Text>
        
        <Center paddingTop={5}>
          <Proezas titulo={"Descobridor de Aveiro"} texto={"Jogou em 5 espaços diferentes"} cor={"green"} medal={"map-marker"} />

          <Proezas titulo={"Mestre em Xadrez"} texto={"Ganhou mais de 50 partidas"} cor={"yellow"} medal={"medal-outline"} />
        </Center>
      </View>

      <View>
          <Text mt={6} paddingLeft={8} bold fontSize={"2xl"}>
            Jogos Favoritos
          </Text>
      </View>
        
      <View>
          <Text mt={6} paddingLeft={8} bold fontSize={"xl"}>
            Quem segues
          </Text>
        <View style={styles.follow}>
          <HStack space={4}>
            <Avatar onTouchMove={() => navigation.navigate("Profile") } borderWidth={2} size="lg" source={
            require("../assets/images/personas/persona3.png")
            }>
            </Avatar>
          </HStack>
        </View>
      </View>
      <View>
          <Text mt={6} paddingLeft={8} bold fontSize={"xl"}>
            Quem te Segue
          </Text>
        <Center>
          <View style={styles.follow}>
            <HStack space={4}>
              <Avatar onTouchEnd={() => navigation.navigate("Profile") } borderWidth={2} size="lg" source={
                require("../assets/images/personas/persona1.png")
              }>
              </Avatar>
              <Avatar onTouchEnd={() => navigation.navigate("Profile") } borderWidth={2} size="lg" source={
                require("../assets/images/personas/persona2.png")
              }>
              </Avatar>
            </HStack>  
          </View>
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
    justifyContent: "center",
    paddingTop: 60,
    paddingLeft: 40,
    paddingRight: 30,
    alignContent: "center",
  },
  verticalLine: {
    marginTop: 12,
    width: 1,
    backgroundColor: 'rgba(122,122,122,0.35)',
  },
  follow: {
    marginTop: 8,
    alignItems: "center",
  }
});


export default ProfileScreen;
