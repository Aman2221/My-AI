import React from "react";
import { Text, Image } from "react-native";
import tw from "twrnc";

const SignUpPage = ({ navigation }) => {
  return (
    <div style={tw`flex items-center justify-center flex-col w-full`}>
      <Image source={require("../../assets/img/logo.png")} />
      <Text style={tw`text-slate-800 font-normal text-lg text-center`}>
        Welcome Back
      </Text>
      <input
        type="text"
        id="first_name"
        style={tw`mt-4 px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-10 w-full outline-none border-none`}
        placeholder="Email Address"
        required
      />
      <button
        style={tw`bg-blue-500 border-0 hover:bg-blue-700 text-white font-bold py-2 rounded outline-none border-none w-full mt-3`}
      >
        Continue
      </button>
      <Text style={tw`text-center mt-3`}>
        Didn’t have an account ?
        <Text
          style={tw`text-center mt-3 text-blue-500`}
          onClick={() => navigation.navigate("Account")}
        >
          &nbsp;Sign up
        </Text>
      </Text>
      <div style={tw`my-3 flex items-center`}>
        <p style={tw`mb-0 text-center font-semibold`}>OR</p>
      </div>
      <div
        style={tw`my-3 flex items-center w-full gap-3 bg-gray-100 p-3 rounded-md`}
      >
        <Image
          style={tw`h-8 w-8 p-0 m-0`}
          source={require("../../assets/img/google.png")}
        />
        <Text style={tw`text-center`}>Continue with Google</Text>
      </div>
      <div
        style={tw`my-3 flex items-center w-full gap-3 bg-gray-100 p-3 rounded-md`}
      >
        <Image
          style={tw`h-8 w-8 p-0 m-0`}
          source={require("../../assets/img/micro.webp")}
        />
        <Text style={tw`text-center`}>Continue with Mircrosoft</Text>
      </div>
    </div>
  );
};

export default SignUpPage;
