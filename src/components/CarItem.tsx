import { View, Text, StyleSheet, Image } from "react-native";

type Props = {
  carType: string;
  mileage: number;
  price: number;
  image: string;
};

export default function CarItem({ carType, mileage, price, image }: Props) {
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
  },
  info: {
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  detail: {
    fontSize: 14,
    color: "#555",
  },
});
