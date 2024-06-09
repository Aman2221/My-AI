import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    fontFamily: "Poppins-Regular",
    paddingLeft: 20,
    paddingRight: 20,
  },
  showSidebar: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(255,255,255,1)",
    zIndex: 1000000,
  },
});
