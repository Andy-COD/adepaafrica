import { View, Text } from "react-native";
import React from "react";

type props = {
    text: string;
}

const TextDivider = ({ text }: props) => {
  return (
    <View
      style={{
        paddingVertical: 40,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <View
        style={{
          width: 100,
          height: 1.5,
          backgroundColor: "#ccc",
        }}
      ></View>
      <Text>{text}</Text>
      <View
        style={{
          width: 100,
          height: 1.5,
          backgroundColor: "#ccc",
        }}
      ></View>
    </View>
  );
};

export default TextDivider;
