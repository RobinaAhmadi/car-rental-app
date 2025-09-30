// screens/CarDetails/CarDetailsScreen.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
    SafeAreaView, View, Text, Image, Pressable, FlatList,
    ListRenderItemInfo, ScrollView, ActivityIndicator, Platform, Alert
} from "react-native";
import axios from "axios";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute, NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// 👇 adjust this path to where your BookingStack file lives
import type { BookingStackParamList } from "../Booking/BookingStack";

import { CarDetails, CarFeature } from "./types";
import { styles, rowStyles, IMAGE_W } from "./styles";

type RouteParams = { carId: string };

const API_BASE =
    Platform.OS === "android" ? "http://10.0.2.2:3000" : "http://localhost:3000";

// --- matches your backend row shape ---
type CarRow = {
    id: number;
    name: string;
    type: string;
    image: string;
    rating: number;
    location: string;
    price: number;
    transmission: string;
    fuel?: string;
};

// --- map DB row -> your UI model ---
function mapRowToDetails(row: CarRow): CarDetails {
    return {
        id: String(row.id),
        name: row.name,
        pricePerDay: row.price,
        images: [row.image], // turn single URL into array for carousel
        features: ["Seats","Bluetooth","Hybrid","Radio","CarPlay","AirCondition"] as CarFeature[],
        specs: {
            transmission: (row.transmission || "Automatic") as CarDetails["specs"]["transmission"],
            fuel: (row.fuel || "Petrol") as CarDetails["specs"]["fuel"],
            doors: 4,
            luggage: 2,
        },
    };
}

/** -------- Navigation typing (root that contains BookingStack) --------
 * If your root navigator registers <Screen name="BookingStack" component={BookingStack} />,
 * we type it like this so we can navigate with { screen, params }.
 */
type RootStackParamList = {
    BookingStack: NavigatorScreenParams<BookingStackParamList>;
    // ...other root screens if you have them
};
type RootNav = NativeStackNavigationProp<RootStackParamList>;

export default function CarDetailsScreen() {
    const { params } = useRoute() as { params: RouteParams };
    const navigation = useNavigation<RootNav>();

    const [car, setCar] = useState<CarDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const listRef = useRef<FlatList<string>>(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get<CarRow>(`${API_BASE}/cars/${params.carId}`);
                setCar(mapRowToDetails(res.data));
            } catch (e: any) {
                Alert.alert("Error", e?.message ?? "Failed to load car");
            } finally {
                setLoading(false);
            }
        })();
    }, [params.carId]);

    const canGoLeft = index > 0;
    const canGoRight = (car?.images.length ?? 0) - 1 > index;

    const goLeft = () => {
        if (!canGoLeft) return;
        const next = index - 1;
        setIndex(next);
        listRef.current?.scrollToIndex({ index: next, animated: true });
    };
    const goRight = () => {
        if (!canGoRight) return;
        const next = index + 1;
        setIndex(next);
        listRef.current?.scrollToIndex({ index: next, animated: true });
    };
    const onScrollToIndexFailed = () => {
        listRef.current?.scrollToOffset({ offset: index * IMAGE_W, animated: true });
    };
    const renderImage = ({ item }: ListRenderItemInfo<string>) => (
        <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
    );

    const FeatureIcon = ({ f }: { f: CarFeature }) => {
        switch (f) {
            case "Seats": return <Ionicons name="people-outline" size={18} />;
            case "Hybrid": return <Ionicons name="flash-outline" size={18} />;
            case "AirCondition": return <Ionicons name="snow-outline" size={18} />;
            case "CarPlay": return <MaterialCommunityIcons name="apple" size={18} />;
            case "Bluetooth": return <Ionicons name="bluetooth-outline" size={18} />;
            case "Radio": return <Ionicons name="musical-notes-outline" size={18} />;
        }
    };
    const featureLabel = (f: CarFeature) =>
        f === "AirCondition" ? "Aircondition" : f === "Seats" ? "5 Seats" : f;

    const dots = useMemo(
        () => (car?.images ?? []).map((_, i) => (
            <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
        )),
        [car?.images, index]
    );

    if (loading || !car) {
        return (
            <SafeAreaView style={styles.safe}>
                <ActivityIndicator style={{ marginTop: 24 }} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.topBar}>
                    <Text style={styles.brand}>Car Rental</Text>
                    <Ionicons name="car-outline" size={20} />
                </View>

                <View style={styles.carouselWrapper}>
                    <Pressable onPress={goLeft} disabled={!canGoLeft}
                               style={[styles.arrow, !canGoLeft && styles.arrowDisabled, { left: -6 }]}>
                        <Ionicons name="chevron-back" size={22} />
                    </Pressable>

                    <FlatList
                        ref={listRef}
                        data={car.images}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(u, i) => `${i}-${u}`}
                        renderItem={renderImage}
                        getItemLayout={(_, i) => ({ index: i, length: IMAGE_W, offset: i * IMAGE_W })}
                        onScrollToIndexFailed={onScrollToIndexFailed}
                        onMomentumScrollEnd={(e) =>
                            setIndex(Math.round(e.nativeEvent.contentOffset.x / IMAGE_W))
                        }
                        snapToInterval={IMAGE_W}
                        decelerationRate="fast"
                    />

                    <Pressable onPress={goRight} disabled={!canGoRight}
                               style={[styles.arrow, !canGoRight && styles.arrowDisabled, { right: -6 }]}>
                        <Ionicons name="chevron-forward" size={22} />
                    </Pressable>
                </View>

                <View style={styles.dotsRow}>{dots}</View>

                <View style={styles.titleRow}>
                    <Text style={styles.title}>{car.name}</Text>
                    <Text style={styles.price}>
                        ${car.pricePerDay}<Text style={styles.per}>/Day</Text>
                    </Text>
                </View>

                <View style={styles.features}>
                    {car.features.map((f, i) => (
                        <View key={i} style={styles.featureChip}>
                            <FeatureIcon f={f} />
                            <Text style={styles.featureText}> {featureLabel(f)}</Text>
                        </View>
                    ))}
                </View>

                {/* Toggle details */}
                <Pressable onPress={() => setExpanded(s => !s)} style={styles.detailsBtn}>
                    <Text style={styles.detailsBtnText}>View More Details</Text>
                </Pressable>
                <Pressable onPress={() => setExpanded(s => !s)} style={styles.chevron}>
                    <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={18} />
                </Pressable>

                {expanded && (
                    <View style={styles.detailsCard}>
                        <Row label="Transmission" value={car.specs.transmission} />
                        <Row label="Fuel" value={car.specs.fuel} />
                        <Row label="Doors" value={`${car.specs.doors}`} />
                        <Row label="Luggage" value={`${car.specs.luggage} suitcases`} />
                        {car.specs.mpg && <Row label="MPG" value={`${car.specs.mpg}`} />}
                        {car.specs.horsepower && <Row label="Horsepower" value={`${car.specs.horsepower} hp`} />}
                    </View>
                )}

                {/* BOOK: Navigate to BookingStack -> Shipping with the car */}
                <Pressable
                    onPress={() =>
                        navigation.navigate("BookingStack", {
                            screen: "Shipping",
                            params: { car },
                        })
                    }
                    style={styles.bookBtn}
                >
                    <Text style={styles.bookText}>Book</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <View style={rowStyles.row}>
            <Text style={rowStyles.label}>{label}</Text>
            <Text style={rowStyles.value}>{value}</Text>
        </View>
    );
}
