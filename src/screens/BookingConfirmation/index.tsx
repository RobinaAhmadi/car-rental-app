import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function BookingConfirmation() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>✅ Booking Confirmed!</Text>
      <Button
        title="Back to Cars"
        onPress={() => navigation.navigate("CarList")}
      />
    </View>
  );
}
