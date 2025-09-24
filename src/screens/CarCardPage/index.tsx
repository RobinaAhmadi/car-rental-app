import React, { useMemo, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { styles } from "./styles";
import { Car, CarCardProps, CarFiltersProps, PriceOrder } from "./types";
import { mockCars } from "../../mocks/cars";

type Nav = NativeStackNavigationProp<RootStackParamList, "CarList">;

/* ---------- Car card ---------- */
const CarCard: React.FC<CarCardProps> = ({
  car,
  isFavorite,
  onToggleFavorite,
  onViewDetails,
}) => (
  <TouchableOpacity
    activeOpacity={0.9}
    onPress={() => onViewDetails(car.id)}
    style={styles.card}
  >
    <View style={styles.imageWrap}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <View
        style={[
          styles.badge,
          car.isAvailable ? styles.badgeGreen : styles.badgeGray,
        ]}
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
        <Ionicons
          name="location-outline"
          size={16}
          color="#6b7280"
          style={{ marginLeft: 8 }}
        />
        <Text style={styles.metaSubText}>{car.location}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 6 }}
      >

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

/* ---------- Filters ---------- */
const CarFilters: React.FC<CarFiltersProps> = ({
  types,
  selectedType,
  onTypeChange,
  selectedPriceOrder,
  onPriceOrderChange,
}) => (
  <View style={styles.filtersWrap}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 8 }}
    >
      {types.map((t) => (
        <TouchableOpacity
          key={t}
          onPress={() => onTypeChange(t)}
          style={[styles.typeChip, selectedType === t && styles.typeChipActive]}
        >
          <Text
            style={[
              styles.typeChipText,
              selectedType === t && styles.typeChipTextActive,
            ]}
          >
            {t}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <View style={styles.segment}>
      {(["Low to High", "High to Low"] as PriceOrder[]).map((option) => {
        const active = selectedPriceOrder === option;
        return (
          <TouchableOpacity
            key={option}
            onPress={() => onPriceOrderChange(option)}
            style={[styles.segmentBtn, active && styles.segmentBtnActive]}
          >
            <Text
              style={[
                styles.segmentText,
                active && styles.segmentTextActive,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  </View>
);

/* ---------- Page ---------- */
const CarCardPage: React.FC = () => {
  const [cars] = useState<Car[]>(mockCars);
  const [favorites, setFavorites] = useState<string[]>(["1"]);
  const [selectedType, setSelectedType] = useState<string>("All Types");
  const [selectedPriceOrder, setSelectedPriceOrder] =
    useState<PriceOrder>("Low to High");

  const navigation = useNavigation<Nav>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate("Auth");
            }
          }}
          style={{ paddingHorizontal: 8 }}
        >
          <Ionicons name="chevron-back" size={24} color="#111827" />
        </TouchableOpacity>
      ),
      title: "Available Cars",
    });
  }, [navigation]);

  const allTypes = useMemo(() => {
    const types = Array.from(new Set(cars.map((c) => c.type)));
    return ["All Types", ...types];
  }, [cars]);

  const filteredCars = useMemo(() => {
    const list = cars.filter(
      (c) => selectedType === "All Types" || c.type === selectedType
    );
    list.sort((a, b) =>
      selectedPriceOrder === "Low to High" ? a.price - b.price : b.price - a.price
    );
    return list;
  }, [cars, selectedType, selectedPriceOrder]);

  const handleToggleFavorite = (carId: string) => {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  };

  const handleViewDetails = (carId: string) => {
    const found = cars.find((c) => c.id === carId);
    if (!found) return;

    navigation.navigate("CarDetails", {
      car: {
        make: found.name.split(" ")[0] ?? found.name,
        model: found.name,
        year: found.year ?? 2022,
        mileage: found.mileage ?? 0,
        price: found.price,
        image: found.image, // hvis du bruger images[] senere
        fuel: found.fuel,
        transmission: found.transmission,
        features: found.features ?? []
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />

      <CarFilters
        types={allTypes}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedPriceOrder={selectedPriceOrder}
        onPriceOrderChange={setSelectedPriceOrder}
      />

      <View style={styles.countWrap}>
        <Text style={styles.countText}>
          Showing {filteredCars.length} of {cars.length} cars
        </Text>
      </View>

      <FlatList
        data={filteredCars}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <CarCard
            car={item}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={handleToggleFavorite}
            onViewDetails={handleViewDetails}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default CarCardPage;