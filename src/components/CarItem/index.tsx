import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Props  } from "./types";

export default function CarItem({ carType, mileage, price, image }: Props ) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{carType}</Text>
        <Text style={styles.detail}>Mileage: {mileage} km</Text>
        <Text style={styles.detail}>Price: ${price}</Text>
      </View>
    </View>
  );
}
