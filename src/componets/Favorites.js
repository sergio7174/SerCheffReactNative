import { View, Text, Pressable, Image } from "react-native";
import RemoveFav from "./RemoveFav";

export default function Favorites({ item, index }) {
  return (
    <View>
      <Pressable key={index} className="w-full mb-8 X  ">
        <View 
           style={{flexDirection:'row', justifyContent:'center'}}>

          <Image
            style={{
              height: 250,
              width:400,
              borderRadius:35
            }}
            source={{ uri: item?.strMealThumb }}
            className="flex-1  bg-white"
          />
        </View>
        <View 
              style={{flexDirection:'row', justifyContent:'center', marginTop:5, marginBottom:5}}>
          <RemoveFav item={item} />
        </View>
        <View className="bg-violet-500">
          <Text
            style={{ fontFamily: "Poppins_500Medium", textAlign:'center' }}
            
          >
            {item?.strMeal}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
