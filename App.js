import { View } from "react-native";
import tw from "twrnc";
import styles from "./assets/css/common.js";
import LogoPage from "./components/LogoPage/index.jsx";
import Walkthrough from "./components/Walkthrough/index.jsx";
import WalkthroughScreen2 from "./components/Walkthrough/WalkthroughScreen2.jsx";
import WalkthroughScreen3 from "./components/Walkthrough/WalkthroughScreen3.jsx";
import SignUpPage from "./components/AuthPages/Signup.jsx";
import WelcomePage from "./components/Welcome/index.jsx";
import SearchConnection from "./components/SearchCon/index.jsx";
import HomePage from "./components/HomePage/index.jsx";
import Chat from "./components/Chat/index.jsx";
import SearchResult from "./components/SearchResult/index.jsx";
import SideBar from "./components/SideBar/index.jsx";
import LinkedAccounts from "./components/LinkedAccount/index.jsx";
import ChooseTheme from "./components/Theme/index.jsx";
import SelectLang from "./components/SelectLang/index.jsx";
import Privacy from "./components/Privacy/index.jsx";
import Feedback from "./components/Feedback/index.jsx";
import About from "./components/About/index.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./components/Account/index.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/*
      <WalkthroughScreen3 />
      <SignUpPage />
      <SearchConnection />
      <WelcomePage />
       <LogoPage />
       <HomePage />
       <Chat />
       <SearchResult />
       <SideBar />
      <LinkedAccounts />
      <ChooseTheme />
      <SelectLang />
      <Privacy />
      <About />
      */}
      <NavigationContainer style={tw`bg-white`}>
        <Stack.Navigator initialRouteName="Walkthrough1" style={tw`bg-white`}>
          <Stack.Screen
            style={tw`bg-white`}
            name="logoPage"
            component={LogoPage}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="Walkthrough1"
            component={Walkthrough}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="Walkthrough2"
            component={WalkthroughScreen2}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="Walkthrough3"
            component={WalkthroughScreen3}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="SignUp"
            component={SignUpPage}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="Welcome"
            component={WelcomePage}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="Account"
            component={Account}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="Loding"
            component={SearchConnection}
          />
          <Stack.Screen style={tw`bg-white`} name="Home" component={HomePage} />
          <Stack.Screen style={tw`bg-white`} name="Chat" component={Chat} />

          <Stack.Screen
            style={tw`bg-white`}
            name="SearchResult"
            component={SearchResult}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="LinkedAccounts"
            component={LinkedAccounts}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="Theme"
            component={ChooseTheme}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="SelectLanguage"
            component={SelectLang}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="Policy"
            component={Privacy}
          />
          <Stack.Screen
            style={tw`bg-white`}
            name="Feedback"
            component={Feedback}
          />
          <Stack.Screen style={tw`bg-white`} name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
