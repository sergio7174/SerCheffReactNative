import { View, Image, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BackButton from "../componets/BackButton";
import FavButton from "../componets/FavButton";
import Loading from "../componets/Loading";
import IngredientHeader from "../componets/IngredientHeader";
import YoutubeVideo from "../componets/YoutubeVideo";
import PropTypes from 'prop-types';
import UseRecipeDetailScreenHook from "hooks/UseRecipeDetailScreenHook";


RecipeDetailScreen.propTypes = {
  route: PropTypes.string,
};

export default function RecipeDetailScreen({route}) {


  const{tailwind, recipeDetail, loading, recipe}= UseRecipeDetailScreenHook({route});

  return (
    <ScrollView
      style={styles.gridItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}>
        <StatusBar style="light" />
       {/**** image Block begining */}
        <View style={styles.Recipegrid}>
        <Image
          style={{
            width: wp(70),
            height: hp(80),
            borderRadius:40,
            
          }}
          source={{ uri: recipe.strMealThumb }}
        />
      </View>
      {/****image Block End */}

    {/**** Buttons Block begining */}
    <view style={tailwind('flex  pt-12')}>
      <View style={tailwind('pt-6 pl-20')}>
        <BackButton/>Back
      </View>  
      <View style={tailwind('pt-6 pl-20')}>
        <FavButton recipe={recipe} recipeDetail={recipeDetail}/>Favorites
      </View>
    </view>
    {/**** Buttons Block End */}
      {loading ? (
        <Loading size="large" className="mt-16" />
      ) : (
        <View style={{marginTop:30}}>
          <IngredientHeader recipe={recipe} recipeDetail={recipeDetail} />
          <YoutubeVideo recipeDetail={recipeDetail} />
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    width: 1250,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'rgb(213, 224, 245)',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  Recipegrid: {
    flex: 1,
    flexDirection: 'row',
    alignSelf:'center',
    marginTop: 20,
    minHeight: 200,
    borderRadius: 8,
    backgroundColor: 'rgb(245, 239, 228);',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width: 800,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
