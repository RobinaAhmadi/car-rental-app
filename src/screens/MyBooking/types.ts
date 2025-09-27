// navigation/types.ts
import { CarDetails } from "../CarDetails/types";

export type RootStackParamList = {
    Auth: undefined;
    CarList: undefined;
    CarDetails: { car: CarDetails } | undefined;
    BookingConfirmation: { car: CarDetails } | { bookingId: string };
    MyBookings: undefined; // <- VIGTIG
};
