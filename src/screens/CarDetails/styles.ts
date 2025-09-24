import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 100,
  },
  image: {
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  spec: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  detail: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  bookButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  featureChip: {
    backgroundColor: "#eee",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
  },
  featureText: {
    fontSize: 14,
    color: "#333",
  },
});
