// navigation/types.ts
import type { NavigatorScreenParams } from "@react-navigation/native";
import type { BookingStackParamList } from "../screens/Booking/BookingStack";

export type RootStackParamList = {
  MainPage: undefined;
  CarDetails: { carId: string };
  // 👇 Add this line so "BookingStack" is a valid route name
  BookingStack: NavigatorScreenParams<BookingStackParamList>;
};
