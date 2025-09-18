import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import CarItem from "./CarItem";
import { useNavigation } from "@react-navigation/native";

const carData = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    mileage: 45000,
    price: 15000,
    image: "https://images.unsplash.com/photo-1609902726285-6eafdd2a2a1d?w=800",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2020,
    mileage: 30000,
    price: 20000,
    image: "https://images.unsplash.com/photo-1615732015894-2b25aa0b0e87?w=800",
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model 3",
    year: 2022,
    mileage: 15000,
    price: 35000,
    image: "https://images.unsplash.com/photo-1619767886558-efdc1b4e1d4b?w=800",
  },
  {
    id: 4,
    make: "Volkswagen",
    model: "Golf GTI",
    year: 2019,
    mileage: 38000,
    price: 18000,
    image: "https://images.unsplash.com/photo-1616784021295-779843f38e14?w=800",
  },
  {
    id: 5,
    make: "Mercedes",
    model: "C-Class",
    year: 2021,
    mileage: 25000,
    price: 42000,
    image: "https://images.unsplash.com/photo-1616784087833-6c4abfea9c52?w=800",
  },
  {
    id: 6,
    make: "Lamborghini",
    model: "Huracán",
    year: 2023,
    mileage: 5000,
    price: 250000,
    image: "https://images.unsplash.com/photo-1603386329225-868f9b70fbc4?w=800",
  },
];

export default function CarList() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <FlatList
        data={carData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CarDetails", { car: item })}
          >
            <CarItem
              carType={`${item.make} ${item.model}`}
              mileage={item.mileage}
              price={item.price}
              image={item.image}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
});
