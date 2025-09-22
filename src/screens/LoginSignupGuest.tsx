// LoginSignupGuest.tsx
import React, { useMemo, useState } from "react";
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    useColorScheme,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

/* ---------- Types ---------- */
type LoginData = { email: string; password: string };
type SignupData = { firstName: string; lastName: string; email: string; password: string; confirmPassword: string };

export type LoginSignupGuestProps = {
    onLogin?: (data: LoginData) => Promise<void> | void;
    onSignup?: (data: SignupData) => Promise<void> | void;
    onContinueAsGuest?: () => void;
    isLoading?: boolean;
    brandName?: string; // default "CarRental"
    subtitle?: string;  // default "Your journey starts here"
};

/* ---------- Component ---------- */
export default function LoginSignupGuest({
                                             onLogin,
                                             onSignup,
                                             onContinueAsGuest,
                                             isLoading: isLoadingExternal,
                                             brandName = "CarRental",
                                             subtitle = "Your journey starts here",
                                         }: LoginSignupGuestProps) {
    const scheme = useColorScheme();
    const t = useMemo(() => (scheme === "dark" ? darkTheme : lightTheme), [scheme]);

    const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
    const [isLoadingLocal, setIsLoadingLocal] = useState(false);
    const isLoading = isLoadingExternal ?? isLoadingLocal;

    // login state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // signup state
    const [fullName, setFullName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [focused, setFocused] = useState<string | null>(null);

    const handleLogin = async () => {
        if (!onLogin) return;
        setIsLoadingLocal(true);
        try {
            await onLogin({ email, password });
        } finally {
            setIsLoadingLocal(false);
        }
    };

    const handleSignup = async () => {
        if (!onSignup) return;
        if (!fullName || !signupEmail || !signupPassword) {
            alert("Please fill out all fields.");
            return;
        }
        if (signupPassword !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        // split name into first/last (simple split)
        const [firstName, ...rest] = fullName.trim().split(" ");
        const lastName = rest.join(" ");
        setIsLoadingLocal(true);
        try {
            await onSignup({ firstName, lastName, email: signupEmail, password: signupPassword, confirmPassword });
        } finally {
            setIsLoadingLocal(false);
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.select({ ios: "padding" })} style={{ flex: 1 }}>
            <LinearGradient colors={["#2563eb", "#1e40af"]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={styles.fill}>
                <View style={styles.centerWrap}>
                    <View style={styles.authWrapper}>
                        {/* Header */}
                        <View style={styles.header}>
                            <View style={styles.logoCircle}>
                                <Ionicons name="car-outline" size={36} color="#2563eb" />
                            </View>
                            <Text style={styles.title}>{brandName}</Text>
                            <Text style={styles.subtitle}>{subtitle}</Text>
                        </View>

                        {/* Card */}
                        <View style={[styles.card, { shadowColor: t.shadow }]}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>Welcome</Text>
                            </View>

                            <View style={styles.cardContent}>
                                {/* Tabs */}
                                <View style={styles.tabsList}>
                                    <TouchableOpacity
                                        activeOpacity={0.85}
                                        style={[styles.tabBtn, activeTab === "login" && styles.tabBtnActive]}
                                        onPress={() => setActiveTab("login")}
                                    >
                                        <Text style={[styles.tabText, activeTab === "login" && styles.tabTextActive]}>Login</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        activeOpacity={0.85}
                                        style={[styles.tabBtn, activeTab === "signup" && styles.tabBtnActive]}
                                        onPress={() => setActiveTab("signup")}
                                    >
                                        <Text style={[styles.tabText, activeTab === "signup" && styles.tabTextActive]}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Login form */}
                                {activeTab === "login" && (
                                    <View style={styles.formSection}>
                                        <View style={styles.inputGroup}>
                                            <TextInput
                                                placeholder="Email"
                                                placeholderTextColor="#8a8fa3"
                                                value={email}
                                                onChangeText={setEmail}
                                                onFocus={() => setFocused("login-email")}
                                                onBlur={() => setFocused(null)}
                                                autoCapitalize="none"
                                                keyboardType="email-address"
                                                style={[
                                                    styles.input,
                                                    focused === "login-email" && styles.inputFocus,
                                                ]}
                                            />
                                            <TextInput
                                                placeholder="Password"
                                                placeholderTextColor="#8a8fa3"
                                                value={password}
                                                onChangeText={setPassword}
                                                onFocus={() => setFocused("login-password")}
                                                onBlur={() => setFocused(null)}
                                                secureTextEntry
                                                style={[
                                                    styles.input,
                                                    focused === "login-password" && styles.inputFocus,
                                                ]}
                                            />
                                        </View>

                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={handleLogin}
                                            disabled={isLoading}
                                            style={[styles.button, isLoading && { opacity: 0.7 }]}
                                        >
                                            {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Login</Text>}
                                        </TouchableOpacity>
                                    </View>
                                )}

                                {/* Signup form */}
                                {activeTab === "signup" && (
                                    <View style={styles.formSection}>
                                        <View style={styles.inputGroup}>
                                            <TextInput
                                                placeholder="Full Name"
                                                placeholderTextColor="#8a8fa3"
                                                value={fullName}
                                                onChangeText={setFullName}
                                                onFocus={() => setFocused("signup-name")}
                                                onBlur={() => setFocused(null)}
                                                style={[styles.input, focused === "signup-name" && styles.inputFocus]}
                                            />
                                            <TextInput
                                                placeholder="Email"
                                                placeholderTextColor="#8a8fa3"
                                                value={signupEmail}
                                                onChangeText={setSignupEmail}
                                                onFocus={() => setFocused("signup-email")}
                                                onBlur={() => setFocused(null)}
                                                autoCapitalize="none"
                                                keyboardType="email-address"
                                                style={[styles.input, focused === "signup-email" && styles.inputFocus]}
                                            />
                                            <TextInput
                                                placeholder="Password"
                                                placeholderTextColor="#8a8fa3"
                                                value={signupPassword}
                                                onChangeText={setSignupPassword}
                                                onFocus={() => setFocused("signup-password")}
                                                onBlur={() => setFocused(null)}
                                                secureTextEntry
                                                style={[styles.input, focused === "signup-password" && styles.inputFocus]}
                                            />
                                            <TextInput
                                                placeholder="Confirm Password"
                                                placeholderTextColor="#8a8fa3"
                                                value={confirmPassword}
                                                onChangeText={setConfirmPassword}
                                                onFocus={() => setFocused("signup-confirm")}
                                                onBlur={() => setFocused(null)}
                                                secureTextEntry
                                                style={[styles.input, focused === "signup-confirm" && styles.inputFocus]}
                                            />
                                        </View>

                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={handleSignup}
                                            disabled={isLoading}
                                            style={[styles.button, isLoading && { opacity: 0.7 }]}
                                        >
                                            {isLoading ? (
                                                <ActivityIndicator color="#fff" />
                                            ) : (
                                                <Text style={styles.buttonText}>Create Account</Text>
                                            )}
                                        </TouchableOpacity>
                                    </View>
                                )}

                                {/* Guest */}
                                <View style={styles.guestSection}>
                                    <TouchableOpacity
                                        activeOpacity={0.9}
                                        onPress={onContinueAsGuest}
                                        style={[styles.button, styles.buttonOutline]}
                                    >
                                        <Text style={[styles.buttonText, styles.buttonOutlineText]}>Continue as Guest</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
}

/* ---------- Theme ---------- */
type Theme = { shadow: string };
const lightTheme: Theme = { shadow: "#000" };
const darkTheme: Theme = { shadow: "#000" };

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
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
