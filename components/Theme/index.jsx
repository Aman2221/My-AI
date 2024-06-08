import React, { useState } from "react";
import { View, Text, Image, Switch } from "react-native";
import tw from "twrnc";

const ChooseTheme = () => {
  const [accounts, setAccounts] = useState([
    { name: "Light", isAllowed: false, imgSrc: "../../assets/img/light.svg" },
    { name: "Dark", isAllowed: false, imgSrc: "../../assets/img/dark.svg" },
    {
      name: "Automatic",
      isAllowed: true,
      imgSrc: "../../assets/img/auto.svg",
    },
  ]);

  const toggleTheme = (i) => {
    console.log("Ac", accounts[i]);
    accounts[i].isAllowed = !accounts[i].isAllowed;
    setAccounts([...accounts]);
  };
  return (
    <View style={tw`w-full h-screen`}>
      <div style={tw`flex justify-between items-center mt-2`}>
        <Image
          style={tw`h-8 w-8`}
          source={require("../../assets/img/back.svg")}
        />
        <Text style={tw`text-slate-800 font-medium text-lg leading-6`}>
          Theme
        </Text>
        <Text></Text>
      </div>
      <div style={tw`mt-2`}>
        {accounts.map((account, index) => (
          <div
            key={account.name}
            style={tw`flex justify-between items-center mt-1 bg-gray-100 p-3`}
          >
            <Image style={tw`h-6 w-6`} source={account.imgSrc} />
            <Text style={tw`text-slate-800 font-medium text-lg leading-6`}>
              {account.name}
            </Text>
            <Switch
              value={account.isAllowed}
              onClick={() => toggleTheme(index)}
            />
          </div>
        ))}
      </div>
    </View>
  );
};

export default ChooseTheme;
