import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShippingScreen from "./ShippingScreen";
import PaymentScreen from "./PaymentScreen";
import ReviewScreen from "./ReviewScreen";
import SuccessScreen from "./SuccessScreen";
import type { CarDetails } from "../BookingFlow/types";

export type BookingStackParamList = {
  Shipping: { 
    car: CarDetails;
    booking: {
      pickupLocation: string;
      dropoffLocation: string;
      pickupDate: string;  
      dropoffDate: string; 
    };
  };
  Payment: { car: CarDetails; formData: any };
  Review: { car: CarDetails; formData: any; payment: any };
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
