import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BookingStackParamList } from "./BookingStack";
import { styles } from "./styles";
import StepHeader from "../../components/StepHeader";

type Props = NativeStackScreenProps<BookingStackParamList, "Payment">;

export default function PaymentScreen({ navigation, route }: Props) {
  const { car, formData } = route.params;

  const [method, setMethod] = useState("Credit Card");
  const [card, setCard] = useState({ holder: "", number: "", expiry: "", cvv: "" });

  const methods = [
    { key: "Credit Card", img: "https://img.icons8.com/color/96/mastercard-logo.png" },
    { key: "PayPal", img: "https://img.icons8.com/color/96/paypal.png" },
    { key: "Google Pay", img: "https://img.icons8.com/color/96/google-pay.png" },
  ];

  return (
    <View style={styles.container}>
      {/* StepHeader with back button */}
      <StepHeader current={2} showBack />

      <Text style={styles.title}>Select Payment Method</Text>

      {methods.map((m) => (
        <TouchableOpacity
          key={m.key}
          style={[styles.optionCard, method === m.key && styles.optionActive]}
          onPress={() => setMethod(m.key)}
        >
          <Image source={{ uri: m.img }} style={{ width: 40, height: 40, marginRight: 12 }} />
          <Text style={method === m.key ? styles.optionTextActive : styles.optionText}>
            {m.key}
          </Text>
        </TouchableOpacity>
      ))}

      {method === "Credit Card" && (
        <View style={{ marginTop: 20 }}>
          {[ 
            { key: "holder", placeholder: "Card Holder Name" },
            { key: "number", placeholder: "Card Number" },
            { key: "expiry", placeholder: "Expiry Date (MM/YY)" },
            { key: "cvv", placeholder: "CVV" },
          ].map((field, i) => (
            <TextInput
              key={i}
              placeholder={field.placeholder}
              style={styles.input}
              secureTextEntry={field.key === "cvv"}
              keyboardType={field.key === "number" ? "numeric" : "default"}
              onChangeText={(t) => setCard({ ...card, [field.key]: t })}
              placeholderTextColor="#9CA3AF"
            />
          ))}
        </View>
      )}

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate("Review", { car, formData, payment: { method, card } })}
      >
        <Text style={styles.primaryBtnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
