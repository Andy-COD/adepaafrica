import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import TextDivider from "../../components/Divider with Text/TextDivider";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor="#FF725e" style="dark" />
      <Pressable
        style={{
          width: "100%",
          height: "100%",
        }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View
          style={{
            paddingTop: insets.top,
            flex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 16,
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowRadius: 30,
            shadowOpacity: 1,
            paddingHorizontal: 20,
            elevation: 5, // Use elevation for shadows on Android
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 100,
            }}
          >
            <Text
              style={{
                color: "#F46036",
                fontSize: 30,
                fontWeight: "600",
              }}
            >
              Login
            </Text>
          </View>
          <View
            style={{
              paddingTop: 80,
              gap: 6,
            }}
          >
            <Text>Enter Username / email</Text>
            <TextInput
              placeholder="Username / email"
              style={{
                padding: 15,
                borderWidth: 0.5,
                borderColor: "#ccc",
                borderRadius: 8,
                backgroundColor: "#fff",
              }}
            />
          </View>
          <View
            style={{
              paddingVertical: 40,
              gap: 6,
            }}
          >
            <Text>Enter password</Text>
            <TextInput
              placeholder="Username / email"
              secureTextEntry={true}
              style={{
                padding: 15,
                borderWidth: 0.5,
                borderColor: "#ccc",
                borderRadius: 8,
                backgroundColor: "#fff",
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              height: 45,
              backgroundColor: "#F46036",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 16,
            }}
            onPress={() => {
              //@ts-ignore
              navigation.replace("Dashboard");
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "500",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TextDivider text="Or Continue with" />
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "60%",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Pressable>
                <Image
                  source={require("../../assets/Icons/search.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={require("../../assets/Icons/instagram.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </Pressable>
              <Pressable>
                <Image
                  source={require("../../assets/Icons/facebook.png")}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              paddingTop: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Not a member yet?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                //@ts-ignore
                navigation.replace("Signup");
              }}
            >
              <Text
                style={{
                  color: "#00b4d8",
                  textAlign: "center",
                }}
              >
                Register now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default Login;
