import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
export const IMAGE_W = width - 48;
const IMAGE_H = IMAGE_W * 0.55;

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  container: { padding: 16, paddingBottom: 32 },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
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

  dotsRow: { flexDirection: "row", alignSelf: "center", gap: 6, marginVertical: 10 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#C9D4FF" },
  dotActive: { backgroundColor: "#2E71FF" },

  form: { marginTop: 10, gap: 14 },

  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f3f4f6",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  selectText: { fontSize: 14, color: "#111827" },
  placeholder: { color: "#9ca3af" },

  dateRow: { flexDirection: "row", gap: 12 },
  dateInput: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  dateLabelsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -6,
  },
  labelSmall: { fontSize: 11, color: "#6b7280" },

  bookBtn: {
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#2E71FF",
    borderRadius: 999,
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  bookText: { color: "white", fontWeight: "700" },

  modalBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "#00000055",
  },
  modalSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    gap: 6,
  },
  modalTitle: { fontWeight: "700", fontSize: 16, marginBottom: 6 },

  modalItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  modalItemText: { fontSize: 14, color: "#111827" },
});
