import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CarCardProps } from "../../screens/CarCardPage/types";
import { styles } from "./styles";

export default function CarCard({ car, isFavorite, onToggleFavorite, onViewDetails }: CarCardProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => onViewDetails(car.id)}
            style={styles.card}
        >
            <View style={styles.imageWrap}>
                <Image source={{ uri: car.image }} style={styles.image} />
                <View
                    style={[styles.badge, car.isAvailable ? styles.badgeGreen : styles.badgeGray]}
                >
                    <Text style={styles.badgeText}>
                        {car.isAvailable ? "Available" : "Unavailable"}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.favBtn}
                    onPress={() => onToggleFavorite(car.id)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Ionicons
                        name={isFavorite ? "heart" : "heart-outline"}
                        size={22}
                        color="#ef4444"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.cardBody}>
                <View style={styles.rowBetween}>
                    <Text style={styles.carName}>{car.name}</Text>
                    <Text style={styles.carType}>{car.type}</Text>
                </View>

                <View style={styles.metaRow}>
                    <Ionicons name="star" size={16} color="#f59e0b" />
                    <Text style={styles.metaText}>{car.rating.toFixed(1)}</Text>
                    <Ionicons name="location-outline" size={16} color="#6b7280" style={{ marginLeft: 8 }} />
                    <Text style={styles.metaSubText}>{car.location}</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 6 }}>
                    {car.features.map(f => (
                        <View key={f} style={styles.featureChip}>
                            <Text style={styles.featureText}>{f}</Text>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.rowBetween}>
                    <Text style={styles.priceText}>${car.price}/day</Text>
                    <View style={styles.detailsBtn}>
                        <Text style={styles.detailsText}>View details</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
