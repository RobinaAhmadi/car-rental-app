import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export default function SuccessScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
      <Ionicons name="checkmark-circle" size={100} color="#22C55E" />
      <Text style={[styles.title, { marginTop: 16, textAlign: "center" }]}>
        Booking Successful!
      </Text>
      <Text style={{ marginTop: 10, color: "#555", textAlign: "center", paddingHorizontal: 20 }}>
        Thank you for booking with us. You can explore more cars or manage your booking anytime.
      </Text>

      <TouchableOpacity
        style={[styles.primaryBtn, { marginTop: 20, width: "80%" }]}
        onPress={() => navigation.navigate("MainPage")}
      >
        <Text style={styles.primaryBtnText}>Browse Cars</Text>
      </TouchableOpacity>
    </View>
  );
}
