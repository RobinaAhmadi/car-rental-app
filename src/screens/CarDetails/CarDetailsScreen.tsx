import React from "react";
import { View, ScrollView, TouchableOpacity, Dimensions, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { styles } from "./styles";
import { CarDetails } from "./types";
import { mockCars } from "../../mocks/cars";
import CarSpecs from "../../components/CarSpecs/CarSpecsComponent";
import CarFeatures from "../../components/CarFeatures/CarFeaturesComponent";

const { width } = Dimensions.get("window");

// Props med navigation og route
type Props = NativeStackScreenProps<RootStackParamList, "CarDetails">;

export default function CarDetailsScreen({ route, navigation }: Props) {
  const passedCar = route.params.car;

  // Sørg for fallback hvis ingen bil er passed
  const car: CarDetails = passedCar ?? {
    make: mockCars[0].name.split(" ")[0],
    model: mockCars[0].name,
    year: mockCars[0].year ?? 2022,
    mileage: mockCars[0].mileage ?? 0,
    transmission: mockCars[0].transmission ?? "Automatic",
    fuel: mockCars[0].fuel ?? "N/A",
    image: mockCars[0].image,
    features: mockCars[0].features ?? [],
    price: mockCars[0].price,
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Bil-specifikationer */}
        <CarSpecs car={car} width={width} />

        {/* Features */}
        <CarFeatures features={car.features} />
      </ScrollView>

      {/* Book-knap */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() =>
          navigation.navigate("BookingStack", {
            screen: "Shipping",
            params: { car },
          })
        }
      >
        <Text style={styles.bookButtonText}>Book this Car</Text>
      </TouchableOpacity>
    </View>
  );
}
