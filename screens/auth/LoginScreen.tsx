import React from "react";
import { View, Text, Button } from "react-native";
import Container from "@components/common/Container";
import { useNavigation } from "@react-navigation/native";
import { Box, FormControl, Heading, Icon, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Heading>Login</Heading>
        <FormControl pb={10} isInvalid w="75%" maxW="300px">
          <FormControl.Label>Email</FormControl.Label>
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            variant="underlined"
            placeholder="insere o teu email"
          />
        </FormControl>
        <FormControl isInvalid w="75%" maxW="300px">
          <FormControl.Label>Password</FormControl.Label>
          <Input variant="underlined" placeholder="insere a tua password" />
        </FormControl>
        <Box pt={10}>
          <Button
            title="Entrar"
            onPress={() => navigation.navigate("Dashboard")}
          />
        </Box>
        <Button
          title="Utilidades"
          onPress={() => navigation.navigate("Utilities")}
        />
        <Button
          title="Jogos"
          onPress={() => navigation.navigate("BoardgamesList")}
        />
      </View>
    </Container>
  );
};

export default LoginScreen;
