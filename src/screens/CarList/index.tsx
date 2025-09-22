import { View, FlatList, TouchableOpacity } from "react-native";
import CarItem from "../../components/CarItem";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { carData } from "../../mocks/carsList";


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
