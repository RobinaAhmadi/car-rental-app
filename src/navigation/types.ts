export type RootStackParamList = {
  Auth: undefined;
  CarList: undefined;
  CarDetails: {
    car: { id: number; make: string; model: string; year: number };
  };
  BookingConfirmation: undefined;
};
