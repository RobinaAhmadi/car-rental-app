import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BackButton() {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: 8,
        left: 16,
        zIndex: 10,
        padding: 6,
      }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons
        name="arrow-back"
        size={24}
        color="rgb(17, 24, 39)" // gray-900
      />
    </TouchableOpacity>
  );
}
