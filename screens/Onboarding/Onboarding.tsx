import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { onBoardingObjects, sliders } from "../../data/sliders";
import OnboardingItem from "./OnboardingItem";
import { StatusBar } from "expo-status-bar";
import Paginator from "./Paginator";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../../components/Custom Button/CustomButton";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const Onboarding = () => {
  const insets = useSafeAreaInsets();
  const { width } = Dimensions.get("screen");
  const navigation = useNavigation();

  const flatListRef = useAnimatedRef<FlatList<onBoardingObjects>>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  const viewableItemsChanged = useRef((items: any) => {
    flatListIndex.value = items.viewableItems[0].index;
  }).current;

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  return (
    <View style={{ paddingTop: insets.top, flex: 1 }}>
      <StatusBar backgroundColor="#FF725e" style="dark" />
      <View
        style={{
          width,
        }}
      >
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
          onPress={() => {
            //@ts-ignore
            navigation.replace("Signup");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "#403233",
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Animated.FlatList
          //@ts-ignore
          ref={flatListRef}
          data={sliders}
          renderItem={({ item, index }) => {
            return <OnboardingItem item={item} />;
          }}
          keyExtractor={(_, index) => index.toString()}
          onScroll={onScrollHandler}
          scrollEventThrottle={16}
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={{
            minimumViewTime: 300,
            viewAreaCoveragePercentThreshold: 10,
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 0,
          right: 0,
          marginHorizontal: 30,
          paddingVertical: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Paginator data={sliders} x={x} />
        <CustomButton
          flatListIndex={flatListIndex}
          flatListRef={flatListRef}
          length={sliders.length}
          x={x}
        />
      </View>
    </View>
  );
};

export default Onboarding;
