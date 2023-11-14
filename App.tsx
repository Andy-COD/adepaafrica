import { StatusBar } from "expo-status-bar";
import React from 'react';
import { View } from "react-native";
import { screens } from "./data/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from 'react-redux';
import { store } from "./redux/Store";

export default function App() {
  const Stack = createStackNavigator();
  return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Onboarding"
            screenOptions={{
              headerShown: true,
            }}
          >
            {screens.map((screen, index) => (
              <Stack.Screen
                key={index}
                options={{
                  headerShown: false,
                  gestureEnabled: false,
                }}
                name={screen.name}
                component={screen.component}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      </View>
  );
}
