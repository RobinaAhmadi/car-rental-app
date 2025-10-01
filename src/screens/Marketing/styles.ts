import { StyleSheet, Dimensions, Platform } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0B0B0F",
  },

  content: {
    flex: 1,
    position: "relative",
  },

  title: {
    position: "absolute",
    top: 148,
    left: 24,
    right: 24,
    fontFamily: "Inter_400Regular",
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 44,
    color: "#FFFFFF",
    maxWidth: 281,
  },

  subtitle: {
    position: "absolute",
    top: 260,
    left: 24,
    right: 24,
    fontFamily: "Inter_400Regular",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
    color: "#FFFFFF",
    maxWidth: 281,
  },

  car: {
    position: "absolute",
    top: 370,
    left: -60,
    width: 484,
    height: 264,
    resizeMode: "contain",
  },

  cta: {
    position: "absolute",
    top: 720,
    width: 231,
    height: 37,
    backgroundColor: "#0554CA",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center", 
  },


  ctaText: {
    fontFamily: "Inter_700Regular",
    fontWeight: 700,
    fontSize: 12,
    color: "#FFFFFF",
  },

  bottomOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 260,             
    backgroundColor: "#1A1A1C", 
    zIndex: -1,
  },              
});
