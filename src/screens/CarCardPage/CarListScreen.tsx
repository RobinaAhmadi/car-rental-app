import React, { useMemo, useState, useEffect } from "react";
import { SafeAreaView, View, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { styles } from "./styles";
import { Car, PriceOrder } from "./types";
import { mockCars } from "../../mocks/cars";
import CarCard from "../../components/CarCard/CarCardComponent";
import CarFilters from "../../components/CarFilters/CarFiltersComponent";

type Nav = NativeStackNavigationProp<RootStackParamList, "CarList">;

const CarCardPage: React.FC = () => {
  const [cars] = useState<Car[]>(mockCars);
  const [favorites, setFavorites] = useState<string[]>(["1"]);
  const [selectedType, setSelectedType] = useState<string>("All Types");
  const [selectedPriceOrder, setSelectedPriceOrder] = useState<PriceOrder>("Low to High");

  const navigation = useNavigation<Nav>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
          <TouchableOpacity
              onPress={() => (navigation.canGoBack() ? navigation.goBack() : navigation.navigate("Auth"))}
              style={{ paddingHorizontal: 8 }}
          >
            <Ionicons name="chevron-back" size={24} color="#111827" />
          </TouchableOpacity>
      ),
      title: "Available Cars",
    });
  }, [navigation]);

  const allTypes = useMemo(() => ["All Types", ...Array.from(new Set(cars.map(c => c.type)))], [cars]);

  const filteredCars = useMemo(() => {
    const list = cars.filter(c => selectedType === "All Types" || c.type === selectedType);
    list.sort((a, b) => (selectedPriceOrder === "Low to High" ? a.price - b.price : b.price - a.price));
    return list;
  }, [cars, selectedType, selectedPriceOrder]);

  const handleToggleFavorite = (carId: string) =>
      setFavorites(prev => (prev.includes(carId) ? prev.filter(id => id !== carId) : [...prev, carId]));

  const handleViewDetails = (carId: string) => {
    const found = cars.find(c => c.id === carId);
    if (!found) return;

    navigation.navigate("CarDetails", {
      car: {
        make: found.name.split(" ")[0] ?? found.name,
        model: found.name,
        year: found.year ?? 2022,
        mileage: found.mileage ?? 0,
        price: found.price,
        image: found.image,
        fuel: found.fuel,
        transmission: found.transmission,
        features: found.features ?? [],
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
          <Text style={styles.countText}>Showing {filteredCars.length} of {cars.length} cars</Text>
        </View>
        <FlatList
            data={filteredCars}
            keyExtractor={item => item.id}
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
