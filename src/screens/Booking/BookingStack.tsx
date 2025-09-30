import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShippingScreen from "./ShippingScreen";
import PaymentScreen from "./PaymentScreen";
import ReviewScreen from "./ReviewScreen";
import SuccessScreen from "./SuccessScreen";

// ✅ Booking flow navigator params
export type BookingStackParamList = {
  Shipping: { car: any };
  Payment: { car: any; formData: any };
  Review: { car: any; formData: any; payment: any };
  Success: undefined;
};

const Stack = createNativeStackNavigator<BookingStackParamList>();

export default function BookingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shipping" component={ShippingScreen} options={{ title: "Checkout" }} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: "Checkout" }} />
      <Stack.Screen name="Review" component={ReviewScreen} options={{ title: "Checkout" }} />
      <Stack.Screen name="Success" component={SuccessScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
