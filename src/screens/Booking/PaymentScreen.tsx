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
    { key: "Credit Card", img: "https://img.icons8.com/color/96/000000/mastercard-logo.png" },
    { key: "PayPal", img: "https://img.icons8.com/color/96/000000/paypal.png" },
    { key: "Google Pay", img: "https://img.icons8.com/color/96/000000/google-pay.png" },
  ];

  return (
    <View style={styles.container}>
      <StepHeader current={2} />
      <Text style={styles.title}>Select a Payment Method</Text>

      {methods.map((m) => (
        <TouchableOpacity
          key={m.key}
          style={[styles.optionCard, method === m.key && styles.optionActive]}
          onPress={() => setMethod(m.key)}
        >
          <Image source={{ uri: m.img }} style={{ width: 40, height: 40, marginRight: 12 }} />
          <Text style={method === m.key ? styles.optionTextActive : styles.optionText}>{m.key}</Text>
        </TouchableOpacity>
      ))}

      {method === "Credit Card" && (
        <View style={{ marginTop: 20 }}>
          {["Card Holder Name", "Card Number", "Expiry Date (MM/YY)", "CVV"].map((placeholder, i) => (
            <TextInput
              key={i}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={placeholder === "CVV"}
              keyboardType={placeholder === "Card Number" ? "numeric" : "default"}
              onChangeText={(t) =>
                setCard({ ...card, [placeholder.split(" ")[0].toLowerCase()]: t })
              }
            />
          ))}
        </View>
      )}

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate("Review", { car, formData, payment: { method, card } })}
      >
        <Text style={styles.primaryBtnText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}
