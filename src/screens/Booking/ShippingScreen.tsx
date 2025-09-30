import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BookingStackParamList } from "./BookingStack";
import { styles } from "./styles";

type Props = NativeStackScreenProps<BookingStackParamList, "Shipping">;

export default function ShippingScreen({ navigation, route }: Props) {
  const { car } = route.params;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    province: "",
    city: "",
    street: "",
    postalCode: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Enter Details</Text>

      {Object.entries({
        fullName: "Full Name*",
        phone: "Phone Number*",
        email: "Email Address",
        province: "Province",
        city: "City",
        street: "Street Address*",
        postalCode: "Postal Code*",
      }).map(([key, label]) => (
        <TextInput
          key={key}
          placeholder={label}
          style={styles.input}
          value={formData[key as keyof typeof formData]}
          onChangeText={(text) => handleChange(key, text)}
        />
      ))}

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate("Payment", { car, formData })}
      >
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
