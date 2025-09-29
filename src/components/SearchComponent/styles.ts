import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: { padding: 16, backgroundColor: "white" },
    searchBox: {
        backgroundColor: "#f0f2f5",
        height: 64,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
    },
    searchIcon: {
        width: 24,
        height: 24,
        borderRadius: 5,
        backgroundColor: "#cfd6e6",
        marginRight: 5,
    },
    textBlock: { flex: 1 },
    title: { fontWeight: "600", fontSize: 16 },
    meta: { color: "#828282", marginTop: 4 },
    editBtn: { padding: 8 },
    editText: { color: "#0554ca", fontWeight: "600" },
});
