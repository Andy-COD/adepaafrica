import React, { useEffect, useState, useRef, useMemo } from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  Animated,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Paginator from "../../screens/Onboarding/Paginator";

const CustomSlider = () => {
  const image1 = require("../../assets/Images/clothes.jpg");
  const image2 = require("../../assets/Images/jewelry.jpg");
  const image3 = require("../../assets/Images/shoes.jpg");

  const data = [image1, image2, image3];

  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }: any) => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Image
        source={item}
        style={{ width: "100%", height: 250, borderRadius: 12 }}
      />
    </View>
  );

  return (
    <>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={380}
        itemWidth={380}
        loop
        autoplay
        autoplayDelay={1000}
        autoplayInterval={8000}
      />
    </>
  );
};

export default CustomSlider;
