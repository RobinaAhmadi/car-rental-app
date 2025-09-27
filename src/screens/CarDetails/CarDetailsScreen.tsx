import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Pressable,
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { CarDetails, CarFeature } from "./types";
import { styles, rowStyles, IMAGE_W } from "./styles";
import { api } from "../../services/api";

type RouteParams = { carId: string };

export default function CarDetailsScreen() {
  const route = useRoute();
  const { carId } = route.params as RouteParams;

  const [car, setCar] = useState<CarDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef<FlatList<string>>(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const data = await api.getCarById(carId);
        setCar(data);
      } catch (err: any) {
        console.error("Failed to load car details:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [carId]);

  if (loading) {
    return (
      <SafeAreaView style={styles.safe}>
        <ActivityIndicator size="large" style={{ marginTop: 40 }} />
      </SafeAreaView>
    );
  }

  if (!car) {
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={{ textAlign: "center", marginTop: 40 }}>
          Car not found.
        </Text>
      </SafeAreaView>
    );
  }

  const canGoLeft = index > 0;
  const canGoRight = index < car.images.length - 1;

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
      case "Seats":
        return <Ionicons name="people-outline" size={18} />;
      case "Hybrid":
        return <Ionicons name="flash-outline" size={18} />;
      case "AirCondition":
        return <Ionicons name="snow-outline" size={18} />;
      case "CarPlay":
        return <MaterialCommunityIcons name="apple" size={18} />;
      case "Bluetooth":
        return <Ionicons name="bluetooth-outline" size={18} />;
      case "Radio":
        return <Ionicons name="musical-notes-outline" size={18} />;
      default:
        return null;
    }
  };

  const featureLabel = (f: CarFeature) =>
    f === "AirCondition" ? "Aircondition" : f === "Seats" ? "5 Seats" : f;

  const dots = useMemo(
    () =>
      car.images.map((_, i) => (
        <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
      )),
    [car.images, index]
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.brand}>Car Rental</Text>
          <Ionicons name="car-outline" size={20} />
        </View>

        <View style={styles.carouselWrapper}>
          <Pressable
            onPress={goLeft}
            disabled={!canGoLeft}
            style={[styles.arrow, !canGoLeft && styles.arrowDisabled, { left: -6 }]}
          >
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

          <Pressable
            onPress={goRight}
            disabled={!canGoRight}
            style={[styles.arrow, !canGoRight && styles.arrowDisabled, { right: -6 }]}
          >
            <Ionicons name="chevron-forward" size={22} />
          </Pressable>
        </View>

        <View style={styles.dotsRow}>{dots}</View>

        <View style={styles.titleRow}>
          <Text style={styles.title}>{car.name}</Text>
          <Text style={styles.price}>
            ${car.pricePerDay}
            <Text style={styles.per}>/Day</Text>
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

        <Pressable onPress={() => setExpanded((s) => !s)} style={styles.detailsBtn}>
          <Text style={styles.detailsBtnText}>View More Details</Text>
        </Pressable>
        <Pressable onPress={() => setExpanded((s) => !s)} style={styles.chevron}>
          <Ionicons name={expanded ? "chevron-up" : "chevron-down"} size={18} />
        </Pressable>

        {expanded && (
          <View style={styles.detailsCard}>
            <Row label="Transmission" value={car.specs.transmission} />
            <Row label="Fuel" value={car.specs.fuel} />
            <Row label="Doors" value={`${car.specs.doors}`} />
            <Row label="Luggage" value={`${car.specs.luggage} suitcases`} />
            {car.specs.mpg && <Row label="MPG" value={`${car.specs.mpg}`} />}
            {car.specs.horsepower && (
              <Row label="Horsepower" value={`${car.specs.horsepower} hp`} />
            )}
          </View>
        )}

        <Pressable onPress={() => alert(`Booked ${car.name}`)} style={styles.bookBtn}>
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
