import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

const Privacy = () => {
  const [options, setOptions] = useState([
    "Privacy Statement",
    "Privacy Dashboard",
    "Clear app data",
    "Block ads",
    "Delete account",
  ]);

  return (
    <View style={tw`w-full h-screen`}>
      <div style={tw`flex justify-between items-center mt-2`}>
        <Image
          style={tw`h-8 w-8`}
          source={require("../../assets/img/back.svg")}
        />
        <Text style={tw`text-slate-800 font-medium text-lg leading-6`}>
          Region and language
        </Text>
        <Text></Text>
      </div>
      <div style={tw`mt-2`}>
        {options.map((item) => (
          <div
            key={item}
            style={tw`flex justify-between items-center mt-1 bg-gray-100 p-3`}
          >
            <Text style={tw`text-slate-800 font-medium text-lg leading-6`}>
              {item}
            </Text>
          </div>
        ))}
      </div>
    </View>
  );
};

export default Privacy;
