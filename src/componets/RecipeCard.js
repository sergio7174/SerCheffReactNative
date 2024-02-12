import { View, Text, Pressable, Image} from "react-native";
import { truncateString } from "../helpers/truncateString";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import PropTypes from 'prop-types';

RecipeCard.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
 
};

export default function RecipeCard({ item, index }) {
  
  const navigation = useNavigation();

  const selectMealHandler = () => {
    navigation.navigate("RecipeDetail", { ...item });
  };

  return (
    <View>
      <Pressable style={{margin:15}}
        key={index}
        
        onPress={selectMealHandler}
      >
        <View >
          <Image
            style={{ height: hp(20) }}
            source={{ uri: item?.strMealThumb }}
            
          />
        </View>
        <Text
          style={{ fontFamily: "Poppins_500Medium" }}
         
        >
          {truncateString(item?.strMeal, 20)}
        </Text>
      </Pressable>
    </View>
  );
}
