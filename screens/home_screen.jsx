import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, Image, Text } from "react-native";
import { Button, Center, Box, VStack } from "native-base";
import applogo from "../assets/images/foureyes.png";

export default function Home({ navigation }) {
  return (
    <React.Fragment>

      <Center flex={1} px="3">
        <Box bg="#df8d8eee" borderRadius="30">
          <Image
            source={applogo}
            style={{ width: 200, height: 200, borderColor: "black" }}
          />
        </Box>
        <Text
          style={{
            fontSize: 40,
          }}
        >
          KROMCASE
        </Text>
      </Center>
      <VStack alignItems="center">
        <Button
          backgro_text={{ fontFamily: "ZenKakuGothicNewRegular" }}undColor={styles.button.logIn.backgroundColor}
          style={styles.button}
          _text={{
            color: "black",
            fontSize: 25,
          }}
          onPress={() => {
            navigation.navigate("LogIn");
          }}
        >
          Log In
        </Button>
        <Button
          colorScheme={styles.button.signUp.backgroundColor}
          style={styles.button}
          _text={{ fontSize: 25, }}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          Sign Up
        </Button>
      </VStack>
      <StatusBar backgroundColor="#df8d8e" />
    </React.Fragment>
  );
}

const styles = {
  button: {
    width: 300,
    height: 50,
    margin: 7,
    borderRadius: 20,
    logIn: {
      backgroundColor: "white",
    },
    signUp: {
      backgroundColor: "primary",
    },
  },
};
