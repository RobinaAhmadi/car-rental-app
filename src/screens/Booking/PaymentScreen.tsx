import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BookingStackParamList } from "./BookingStack";
import { styles } from "./styles";

type Props = NativeStackScreenProps<BookingStackParamList, "Payment">;

export default function PaymentScreen({ navigation, route }: Props) {
  const { car, formData } = route.params;

  const [method, setMethod] = useState("Credit Card");
  const [card, setCard] = useState({ holder: "", number: "", expiry: "", cvv: "" });

  const methods = ["Credit Card", "PayPal", "Google Pay"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Payment Method</Text>

      {methods.map((m) => (
        <TouchableOpacity
          key={m}
          style={[styles.option, method === m && styles.optionActive]}
          onPress={() => setMethod(m)}
        >
          <Text style={method === m ? styles.optionTextActive : styles.optionText}>{m}</Text>
        </TouchableOpacity>
      ))}

      {method === "Credit Card" && (
        <View style={{ marginTop: 20 }}>
          <TextInput
            placeholder="Card Holder Name"
            style={styles.input}
            value={card.holder}
            onChangeText={(t) => setCard({ ...card, holder: t })}
          />
          <TextInput
            placeholder="Card Number"
            style={styles.input}
            value={card.number}
            keyboardType="numeric"
            onChangeText={(t) => setCard({ ...card, number: t })}
          />
          <TextInput
            placeholder="Expiry Date (MM/YY)"
            style={styles.input}
            value={card.expiry}
            onChangeText={(t) => setCard({ ...card, expiry: t })}
          />
          <TextInput
            placeholder="CVV"
            style={styles.input}
            value={card.cvv}
            secureTextEntry
            keyboardType="numeric"
            onChangeText={(t) => setCard({ ...card, cvv: t })}
          />
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
