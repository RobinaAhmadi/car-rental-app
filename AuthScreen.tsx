import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function AuthScreen() {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.text}>Logged in as: {user}</Text>
          <Button title="Go to Cars" onPress={() => navigation.navigate("CarList")} />
          <Button title="Logout" onPress={logout} />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
          />
          <Button title="Login" onPress={() => login(username)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  text: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, width: "80%", padding: 8, marginBottom: 10 },
});
