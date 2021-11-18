import React from "react";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, Image, Text } from "react-native";
import { Center, Box } from "native-base";
// import loginbg from "../assets/images/loginbg.png";
import applogo from "../assets/images/foureyes.png";
// import { useFonts } from "expo-font";

export default function Splash({ navigation }) {
  

  const artificialDelay = () => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  };
  if (!loaded) {
    return null;
  }
  return (
    <React.Fragment>

      <Center flex={1} px="3">
        <Box bg="#e3d3a6" borderRadius="30">
          <Image
            source={applogo}
            style={{ width: 200, height: 200, borderColor: "black" }}
          />
        </Box>

      </Center>
      <StatusBar backgroundColor="#df8d8e" />
      {artificialDelay()}
    </React.Fragment>
  );
}
