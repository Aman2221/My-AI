import React from "react";
import { Text, View, Image } from "react-native";
import tw from "twrnc";
import NavBar from "../Nav";
import AskInput from "../AskInput";
const HomePage = () => {
  return (
    <View style={tw`flex flex-col justify-center items-center w-full h-screen`}>
      {/* Navbar start */}
      <NavBar />
      {/* Navnar end */}
      <Text style={tw`text-slate-800 font-bold text-lg mt-4 mb-10 text-center`}>
        Your every day AI compansion
      </Text>
      {/* Starter prompts start */}
      <View style={tw`flex-1 p-4`}>
        <View style={tw`flex flex-wrap flex-row -mx-2`}>
          <View style={tw`w-1/2 px-2 mb-4 `}>
            <View style={tw`bg-gray-200 p-4 rounded min-h-22`}>
              <Text style={tw` text-sm text-gray-700`}>
                When my last healthcare checkup?
              </Text>
            </View>
          </View>
          <View style={tw`w-1/2 px-1 mb-4 `}>
            <View style={tw`bg-gray-200 p-2 rounded min-h-22`}>
              <Text style={tw` text-sm text-gray-700`}>
                Show me CGPA mark at UG
              </Text>
            </View>
          </View>
          <View style={tw`w-1/2 px-1 mb-4 `}>
            <View style={tw`bg-gray-200 p-2 rounded min-h-22`}>
              <Text style={tw` text-sm text-gray-700`}>
                Last month debit and credit amount
              </Text>
            </View>
          </View>
          <View style={tw`w-1/2 px-1 mb-4 `}>
            <View style={tw`bg-gray-200 p-2 rounded min-h-22`}>
              <Text style={tw` text-sm text-gray-700`}>
                How much I earn in last year stock market?
              </Text>
            </View>
          </View>
          <View style={tw`w-1/2 px-1 mb-4 `}>
            <View style={tw`bg-gray-200 p-2 rounded min-h-22`}>
              <Text style={tw`text-sm text-gray-700`}>
                Last month USG Scan?
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* Ask section start */}
      <AskInput />
    </View>
  );
};

export default HomePage;
