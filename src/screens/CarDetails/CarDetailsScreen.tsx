// src/screens/CarDetailsScreen/index.tsx
import React from "react";
import { View, ScrollView, TouchableOpacity, Dimensions, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Props, CarDetails } from "./types";
import { mockCars } from "../../mocks/cars";
import CarSpecs from "../../components/CarSpecs/CarSpecsComponent";
import CarFeatures from "../../components/CarFeatures/CarFeaturesComponent";

const { width } = Dimensions.get("window");

export default function CarDetailsScreen({ route }: Props) {
    const navigation = useNavigation<any>();

    const passedCar = route?.params?.car;

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
                <CarFeatures features={car.features ?? []} />
            </ScrollView>

            {/* Book-knap */}
            <TouchableOpacity
                style={styles.bookButton}
                onPress={() => navigation.navigate("BookingConfirmation")}
            >
                <Text style={styles.bookButtonText}>Book this Car</Text>
            </TouchableOpacity>
        </View>
    );
}
