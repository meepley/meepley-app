import {Icon, Text, View} from "native-base";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import Btn from "@components/common/buttons/Btn";
import React from "react";
import {StyleSheet} from "react-native";


const Proezas = ({titulo, texto, cor, medal}) => {
  
return (
<Btn style={styles.badges} marginBottom={6} variant={"ghost"} minWidth={"3/4"} borderRadius={"3xl"} borderColor={"gray.100"} borderWidth={0.1}>
<View style={styles.content} flexDirection={"row"}>
<View flex={1}>
  <Icon as={MaterialCommunityIcons} borderRadius={"2xl"} borderWidth={2} name={medal} size="9" color={`${cor}.400`} />
</View>  
<View alignItems={"center"}>
  <Text bold> {titulo} </Text>
  <Text fontWeight={"light"} fontSize={"xs"}>{texto}</Text>
</View>
</View>
</Btn>
)}

export default Proezas;

const styles = StyleSheet.create({
  badges: {
    shadowColor: "rgba(40,40,40,0.78)",
    backgroundColor: "white",
    elevation: 5,
    height: 90,
  },
  content: {
    alignItems: "center",
  }
  ,
})