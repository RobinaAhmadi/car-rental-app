import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BookingStackParamList } from "./BookingStack";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import StepHeader from "../../components/StepHeader";

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
      <StepHeader current={1} />

      <Text style={styles.title}>Enter Details</Text>

      {[
        { key: "fullName", placeholder: "Full Name*", icon: "person-outline" },
        { key: "phone", placeholder: "Phone Number*", icon: "call-outline" },
        { key: "email", placeholder: "Email Address", icon: "mail-outline" },
        { key: "province", placeholder: "Province", icon: "business-outline" },
        { key: "city", placeholder: "City", icon: "location-outline" },
        { key: "street", placeholder: "Street Address*", icon: "home-outline" },
        { key: "postalCode", placeholder: "Postal Code*", icon: "map-outline" },
      ].map((field) => (
        <View key={field.key} style={styles.inputRow}>
          <Ionicons name={field.icon as any} size={20} color="#6B7280" style={{ marginRight: 8 }} />
          <TextInput
            placeholder={field.placeholder}
            style={styles.inputFlex}
            value={formData[field.key as keyof typeof formData]}
            onChangeText={(text) => handleChange(field.key, text)}
          />
        </View>
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
