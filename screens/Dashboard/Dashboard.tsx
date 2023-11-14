import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
  TextInput,
  FlatList,
  Image,
  Animated,
} from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomSlider from "../../components/Custom Slider/CustomSlider";
import LocationModal from "../../components/Location modal/LocationModal";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DynamicHeader } from "../../components/Dynamic header/DynamicHeader";
import { data, gatClothes } from "./Dashboard.helper";
import Collections from "./Collections";
import CustomDynamicHeader from "../../components/Dynamic Header v2/CustomDynamicHeader";
import { COLORS } from "../../utils/theme";

const Dashboard = () => {
  const insets = useSafeAreaInsets();
  const [showModal, setShowModal] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const imageBackground = useMemo(
    () => require("../../assets/Images/dashbackground.jpg"),
    []
  );
  const navigation = useNavigation();
  const curLocation = "Spintex spike street, Accra";
  const shops = "23";
  const categories = "8";

  const scrollX = useRef(new Animated.Value(0)).current;

  const optionData = ["Shoes", "Shirts", "Jeans", "Hoodies", "Jewelry"];

  const handleShowModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    gatClothes();
  }, []);

  const handleItemSearch = () => {
    navigation.navigate({ name: "ItemSearch" } as never);
  };

  return (
    <>
      <StatusBar backgroundColor="#FF725e" style="dark" />
      <CustomDynamicHeader
        value={scrollOffsetY}
        maxHeight={120}
        minHeight={80}
        initColor={COLORS.neutral}
        secondColor={COLORS.neutral}
        leftIcon={"bars"}
        rightIcon={"search"}
      />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: COLORS.neutral,
          paddingHorizontal: 20,
        }}
        scrollEventThrottle={10}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        <View
          style={{
            paddingTop: 30,
            gap: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
              }}
            >
              Hi, username{" "}
            </Text>
            <View>
              <Image
                source={require("../../assets/Icons/wave.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 21,
                fontWeight: "500",
                color: COLORS.primary,
              }}
            >
              Create your own style
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingVertical: 30,
          }}
        >
          <CustomSlider />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 25,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "400",
              color: COLORS.primary,
            }}
          >
            New Arrivals
          </Text>
          <TouchableOpacity style={{}}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "300",
                color: COLORS.primary,
              }}
            >
              See All Collections
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: insets.bottom,
          }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => <Collections item={item} />}
            numColumns={2}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 20 }}></View>;
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Dashboard;
