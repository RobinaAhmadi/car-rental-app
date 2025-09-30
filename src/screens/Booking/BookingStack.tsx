import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShippingScreen from "./ShippingScreen";
import PaymentScreen from "./PaymentScreen";
import ReviewScreen from "./ReviewScreen";
import SuccessScreen from "./SuccessScreen";

export type BookingStackParamList = {
  Shipping: { car: any };
  Payment: { car: any; formData: any };
  Review: { car: any; formData: any; payment: any };
  Success: undefined;
};

const Stack = createNativeStackNavigator<BookingStackParamList>();

export default function BookingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}
