
import React from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Props } from "./types";
import Icon from "react-native-vector-icons/Ionicons";


const { width } = Dimensions.get("window");

export default function CarDetails({ route }: Props) {
    const navigation = useNavigation<any>();


    const passedCar = route?.params?.car;
    const car = passedCar ?? carDetailsMock[0];


    const make = car?.make ?? "Unknown";
    const model = car?.model ?? "";
    const year = car?.year ?? "N/A";
    const mileage = typeof car?.mileage === "number" ? `${car.mileage} km` : "N/A";
    const price = typeof car?.price === "number" ? `$${car.price}` : "N/A";
    const fuel = car?.fuel ?? "N/A";
    const transmission = car?.transmission ?? "N/A";
    const imageUri = car?.image ?? undefined;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
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
                     {model}
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
            </ScrollView>

            <TouchableOpacity
                style={styles.bookButton}
                onPress={() => navigation.navigate("BookingConfirmation")}
            >
                <Text style={styles.bookButtonText}>Book this Car</Text>
            </TouchableOpacity>
        </View>
    );
}
