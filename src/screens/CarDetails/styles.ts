// styles.ts
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
export const IMAGE_W = width - 48;
export const IMAGE_H = IMAGE_W * 0.55;

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { padding: 16, paddingBottom: 32 },
  topBar: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 8 },
  brand: { fontSize: 12, color: "#555" },

  carouselWrapper: {
    width: IMAGE_W,
    height: IMAGE_H,
    alignSelf: "center",
    borderRadius: 14,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#2E71FF33",
    justifyContent: "center",
  },
  image: { width: IMAGE_W, height: IMAGE_H },
  arrow: {
    position: "absolute",
    zIndex: 2,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  arrowDisabled: { opacity: 0.4 },

  dotsRow: { flexDirection: "row", alignSelf: "center", gap: 6, marginVertical: 8 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#C9D4FF" },
  dotActive: { backgroundColor: "#2E71FF" },

  titleRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 8, alignItems: "flex-end" },
  title: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 16, fontWeight: "700" },
  per: { fontSize: 12, color: "#666" },

  features: { marginTop: 12, flexDirection: "row", flexWrap: "wrap", gap: 10 },
  featureChip: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  featureText: { fontSize: 12 },

  detailsBtn: {
    marginTop: 16,
    alignSelf: "center",
    backgroundColor: "#2E71FF",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 999,
  },
  detailsBtnText: { color: "white", fontWeight: "600", fontSize: 12 },
  chevron: {
    alignSelf: "center",
    marginTop: 6,
    marginBottom: 6,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#e5e7eb",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsCard: { borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 12, padding: 12, gap: 8 },

  bookBtn: { marginTop: 24, alignSelf: "center", backgroundColor: "#2E71FF", borderRadius: 999, paddingVertical: 12, paddingHorizontal: 28 },
  bookText: { color: "white", fontWeight: "700" },
});

export const rowStyles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between" },
  label: { color: "#6b7280" },
  value: { fontWeight: "600" },
});
