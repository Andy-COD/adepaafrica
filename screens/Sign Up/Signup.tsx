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
      <CustomDynamicHeader
        value={scrollOffsetY}
        maxHeight={120}
        title={"Sign Up"}
        minHeight={80}
        initColor={COLORS.neutral}
        secondColor={COLORS.neutral}
      />
      <ScrollView
        style={{
          flex: 1,
          paddingBottom: insets.bottom * 4,
        }}
        // bounces={false}
        showsVerticalScrollIndicator={false}
      >
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
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
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
            <KeyboardAvoidingView
              style={{
                paddingTop: 80,
                paddingBottom: 10,
                gap: 6,
              }}
            >
              <Text>Username</Text>
              <TextInput
                placeholder="username"
                style={{
                  padding: 15,
                  borderWidth: 0.5,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  backgroundColor: "#fff",
                }}
              />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
              style={{
                paddingVertical: 10,
                gap: 6,
              }}
            >
              <Text>Phone number</Text>
              <TextInput
                placeholder="mobile no"
                secureTextEntry={true}
                keyboardType="numeric"
                style={{
                  padding: 15,
                  borderWidth: 0.5,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  backgroundColor: "#fff",
                }}
              />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
              style={{
                paddingVertical: 10,
                gap: 6,
              }}
            >
              <Text>Email</Text>
              <TextInput
                placeholder="email@email.com"
                keyboardType="email-address"
                style={{
                  padding: 15,
                  borderWidth: 0.5,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  backgroundColor: "#fff",
                }}
              />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
              style={{
                paddingVertical: 10,
                gap: 6,
              }}
            >
              <Text>Password</Text>
              <TextInput
                placeholder="password"
                secureTextEntry={true}
                style={{
                  padding: 15,
                  borderWidth: 0.5,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  backgroundColor: "#fff",
                }}
              />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
              style={{
                paddingVertical: 10,
                paddingBottom: 30,
                gap: 6,
              }}
            >
              <Text>Confirm password</Text>
              <TextInput
                placeholder="password"
                secureTextEntry={true}
                style={{
                  padding: 15,
                  borderWidth: 0.5,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  backgroundColor: "#fff",
                }}
              />
            </KeyboardAvoidingView>
            <KeyboardAvoidingView
              // behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{
                paddingBottom: 30,
                gap: 6,
              }}
            >
              <Text>Address</Text>
              <TextInput
                placeholder="Address"
                style={{
                  padding: 15,
                  borderWidth: 0.5,
                  borderColor: "#ccc",
                  borderRadius: 8,
                  backgroundColor: "#fff",
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
          </View>
        </Pressable>
      </ScrollView>
    </>
  );
};

export default Signup;
