import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BookingConfirmation() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ Booking Confirmed!</Text>
      <Button title="Back to Cars" onPress={() => navigation.navigate("CarList")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
});
