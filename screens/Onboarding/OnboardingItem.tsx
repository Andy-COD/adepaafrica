import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { onBoardingObjects } from "../../data/sliders";



const OnboardingItem = ({ item }) => {
  const { id, title, description, image } = item;
  const { width, height } = Dimensions.get("window");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={image}
        style={{ width, resizeMode: "contain", flex: 0.7 }}
      />
      <View style={{ flex: 0.3 }}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: 30,
            marginBottom: 10,
            color: "#F46036",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            width: width * 0.9,
            fontWeight: "500",
            alignSelf: "center",
            fontSize: 16,
            color: "#403233",
            textAlign: "center",
            paddingHorizontal: 4,
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
