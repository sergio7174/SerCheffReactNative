import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BookmarkIcon } from "react-native-heroicons/solid";
import Categories from "../componets/Categories";
import Recipes from "../componets/Recipes";
import SearchBar from "../componets/SearchBar";
import HomeScreenHook from "hooks/UseHomeScreenHook";

export default function HomeScreen() {

  const{tailwind, activeCategory, setActiveCategory, categories, setCategories,    
    recipes, setRecipes, query, setQuery, navigation } = HomeScreenHook();
  

  const filteredRecipes = recipes?.meals?.filter((recipe) =>
    recipe.strMeal.toLowerCase().includes(query)
  );


  return (
   
    <ScrollView style={styles.gridItem} > {/** To Scroll All View */}
      <StatusBar style="dark" />

      <View  style={tailwind('space-y-12 pt-14 pl-20')}>
        {/***chef image - favorites Block begining */}
        <View style={tailwind('mx-4 flex-row justify-center items-center mb-2')}>
          <View style={tailwind('bg-violet-500 p-5 m-5 rounded-full')}>
            <Image
              style={{ height: hp(18.5), width: hp(18.5) }}
              source={require("../../assets/images/chef03wbg.png")}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Favorite")} style={{padding:40}}>
            <BookmarkIcon size={hp(8)} color="#a78bfa" />
          </TouchableOpacity>
        </View>
        {/***chef image - favorites Block Ending */}

      {/* begining welcome block **/}
       
        <View style={styles.innerContainer}> 
          <View>
            <Text
              style={{ fontSize: hp(3.4), fontFamily: "Poppins_500Medium", }}
              
            >
              Become the{" "}
              <Text
                style={{ fontSize: hp(3.6), fontFamily: "Poppins_600SemiBold" }}
                
              >
                masterchef
              </Text>{" "}
              in
            </Text>
          </View>
          <Text
            style={{ fontSize: hp(3.4), fontFamily: "Poppins_500Medium" }}
           
          >
            your own{" "}
            <Text
              style={{ fontSize: hp(3.6), fontFamily: "Poppins_600SemiBold" }}
             
            >
              kitchen
            </Text>
          </Text>
        </View>

       {/* End welcome block **/}

       {/* SearchBar Begining block **/}
       <View style={styles.innerContainer}>
        <SearchBar setQuery={setQuery} query={query}/>
        </View>
        {/* SearchBar End block **/}
         {/* categories block Begining**/}
        <View style={styles.Categoriesgrid}>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </View>
         {/* categories block Ending **/}
        <View>
          <Recipes filteredRecipes={filteredRecipes} categories={categories} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 0,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'rgb(213, 224, 245)',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  Categoriesgrid: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: -25,
    //height: 550,
    minHeight: 80,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'rgb(245, 239, 228);',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width: 1250,
    //width: 1150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'none',
   
  },
  activeCategorie: {
    borderColor:'black',
    borderWidth: 3,
    borderRadius:8,
  },

});
