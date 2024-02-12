import { View, Text} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import PropTypes from 'prop-types';
import {useTailwind} from 'tailwind-rn';

IngredientHeader.propTypes = {
  recipe: PropTypes.string,
  recipeDetail: PropTypes.string,
};

export default function IngredientHeader({ recipe, recipeDetail }) {
  const tailwind = useTailwind(); // to use tailwind with style
  return (
    <View style={tailwind('mx-4 pt-5')}>
      {/*** title of the recipe Begining block*/}
      <Text
        style={{ fontSize: hp(6), fontFamily: "Poppins_600SemiBold", color:'rgb(167, 116, 7)', textAlign:'center' }}
      >
        {recipe?.strMeal}
      </Text>
      {/*** title of the recipe block End*/}

      {recipeDetail.map((item, i) => (
        <Text
          key={i}
          style={{ fontSize: hp(4), fontFamily: "Poppins_400Regular", marginTop:20, textAlign:'justify', marginLeft:20, marginRight:20 }}>
          {item?.strInstructions}
        </Text>
      ))}
    </View>
  );
}
