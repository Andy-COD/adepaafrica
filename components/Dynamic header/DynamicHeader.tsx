import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const DynamicHeader = ({ value }: any) => {
  const Header_Max_Height = 100;
  const Header_Min_Height = 100;
  const Scroll_Distance = Header_Max_Height - Header_Min_Height;
  const insets = useSafeAreaInsets();

  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const animatedHeaderColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: ["rgba(255, 255, 255, 0.5)", "#fff"],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        elevation: 10,
        paddingTop: insets.top,
        height: animatedHeaderHeight,
        width: "100%",
        backgroundColor: animatedHeaderColor,
      }}
    >
      <View>
        <FontAwesome5 name="bars" size={20} color="#191923" />
      </View>
      <View>
        {/* <Text style={{ color: "#191923", fontSize: 20 }}>Home</Text> */}
      </View>
      <View>
        <FontAwesome5 name="search" color="#191923" size={20} />
      </View>
    </Animated.View>
  );
};
