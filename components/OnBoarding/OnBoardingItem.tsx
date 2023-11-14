import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { onBoardingObjects } from "../../data/data";
import LottieView from "lottie-react-native";
import {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type props = {
  item: onBoardingObjects;
  index: number;
  x: SharedValue<number>;
};

const OnBoardingItem = ({ item, index, x }: props) => {
  const { id, animation, description, title } = item;
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.onBoardingContainer}>
      <LottieView
        source={animation}
        style={[styles.lottie, { width: width, height: width * 1.2 }]}
        autoPlay
        loop={id == 3 ? false : true}
      />
      <View
        style={{
          width: width * 0.8,
          gap: 12
        }}
      >
        <Text style={{fontWeight: "600", fontSize: 25, textAlign: "center"}}>{title}</Text>
        <Text style={{
          textAlign: "center",
          fontSize: 18
        }}>{description}</Text>
      </View>
    </View>
  );
};

export default OnBoardingItem;

const styles = StyleSheet.create({
  lottie: {},
  onBoardingContainer: {
    flex: 1,
    alignItems: "center"
  },
});
