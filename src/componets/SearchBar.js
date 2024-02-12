import { TextInput, View } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {useTailwind} from 'tailwind-rn';

export default function SearchBar({ query, setQuery }) {
  const tailwind = useTailwind();
  return (
    <View 
    style={tailwind('flex-row bg-amber-400/80 items-center  rounded-full')}>

      <TextInput
        autoCapitalize="none"
        placeholder="Search any recipe"
        placeholderTextColor={"#7c65c2"}
        style={{ fontSize: hp(3), fontFamily: "Poppins_600SemiBold", paddingLeft:15, outline:'none',
          
}}
        className="flex-1 text-base pl-3 text-[#7c65c2]"
        onChangeText={(query) => setQuery(query)}
        defaultValue={query}
      />
      <View 
         style={tailwind('bg-violet-500 rounded-full p-3.5')}>
        <MagnifyingGlassIcon size={hp(2.5)} color="white" strokeWidth={3} />
      </View>
    </View>
  );
}
