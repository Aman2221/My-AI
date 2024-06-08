import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

const Feedback = () => {
  const [options, setOptions] = useState([
    { name: "I like something", imgSrc: "../../assets/img/smile.svg" },
    { name: "I don’t like something", imgSrc: "../../assets/img/rude.svg" },
    { name: "I have a suggestion", imgSrc: "../../assets/img/suggest.svg" },
  ]);

  return (
    <View style={tw`w-full h-screen`}>
      <div style={tw`flex justify-between items-center mt-2`}>
        <Image
          style={tw`h-8 w-8`}
          source={require("../../assets/img/back.svg")}
        />
        <Text style={tw`text-slate-800 font-medium text-lg leading-6`}>
          Feedback
        </Text>
        <Text></Text>
      </div>
      <div style={tw`mt-2`}>
        {options.map((item) => (
          <div
            key={item.name}
            style={tw`flex justify-start gap-3 items-center mt-1 bg-gray-100 p-3`}
          >
            <Image style={tw`h-6 w-6`} source={item.imgSrc} />
            <Text style={tw`text-slate-800 font-medium text-lg leading-6`}>
              {item.name}
            </Text>
          </div>
        ))}
      </div>
    </View>
  );
};

export default Feedback;
