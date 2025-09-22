import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  image: { width: "100%", height: 160 },
  info: { padding: 12 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 6 },
  detail: { fontSize: 14, color: "#555" },
});
