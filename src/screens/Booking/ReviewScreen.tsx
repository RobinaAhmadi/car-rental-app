import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BookingStackParamList } from "./BookingStack";
import { styles } from "./styles";

type Props = NativeStackScreenProps<BookingStackParamList, "Review">;

export default function ReviewScreen({ navigation, route }: Props) {
  const { car, formData, payment } = route.params;

  const total = car.price + 9; // mock insurance
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Order</Text>

      <View style={styles.card}>
        <Image source={{ uri: car.image }} style={{ width: "100%", height: 120, borderRadius: 8 }} />
        <Text style={styles.carTitle}>{car.name}</Text>
        <Text>Price per day: ${car.price}</Text>
        <Text>Insurance: $9</Text>
      </View>

      <View style={styles.summary}>
        <Text>Total: ${car.price}</Text>
        <Text>Insurance: $9</Text>
        <Text style={styles.subtotal}>Subtotal: ${total}</Text>
      </View>

      <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate("Success")}>
        <Text style={styles.primaryBtnText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
}
