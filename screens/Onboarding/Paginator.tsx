import { View, Text } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useWindowDimensions } from "react-native";

type Props = {
  data: any;
  x: SharedValue<number>;
};

const Paginator = ({ data, x }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((_: any, index: number) => {
        const animatedPeriodStyle = useAnimatedStyle(() => {
          const widthAnimation = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [10, 20, 10],
            Extrapolate.CLAMP
          );
          const opacityAnimation = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
          );
          return {
            width: widthAnimation,
            opacity: opacityAnimation,
          };
        });

        return (
          <Animated.View
            key={index}
            style={[
              {
                width: 10,
                height: 10,
                backgroundColor: "black",
                borderRadius: 5,
                marginHorizontal: 10,
              },
              animatedPeriodStyle,
            ]}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Paginator;
