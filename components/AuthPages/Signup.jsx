import React from "react";
import { Text, Image } from "react-native";
import tw from "twrnc";

const SignUpPage = () => {
  return (
    <div style={tw`flex items-center justify-center flex-col w-full`}>
      <Image source={require("../../assets/img/logo.png")} />
      <Text style={tw`text-slate-800 font-normal text-lg text-center`}>
        Welcome Back
      </Text>
      <input
        type="text"
        id="first_name"
        style={tw`mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-14 w-full outline-none `}
        placeholder="John"
        required
      />
    </div>
  );
};

export default SignUpPage;
