import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // plads til knappen
    alignItems: "center",
  },
  image: {
    width: width - 40,
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  spec: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  bookButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
    width: width - 40,
    alignSelf: "center",
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
