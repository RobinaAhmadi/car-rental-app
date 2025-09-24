import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image: {
        height: 200,
        borderRadius: 8,
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 8,
    },
    card: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 8,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 3,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    spec: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
    },
    detail: {
        marginLeft: 6,
        fontSize: 14,
        color: "#555",
    },
});
