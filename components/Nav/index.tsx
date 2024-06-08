import React from "react";
import { Text, Image } from "react-native";
import tw from "twrnc";

const NavBar = () => {
  return (
    <div
      style={tw`flex justify-between items-center border-top border-bottom w-full py-3`}
    >
      <Image source={require("../../assets/img/menu.svg")} />
      <div style={tw`flex gap-2 items-center`}>
        <Image
          style={tw`h-8 w-8`}
          source={require("../../assets/img/logo.png")}
        />
        <Text style={tw`text-slate-800 font-bold text-md`}>My Ai</Text>
      </div>

      <Image source={require("../../assets/img/refresh.svg")} />
    </div>
  );
};

export default NavBar;
