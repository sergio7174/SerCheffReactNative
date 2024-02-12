import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PropTypes from 'prop-types';

Category.propTypes = {
  item: PropTypes.any,
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.any,
};

export default function Category({ item, activeCategory, setActiveCategory }) {
  return (
    <TouchableOpacity
      onPress={() => setActiveCategory(item.strCategory)}
    >

      <View style={styles.gridItem}>
      
      <View  style={ activeCategory === item.strCategory
            ? {borderColor: 'black', borderWidth:2, borderRadius:10}
            : {borderColor: 'transparent'}}>
        <Image
          source={{ uri: item.strCategoryThumb }}
           /*** show background when the activeCategory is selected  ******/
          style={ activeCategory === item.strCategory
            ? {backgroundColor: 'darkgray', margin:2, padding:2,width: hp(9), height: hp(9)}
            : {backgroundColor: 'transparent', width: hp(9), height: hp(9),margin:5 }}
         
        />
      </View>
      <View  
            /*** show background when the activeCategory is selected  ******/
            style={activeCategory === item.strCategory
              ? {backgroundColor: 'darkgray', margin:2, padding:2}
              : {backgroundColor: 'transparent',}}>
        <Text
         
          style={{ fontSize: hp(1.7), fontFamily: "Poppins_500Medium" }}
        >
          {item.strCategory}
        </Text>
      </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    backgroundColor: 'rgb(245, 239, 228)',
  },
});
