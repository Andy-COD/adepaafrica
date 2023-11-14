import {
    View,
    Text,
    Modal,
    Pressable,
    KeyboardAvoidingView,
    TextInput,
  } from "react-native";
  import React, { useState } from "react";
  import { FontAwesome5 } from "@expo/vector-icons";
  
  type props = {
    showModal?: boolean;
    handlePress?: () => void;
  };
  
  const LocationModal = ({ showModal, handlePress }: props) => {
    const [height, setHeight] = useState<string>("60%");
  
    const handleHeight = () => {
      setHeight("60%");
    };
  
    return (
      <View>
        <Modal visible={showModal} animationType="fade" transparent={true}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View
            //@ts-ignore
              style={{
                width: "100%",
                height: height,
                backgroundColor: "rgba(4,4,4,4)",
                borderRadius: 16,
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                }}
              >
                <Text style={{ fontSize: 18, color: "#FFF" }}>Choose location</Text>
                <Pressable onPress={handlePress}>
                  <FontAwesome5 name="times" size={24} color="#fff" />
                </Pressable>
              </View>
              <KeyboardAvoidingView
                style={{
                  width: "100%",
                  height: 40,
                  flexDirection: "row",
                  gap: 15,
                  alignItems: "center",
                  borderColor: "#c3c3c3",
                  borderWidth: 1,
                  borderRadius: 10,
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                }}
              >
                <FontAwesome5 name="search" size={20} color="#fff" />
                <TextInput
                  placeholder="search for a particular item"
                  placeholderTextColor="#C6C5B9"
                  autoComplete="off"
                  autoCorrect={false}
                  style={{
                    width: 300,
                    color: "#fff",
                    height: 35,
                    borderBottomColor: "#c3c3c3",
                  }}
                  onFocus={() => setHeight("90%")}
                  onBlur={handleHeight}
                />
              </KeyboardAvoidingView>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  gap: 15,
                  paddingVertical: 20,
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="map-pin" size={24} color="white" />
                <Pressable>
                  <Text style={{
                    textTransform: "capitalize",
                    color: "#fff",
                  }}>Use current location</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default LocationModal;
  