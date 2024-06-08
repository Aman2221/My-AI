import React, { useState } from "react";
import { View, Text, Image, Switch } from "react-native";
import tw from "twrnc";

const LinkedAccounts = () => {
  const [accounts, setAccounts] = useState([
    { name: "SMS", isAllowed: true },
    { name: "Linkedin", isAllowed: true },
    { name: "Outlook", isAllowed: true },
    { name: "Gmail", isAllowed: true },
    { name: "SMS", isAllowed: true },
    { name: "Phone pay", isAllowed: true },
    { name: "G-pay", isAllowed: true },
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
          Linked Accounts
        </Text>
        <Text></Text>
      </div>
      <div style={tw`mt-2`}>
        {accounts.map((account, index) => (
          <div
            key={account.name}
            style={tw`flex justify-between items-center mt-1 bg-gray-100 p-3`}
          >
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

export default LinkedAccounts;
