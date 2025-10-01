// navigation/types.ts
import type { NavigatorScreenParams } from "@react-navigation/native";
import type { BookingStackParamList } from "../screens/Booking/BookingStack";

export type RootStackParamList = {
  MainPage: undefined;
  CarDetails: { carId: string };
  BookingStack: NavigatorScreenParams<BookingStackParamList>;
};
