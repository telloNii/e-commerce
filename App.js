import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import products, { smartphones, cart } from "./inventory";
import Splash from "./screens/splash_screen";
import Home from "./screens/home_screen";
import LogIn from "./screens/login_screen";
import SignUp from "./screens/signup_screen";
import ProductsList from "./screens/product_list_screen";
import ProductDetails from "./screens/product_details_screen";
// import Account from "./screens/a";
import Cart from "./screens/cart_screen";
// import Settings from "./screens/";
// import Checkout from "./screens/Checkout";
// import End from "./screens/End";
import AppContext from "./AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  let myCart = cart;
  let tempcart;

  const addCart = (item) => {
    tempcart = myCart.filter((citem) => {
      if (citem.phone !== item.phone && citem.id !== item.id) {
        return citem;
      }
    });

    if (tempcart.length < myCart.length) {
      myCart = tempcart;
    } else if (tempcart.length == myCart.length) {
      myCart.push(item);
    }
    userSettings.cart = myCart;
    setUserSettings({
      allProducts: products,
      smartphones: smartphones,
      cart: myCart,
      user: {},
      addCart,
    });
    AsyncStorage.setItem("cart", JSON.stringify(cart), (error, result) => {
      // console.log(result);
    });
  };

  const [userSettings, setUserSettings] = useState({
    allProducts: products,
    smartphones: smartphones,
    cart: myCart,
    user: {},
    addCart,
  });

  AsyncStorage.getItem("cart", (error, result) => {
    savedCart = JSON.parse(result);
    userSettings.cart = savedCart;
  });

  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
            {/* <Stack.Screen name="ProductsList" component={ProductsList} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="End" component={End} /> */}
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
