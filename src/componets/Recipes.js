import { Text, FlatList, View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RecipeCard from "./RecipeCard";
import Loading from "./Loading";

export default function Recipes({ categories, filteredRecipes }) {
  return (
  
   <View style={styles.gridItem}>
      <Text
        style={{ fontSize: hp(5.1), fontFamily: "Poppins_600SemiBold", marginTop:50, color:'violet', fontWeight:'bold' }}
      >
        Recipes
      </Text>
      {/***space between categories and recipes */}
      <View style={{minHeight: 30}}/>
      

      {filteredRecipes?.length === 0 || categories?.length === 0 ? (
        <Loading size="large"  />
      ) : (
        <FlatList
          nestedScrollEnabled={true}
          scrollEnabled={false}
          data={filteredRecipes}
          renderItem={({ item, index }) => (
            <RecipeCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.idMeal.toString()}
          numColumns={7}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -25,
    marginTop:10,
    backgroundColor: 'rgb(245, 239, 228)',
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width: 1250,
  }
  
});
