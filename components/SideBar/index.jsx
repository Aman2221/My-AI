import React from "react";
import { Text, Image } from "react-native";
import tw from "twrnc";

const SideBar = () => {
  return (
    <div style={tw`bg-white shadow-lg`}>
      <div
        style={tw`flex items-center justify-start gap-4 mt-2 bg-blue-500 px-3 py-3`}
      >
        <Image
          style={tw`h-8 w-8 rounded-full`}
          source={require("../../assets/img/avatar.png")}
        />
        <Text style={tw`text-white font-bold text-lg leading-6`}>
          Aman Singh
        </Text>
      </div>
      <div className="accounts-menu">
        <div style={tw`bg-gray-100 p-3`}>
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            Accounts
          </Text>
        </div>
        <div style={tw`flex gap-4 items-center p-3`}>
          <Image
            style={tw`h-6 w-6`}
            source={require("../../assets/img/send.svg")}
          />
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            charles1997@gmail.com
          </Text>
          <div style={tw`w-full flex justify-end`}>
            <button
              style={tw`border-0 border-none outline-none bg-gray-100 text-blue-500 font-normal text-md p-2`}
            >
              Sign out
            </button>
          </div>
        </div>
        <div style={tw`flex gap-4 items-center p-3`}>
          <Image
            style={tw`h-6 w-6`}
            source={require("../../assets/img/send.svg")}
          />
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            Phone number
          </Text>
        </div>
      </div>
      <div className="preferences-menu">
        <div style={tw`bg-gray-100 p-3`}>
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            Preferences
          </Text>
        </div>
        <div style={tw`flex gap-4 items-center p-3`}>
          <Image
            style={tw`h-6 w-6`}
            source={require("../../assets/img/theme.svg")}
          />
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            Theme
          </Text>
        </div>
        <div style={tw`flex gap-4 items-center p-3`}>
          <Image
            style={tw`h-6 w-6`}
            source={require("../../assets/img/language.svg")}
          />
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            Region and language
          </Text>
        </div>
        <div style={tw`flex gap-4 items-center p-3`}>
          <Image
            style={tw`h-6 w-6`}
            source={require("../../assets/img/lock.svg")}
          />
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            Linked Account
          </Text>
        </div>
        <div style={tw`flex gap-4 items-center p-3`}>
          <Image
            style={tw`h-6 w-6`}
            source={require("../../assets/img/insurance.svg")}
          />
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            Privacy
          </Text>
        </div>
      </div>

      <div className="advanced-menu">
        <div style={tw`bg-gray-100 p-3`}>
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            Advanced
          </Text>
        </div>
        <div style={tw`flex gap-4 items-center p-3`}>
          <Image
            style={tw`h-6 w-6`}
            source={require("../../assets/img/favorite.svg")}
          />
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            Feedback
          </Text>
        </div>
        <div style={tw`flex gap-4 items-center p-3`}>
          <Image
            style={tw`h-6 w-6`}
            source={require("../../assets/img/info-button.svg")}
          />
          <Text style={tw`text-slate-800 font-bold text-md leading-6`}>
            About
          </Text>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
