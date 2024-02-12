import { View, Text, FlatList, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import BackButton from "../componets/BackButton";
import Favorites from "../componets/Favorites.js";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";


export default function FavoriteScreen() {
  const favorites = useSelector((state) => state.favorites.favoriteList);

  return (

  <SafeAreaView style={styles.OuterContainer}>
    <ScrollView style={styles.gridItem}>  
    <View
      className={`flex-1 h-40 ${
        favorites.length === 0 ? "bg-violet-400" : "bg-white"
      }`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 30 }}
    >
      <StatusBar style="light" />
      {/** title favorites block begining */}
      <View style={{backgroundColor:'violet', borderRadius:20, paddingTop:10}}>  
        <Text    
          style={{ fontSize: hp(4), fontFamily: "Poppins_600SemiBold", textAlign:'center', paddingBottom:10, }}
        >
          FAVORITES
        </Text>
      </View>
      {/** title favorites block End */}
      {/** If there arent favorites block begining */}
      {favorites.length === 0 ? (
        <View style={{backgroundColor:'rgb(213, 224, 245)', height:800, 
                      borderRadius:20}}>
          <View style={{display:'flex', justifyContent:'flex-start', flexDirection:'row' ,alignItems:'flex-start'}}>
          <View style={{marginLeft:20, marginTop:20}}>
            <BackButton />
          </View>
          <View style={{marginTop:20}}>
            Back
          </View>
          </View>
          <Text
            className="text-amber-400"
            style={{ fontSize: hp(2.6), fontFamily: "Poppins_600SemiBold", textAlign:'center' }}
          >
            Favorite Recipes Not Founded
          </Text>
        </View>
      ) : (  /** If there are favorites block begining */
     
      
         <View style={styles.gridItem}>
        {/***Back button */}
        <View style={{display:'flex', justifyContent:'flex-start', flexDirection:'row' ,alignItems:'flex-start'}}>
          <View style={{marginLeft:20, marginTop:20}}>
            <BackButton />
          </View>
          <View style={{marginTop:20}}>
            Back
          </View>
          </View>
       
          <view style={{marginLeft:20, marginRight:40,}}>
          <FlatList
            data={favorites}
            renderItem={({ item, index }) => (
              <Favorites item={item} index={index} />
            )}
          />
          </view>
        
         
        </View>
       
        

      
        )}  {/** If there arent favorites block End */}
    </View>
    </ScrollView>
      </SafeAreaView> 
  );
}
const styles = StyleSheet.create({
  gridItem: {
    margin: 0,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'rgb(213, 224, 245)',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width:1300,
    height: 1000,
    
  },
  OuterContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'none',
    height: 1000,
    
  },
  
});
