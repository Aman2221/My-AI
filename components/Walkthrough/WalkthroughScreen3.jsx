import React from "react";
import { Text, Image } from "react-native";
import tw from "twrnc";

const WalkthroughScreen3 = () => {
  return (
    <div style={tw`flex items-center justify-center flex-col w-full`}>
      <Image source={require("../../assets/img/walk2.png")} />
      <Text style={tw`text-slate-800 font-normal text-2xl text-center`}>
        Walkthrough 3
      </Text>
      <Text style={tw`max-w-80 text-center mt-3`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </Text>
      <button
        style={tw`bg-blue-800 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-4`}
      >
        Get Started
      </button>
    </div>
  );
};

export default WalkthroughScreen3;
