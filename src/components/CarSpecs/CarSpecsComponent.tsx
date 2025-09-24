import React from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";
import { CarDetails } from "../../screens/CarDetails/types";

interface Props {
    car: CarDetails;
    width: number;
}

export default function CarSpecs({ car, width }: Props) {
    const make = car?.make ?? "Unknown";
    const model = car?.model ?? "";
    const year = car?.year ?? "N/A";
    const mileage = typeof car?.mileage === "number" ? `${car.mileage} km` : "N/A";
    const price = typeof car?.price === "number" ? `$${car.price}` : "N/A";
    const fuel = car?.fuel ?? "N/A";
    const transmission = car?.transmission ?? "N/A";
    const imageUri = car?.image ?? undefined;

    return (
        <>
            {imageUri ? (
                <Image
                    source={{ uri: imageUri }}
                    style={[styles.image, { width: width - 40 }]}
                    resizeMode="cover"
                />
            ) : (
                <View
                    style={[
                        styles.image,
                        { width: width - 40, backgroundColor: "#e6e6e6", justifyContent: "center", alignItems: "center" },
                    ]}
                >
                    <Text>No image</Text>
                </View>
            )}

            <Text style={styles.title}>
                {make} {model}
            </Text>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Specifications</Text>

                <View style={styles.spec}>
                    <Icon name="calendar-outline" size={20} color="#555" />
                    <Text style={styles.detail}>{year}</Text>
                </View>

                <View style={styles.spec}>
                    <Icon name="speedometer-outline" size={20} color="#555" />
                    <Text style={styles.detail}>{mileage}</Text>
                </View>

                <View style={styles.spec}>
                    <Icon name="pricetag-outline" size={20} color="#555" />
                    <Text style={styles.detail}>{price}</Text>
                </View>

                <View style={styles.spec}>
                    <Icon name="flame-outline" size={20} color="#555" />
                    <Text style={styles.detail}>Fuel: {fuel}</Text>
                </View>

                <View style={styles.spec}>
                    <Icon name="cog-outline" size={20} color="#555" />
                    <Text style={styles.detail}>Transmission: {transmission}</Text>
                </View>
            </View>
        </>
    );
}
