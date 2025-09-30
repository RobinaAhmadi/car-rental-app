import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },

  // Titles
  title: { fontSize: 20, fontWeight: "700", marginBottom: 16, color: "#111827" },

  // Inputs
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 14,
    backgroundColor: "#F9FAFB",
  },
  inputFlex: { flex: 1, fontSize: 15 },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    backgroundColor: "#F9FAFB",
    fontSize: 15,
  },

  // Buttons
  primaryBtn: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  primaryBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },

  // Payment options
  optionCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
    marginVertical: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  optionActive: { backgroundColor: "#2563EB", borderColor: "#2563EB" },
  optionText: { color: "#111827", fontWeight: "600", fontSize: 15 },
  optionTextActive: { color: "#fff", fontWeight: "600", fontSize: 15 },

  // Card / Summary
  card: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 16,
    padding: 16,
    marginVertical: 16,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  carTitle: { fontSize: 16, fontWeight: "700", marginTop: 10, color: "#111827" },

  summary: {
    backgroundColor: "#F9FAFB",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  subtotal: { fontWeight: "700", fontSize: 16, marginTop: 6, color: "#111827" },
});
