import React from "react";
import {TouchableOpacity, useWindowDimensions} from "react-native";

import {Box, Heading, ScrollView, Text, View} from "native-base";

const SettingsScreen = () => {
  const { height } = useWindowDimensions();

  const definicoesList = [
    {title: "Dados Pessoais", subTitle: "Altera os teus dados", onPress: () => {}},
    {title: "Notificações", subTitle: null, onPress: () => {}},
    {title: "Tema", subTitle: "Altera o tema da tua aplicação", onPress: () => {}},
    {title: "Ajuda", subTitle: "Comunica um Problema", onPress: () => {}},
    {title: "Sobre Nós", subTitle: "Todos os dados da equipa Meepley", onPress: () => {}},
  ]

  return (
    <ScrollView>
      {/* Place Image Section + Transparent Header */}
      <Box bgColor="white" minHeight={height}>

        {definicoesList.map(({title, subTitle, onPress}) => <TouchableOpacity key={title}>
          <View style={{paddingHorizontal: 20, paddingBottom: 20, paddingTop: 20}}>
            <Text fontSize={"md"} color={"brand.600"} bold>{title}</Text>
            {subTitle && <Text fontSize={"sm"}>{subTitle}</Text>}
          </View>

          <View style={{height: 0.5, backgroundColor: "lightgray"}}/>
        </TouchableOpacity>)}

      </Box>
    </ScrollView>
  );
};

export default SettingsScreen;