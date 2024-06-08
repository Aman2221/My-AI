import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import NavBar from "../Nav";
import AskInput from "../AskInput";

const Chat = () => {
  return (
    <View style={tw`w-full h-screen`}>
      <NavBar />

      <div style={tw`w-full bottom-0`}>
        <AskInput />
      </div>
    </View>
  );
};

export default Chat;
