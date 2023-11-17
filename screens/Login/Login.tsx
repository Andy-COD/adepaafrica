import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import TextDivider from "../../components/Divider with Text/TextDivider";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../utils/theme";

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
            paddingHorizontal: 20,
          }}
        >
          <View style={{ paddingTop: 30 }}>
            <Text style={{ fontSize: 35, paddingBottom: 10 }}>
              Welcome {"\n"}back!
            </Text>
            <View
              style={{
                width: 50,
                height: 5,
                backgroundColor: COLORS.primary,
              }}
            ></View>
          </View>
          <KeyboardAvoidingView
            style={{
              paddingTop: 50,
              paddingBottom: 10,
              gap: 6,
            }}
          >
            <Text>Email / Username</Text>
            <TextInput
              placeholder="Email / Username"
              placeholderTextColor={"#ccc"}
              style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#A0ACBB",
                borderRadius: 8,
              }}
            />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView
            style={{
              paddingTop: 50,
              paddingBottom: 40,
              gap: 6,
            }}
          >
            <Text>Password</Text>
            <TextInput
              placeholder="Password"
              placeholderTextColor={"#ccc"}
              style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#A0ACBB",
                borderRadius: 8,
              }}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={{
              width: "100%",
              height: 45,
              backgroundColor: "#F46036",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
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
