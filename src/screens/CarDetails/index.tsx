import { View, Text, Button, Image } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { styles } from "./styles";
import { Props } from "./types";

export default function CarDetails({ route }: Props) {
  const { car } = route.params;
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.title}>
        {car.make} {car.model}
      </Text>
      <Text style={styles.detail}>Year: {car.year}</Text>
      <Text style={styles.detail}>Mileage: {car.mileage} km</Text>
      <Text style={styles.detail}>Price: ${car.price}</Text>
      <Button
        title="Book this Car"
        onPress={() => navigation.navigate("BookingConfirmation")}
      />
    </View>
  );
}
