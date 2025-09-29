import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    row: { flexDirection: "row", paddingHorizontal: 16, gap: 8, marginTop: 8 },
    chip: {
        backgroundColor: "white",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#e6e6e6",
    },
    chipText: { fontWeight: "500" },
});
