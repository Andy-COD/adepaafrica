import React from "react";
import { Animated, View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../utils/theme";

const CustomDynamicHeader = ({
  value,
  title,
  leftIcon,
  rightIcon,
  headerColor,
  maxHeight,
  minHeight,
  initColor,
  secondColor
}: any) => {
  const Header_Max_Height = maxHeight;
  const Header_Min_Height = minHeight;
  const Scroll_Distance = Header_Max_Height - Header_Min_Height;
  const insets = useSafeAreaInsets();

  const animatedHeaderHeight = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  const animatedHeaderColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [headerColor || initColor, secondColor],
    extrapolate: "clamp",
  });

  const animateTitleColor = value.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [headerColor || COLORS.supplemetary, COLORS.primary],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={{
        height: animatedHeaderHeight,
        backgroundColor: animatedHeaderColor, // Change the background color as needed "#3498db"
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: insets.top,
        elevation: 5,
      }}
    >
      <View style={styles.iconContainer}>
        {leftIcon && <FontAwesome5 name={leftIcon} size={SIZES.extraLarge} color={COLORS.primary} />}
      </View>
      <View style={styles.titleContainer}>
        {title && (
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: COLORS.primary
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
        )}
      </View>
      <View style={styles.iconContainer}>
        {rightIcon && <FontAwesome5 name={rightIcon}  size={SIZES.extraLarge} color={COLORS.primary} />}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 4,
    alignItems: "center",
  },
});

export default CustomDynamicHeader;
