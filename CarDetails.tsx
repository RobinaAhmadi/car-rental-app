import { View, Text, Button, StyleSheet, Image } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./App";

type CarDetailsRouteProp = RouteProp<RootStackParamList, "CarDetails">;

type Props = { route: CarDetailsRouteProp };

export default function CarDetails({ route }: Props) {
  const { car } = route.params;
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.title}>{car.make} {car.model}</Text>
      <Text style={styles.detail}>Year: {car.year}</Text>
      <Text style={styles.detail}>Mileage: {car.mileage} km</Text>
      <Text style={styles.detail}>Price: ${car.price}</Text>
      <Button title="Book this Car" onPress={() => navigation.navigate("BookingConfirmation")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: "center" },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  detail: { fontSize: 16, marginBottom: 5 },
});
