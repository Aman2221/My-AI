import React from "react";
import { View } from "react-native";
import tw from "twrnc";

const SearchCategory = () => {
  const categories = [
    "search",
    "healthcare",
    "acadmic",
    "financial",
    "investement",
    "Ethical",
    "Dark",
  ];
  return (
    <View style={tw`w-full pb-2`}>
      <div style={tw`flex overflow-x-scroll items-center w-full gap-2`}>
        {categories.map((category) => (
          <div
            key={category}
            style={tw`px-4 border-2 border-sky-500 py-2 capitalize bg-gray-100 text-md`}
          >
            {category}
          </div>
        ))}
      </div>
    </View>
  );
};

export default SearchCategory;
