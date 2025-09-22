import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fill: { flex: 1 },
    centerWrap: { flex: 1, alignItems: "center", justifyContent: "center", padding: 16 },
    authWrapper: { width: "100%", maxWidth: 384 },

    header: { alignItems: "center", marginBottom: 24 },
    logoCircle: {
        backgroundColor: "#fff",
        borderRadius: 999,
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },
    title: { color: "#fff", fontSize: 24, fontWeight: "700" },
    subtitle: { color: "#bfdbfe", marginTop: 4 },

    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 8,
        elevation: 3,
    },
    cardHeader: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 8, alignItems: "center" },
    cardTitle: { fontSize: 16, fontWeight: "600" },
    cardContent: { paddingHorizontal: 24, paddingBottom: 24 },

    tabsList: {
        flexDirection: "row",
        backgroundColor: "#ececf0",
        borderRadius: 6,
        padding: 4,
        height: 36,
        marginTop: 12,
        marginBottom: 16,
    },
    tabBtn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
    tabBtnActive: {
        backgroundColor: "#fff",
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 2,
    },
    tabText: { color: "#717182", fontWeight: "600" },
    tabTextActive: { color: "#030213" },

    formSection: { gap: 16 },
    inputGroup: { gap: 10 },

    input: {
        height: 40,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        backgroundColor: "#f3f3f5",
        paddingHorizontal: 12,
        fontSize: 14,
    },
    inputFocus: {
        borderColor: "#717182",
        // simple "ring" effect
        shadowColor: "#717182",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        elevation: 1,
    },

    button: {
        height: 40,
        borderRadius: 6,
        backgroundColor: "#030213",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: { color: "#fff", fontWeight: "600" },

    buttonOutline: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
    },
    buttonOutlineText: { color: "#030213" },

    guestSection: { marginTop: 16, paddingTop: 16, borderTopWidth: 1, borderTopColor: "#e5e7eb" },
});
