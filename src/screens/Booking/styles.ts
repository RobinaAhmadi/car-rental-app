import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#f9f9f9",
  },
  primaryBtn: {
    backgroundColor: "#111827",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  primaryBtnText: { color: "#fff", fontWeight: "700" },
  option: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginVertical: 6,
  },
  optionActive: { backgroundColor: "#111827", borderColor: "#111827" },
  optionText: { color: "#111827" },
  optionTextActive: { color: "#fff" },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginVertical: 12,
    backgroundColor: "#f9f9f9",
  },
  carTitle: { fontSize: 16, fontWeight: "700", marginTop: 6 },
  summary: { marginVertical: 10 },
  subtotal: { fontWeight: "700", fontSize: 16 },
});
