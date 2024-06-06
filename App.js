import { View } from "react-native";
import tw from "twrnc";
import styles from "./assets/css/common.js";
import LogoPage from "./components/LogoPage/index.jsx";
import Walkthrough from "./components/Walkthrough/index.jsx";
import WalkthroughScreen2 from "./components/Walkthrough/WalkthroughScreen2.jsx";
import WalkthroughScreen3 from "./components/Walkthrough/WalkthroughScreen3.jsx";
import SignUpPage from "./components/AuthPages/Signup.jsx";
export default function App() {
  return (
    <View style={styles.container}>
      {/*<LogoPage />
      <WalkthroughScreen3 />*/}
      <SignUpPage />
    </View>
  );
}
