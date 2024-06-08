import React from "react";
import { View, Image } from "react-native";
import tw from "twrnc";

const AskInput = () => {
  return (
    <View style={tw`w-full fixed bottom-0`}>
      <div style={tw`flex items-center w-full border `}>
        <div
          style={tw`flex items-center justify-center bg-blue-800 rounded-full h-10 w-14`}
        >
          <Image source={require("../../assets/img/chat-icon.png")} />
        </div>
        <div style={tw`flex w-full ml-2`}>
          <input
            style={tw`outline-none h-8 w-full`}
            type="text"
            name="prompt"
            placeholder="Ask me anything..."
          />
        </div>

        <div style={tw`flex gap-3 items-center pl-2`}>
          <Image source={require("../../assets/img/camera.svg")} />
          <Image source={require("../../assets/img/attach.svg")} />
          <Image source={require("../../assets/img/microphone.svg")} />
        </div>
      </div>
    </View>
  );
};

export default AskInput;
