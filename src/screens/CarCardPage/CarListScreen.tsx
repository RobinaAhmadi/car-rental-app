import React, { useMemo, useState, useEffect } from "react";
import { SafeAreaView, View, Text, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";
import { styles } from "./styles";
import { Car, PriceOrder } from "./types";
import CarCard from "../../components/CarCard/CarCardComponent";
import CarFilters from "../../components/CarFilters/CarFiltersComponent";
import { api } from "../../services/api";

type Nav = NativeStackNavigationProp<RootStackParamList, "CarList">;

const CarCardPage: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("All Types");
  const [selectedPriceOrder, setSelectedPriceOrder] = useState<PriceOrder>("Low to High");

  const navigation = useNavigation<Nav>();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await api.getCars();
        setCars(data);
      } catch (err: any) {
        console.error("Failed to load cars:", err.message);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.canGoBack() ? navigation.goBack() : navigation.navigate("Auth")
          }
          style={{ paddingHorizontal: 8 }}
        >
          <Ionicons name="chevron-back" size={24} color="#111827" />
        </TouchableOpacity>
      ),
      title: "Available Cars",
    });
  }, [navigation]);

  const allTypes = useMemo(
    () => ["All Types", ...Array.from(new Set(cars.map((c) => c.type)))],
    [cars]
  );

  const filteredCars = useMemo(() => {
    const list = cars.filter(
      (c) => selectedType === "All Types" || c.type === selectedType
    );
    list.sort((a, b) =>
      selectedPriceOrder === "Low to High" ? a.price - b.price : b.price - a.price
    );
    return list;
  }, [cars, selectedType, selectedPriceOrder]);

  const handleToggleFavorite = (carId: string) =>
    setFavorites((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );

  const handleViewDetails = (carId: string) => {
    navigation.navigate("CarDetails", { carId: carId.toString() });
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
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <CarCard
            car={item}
            isFavorite={favorites.includes(item.id.toString())}
            onToggleFavorite={handleToggleFavorite}
            onViewDetails={handleViewDetails}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default CarCardPage;