import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BookingStackParamList } from "./BookingStack";
import { styles } from "./styles";
import StepHeader from "../../components/StepHeader";

type Props = NativeStackScreenProps<BookingStackParamList, "Review">;

export default function ReviewScreen({ navigation, route }: Props) {
  const { car, payment } = route.params;
  const total = car.price + 9;

  return (
    <View style={styles.container}>
      {/* StepHeader with back button */}
      <StepHeader current={3} showBack />

      <Text style={styles.title}>Review Your Order</Text>

      <View style={styles.card}>
        <Image
          source={{ uri: car.image }}
          style={{ width: "100%", height: 140, borderRadius: 12 }}
        />
        <Text style={styles.carTitle}>{car.name}</Text>
        <Text style={{ color: "#6B7280", marginTop: 4 }}>Price per day: ${car.price}</Text>
        <Text style={{ color: "#6B7280" }}>Insurance: $9</Text>
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
