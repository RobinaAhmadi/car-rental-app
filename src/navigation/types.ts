// navigation/types.ts
import type { NavigatorScreenParams } from "@react-navigation/native";
import type { BookingStackParamList } from "../screens/Booking/BookingStack";
import { CarDetails } from "../screens/CarDetails/types";

export type RootStackParamList = {
  Marketing: undefined;
  MainPage: undefined;
  CarDetails: { carId: string };
  BookingFlow: { car: CarDetails };
  BookingStack: NavigatorScreenParams<BookingStackParamList>;
};
