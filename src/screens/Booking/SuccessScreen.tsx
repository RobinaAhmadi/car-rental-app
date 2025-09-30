import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function SuccessScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
      <Text style={styles.title}>🎉 Your car has been booked successfully</Text>
      <Text style={{ marginTop: 10, color: "#555", textAlign: "center" }}>
        Thank you for choosing us! You can explore more cars or manage your booking anytime.
      </Text>

      <TouchableOpacity
        style={[styles.primaryBtn, { marginTop: 20 }]}
        onPress={() => navigation.navigate("CarList")}
      >
        <Text style={styles.primaryBtnText}>Browse Cars</Text>
      </TouchableOpacity>
    </View>
  );
}
