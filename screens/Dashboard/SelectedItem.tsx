import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CollectionProps } from "./Collections";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';

const SelectedItem = ({ route }: any) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const { title, itemCategory, genderCategory, price, image, description, sizes, rating } =
    route.params.item;

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: "#fff",
      }}
    >
      {/* ####### Header Image ############# */}
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          style={{ width: "100%", height: 400 }}
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            top: 10,
            left: 10,
            borderRadius: 100,
            backgroundColor: "#F46036",
          }}
          onPress={() => {
            handleGoBack();
          }}
        >
          <FontAwesome5 name="chevron-left" size={20} color="#fff" />
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            paddingTop: 10,
            paddingRight: 20,
            borderRadius: 100,
          }}
        >
          <FontAwesome5 name="fire-alt" size={30} color="red" />
        </View>
        {/* ############# Title and Image ############## */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: insets.top,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "300",
              alignItems: "center"
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "700"
            }}
          >
            {price}
          </Text>
        </View>
        {/* ############ Rating ############  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            
        </View>
        {/* ########### Description ####### */}
        <View>
            <Text>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default SelectedItem;
