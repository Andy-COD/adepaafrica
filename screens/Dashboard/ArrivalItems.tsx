import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../utils/theme";

export interface CollectionProps {
  item: {
    title: string;
    itemCategory: string;
    genderCategory: string;
    price: string;
    image: any;
    rating: number;
    sizes: string[];
    description: string;
  };
}

const ArrivalItems = ({ item }: CollectionProps) => {
  const { title, itemCategory, genderCategory, price, image } = item;
  const navigation = useNavigation();

  const handleNavigation = () => {
    //@ts-ignore
    navigation.navigate("SelectedItem", { item });
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        justifyContent: "space-evenly",
        padding: 20,
        // backgroundColor: COLORS.primary,
        borderRadius: 16,
        marginHorizontal: 12,
      }}
    >
      <Pressable
        onPress={() => {
          handleNavigation();
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center", // Center vertically
            alignItems: "center", // Center horizontally
          }}
        >
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            style={{
              width: 150,
              height: 120,
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontWeight: "600",
              paddingVertical: 2,
              fontSize: 12,
              flexWrap: "wrap",
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontWeight: "500",
              paddingVertical: 2,
              color: "#C4CBCA",
              fontSize: 14,
              textTransform: "capitalize",
            }}
          >
            {itemCategory}
          </Text>
          <Text
            style={{
              fontWeight: "600",
              paddingVertical: 2,
              fontSize: 18,
            }}
          >
            {price}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ArrivalItems;
