import { 
  Image, 
  ImageBackground, 
  Pressable, 
  Text, 
  View, 
  StatusBar 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../navigation/types";
import { styles } from "./styles";

const carImage = require("../../../assets/car3.png");
const bgImage = require("../../../assets/gradient.jpg");

export default function Marketing() {
  const nav = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      
      <ImageBackground source={bgImage} style={{ flex: 1 }} resizeMode="cover">
        
        <View style={styles.bottomOverlay} />


        <View style={styles.content}>
          <Text style={styles.title}>Car Rental for{"\n"}every trip</Text>

          <Text style={styles.subtitle}>
            Rent a car for your travels whenever you want on your mobile device!
          </Text>

          <Image source={carImage} style={styles.car} resizeMode="contain" />

          <Pressable 
            style={styles.cta} 
            onPress={() => nav.navigate("MainPage")} 
            accessibilityRole="button"
          >
            <Text style={styles.ctaText}>Find cars</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
