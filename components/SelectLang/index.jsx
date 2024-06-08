import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

const SelectLang = () => {
  const [options, setOptions] = useState([
    { name: "Country / Region", value: "India" },
    { name: "Display language", value: "English" },
    { name: "Speech language", value: "English (india)" },
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
        {options.map((account) => (
          <div
            key={account.name}
            style={tw`flex justify-between items-center mt-1 bg-gray-100 p-3`}
          >
            <Text style={tw`text-slate-800 font-medium text-lg leading-6`}>
              {account.name}
            </Text>
            <Text style={tw`text-blue-800 font-medium text-sm`}>
              {account.value}
            </Text>
          </div>
        ))}
      </div>
    </View>
  );
};

export default SelectLang;
