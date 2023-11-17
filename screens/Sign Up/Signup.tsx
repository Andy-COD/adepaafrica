import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import TextDivider from "../../components/Divider with Text/TextDivider";
import { useNavigation } from "@react-navigation/native";
import { DynamicHeader } from "../../components/Dynamic Header v2/DynamicHeaderV2";
import CustomDynamicHeader from "../../components/Dynamic Header v2/CustomDynamicHeader";
import { COLORS } from "../../utils/theme";

const Signup = () => {
  const insets = useSafeAreaInsets();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor="#FF725e" style="dark" />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: insets.top,
        }}
      >
        <View style={{ paddingTop: 30 }}>
          <Text style={{ fontSize: 35, paddingBottom: 10 }}>
            Create new {"\n"}account
          </Text>
          <View
            style={{
              width: 50,
              height: 5,
              backgroundColor: COLORS.primary,
            }}
          ></View>
        </View>

        <Pressable
          style={{
            width: "100%",
            height: "100%",
          }}
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <KeyboardAvoidingView
            style={{
              paddingTop: 50,
              gap: 6,
            }}
          >
            <Text>Username</Text>
            <TextInput
              placeholder="username"
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
              gap: 6,
            }}
          >
            <Text>Phone number</Text>
            <TextInput
              placeholder="phone number"
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
              Register
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
              paddingTop: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              paddingBottom: 120,
            }}
          >
            <Text
              style={{
                textAlign: "center",
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                //@ts-ignore
                navigation.replace("Login");
              }}
            >
              <Text
                style={{
                  color: "#00b4d8",
                  textAlign: "center",
                }}
              >
                {"  "}Login
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default Signup;
