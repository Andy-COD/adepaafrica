import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Fontawesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  length: number;
  flatListIndex: SharedValue<number>;
  flatListRef: any;
  x: SharedValue<number>;
};

const CustomButton = ({ length, flatListIndex, flatListRef, x }: Props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === length - 1 ? withSpring(140) : withSpring(60),
      height: 60,
    };
  });

  const arrowAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 30,
      height: 30,
      opacity:
        flatListIndex.value === length - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === length - 1
              ? withTiming(100)
              : withTiming(0),
        },
      ],
    };
  });

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === length - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  const animatedColor = useAnimatedStyle(() => {
    const backgroudAnimation = interpolateColor(
      x.value,
      [0, width, 2 * width],
      ["#414833", "#414833", "#414833"]
    );
    return {
      backgroundColor: backgroudAnimation,
    };
  });
  return (
    <TouchableOpacity
      onPress={async () => {
        if (flatListIndex.value < length - 1) {
          flatListRef.current?.scrollToIndex({
            index: flatListIndex.value + 1,
            animated: true,
          });
        } else {
          await AsyncStorage.setItem("@viewdOnBoarding", "true");
          //@ts-ignore
          navigation.replace("Signup");
        }
      }}
    >
      <Animated.View
        style={[
          {
            width: 60,
            height: 60,
            borderRadius: 100,
            backgroundColor: "#f15937",
            alignItems: "center",
            justifyContent: "center",
          },
          animatedColor,
          buttonAnimatedStyle,
        ]}
      >
        <Animated.Text
          style={[
            { color: "white", fontSize: 16, position: "absolute" },
            textAnimationStyle,
          ]}
        >
          Get Started
        </Animated.Text>
        <Animated.View
          style={[
            arrowAnimationStyle,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Fontawesome5 name="arrow-right" size={25} color={"white"} />
        </Animated.View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default CustomButton;
