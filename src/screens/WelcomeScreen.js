import { StatusBar } from "expo-status-bar";
import { View, Image, Text, StyleSheet, Platform  } from "react-native";
import {
 // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// useSharedValue, Use this hook to create a reference to a JavaScript value that can be shared with worklets.
import Animated from "react-native-reanimated";
import  UseWellcomeScreenHook from "hooks/UseWellcomeScreenHook";

export default function WelcomeScreen() {

  const { tailwind, innerCircle, centerCircle, outerCircle} = UseWellcomeScreenHook();

  return (
    
    <View style={styles.gridItem}>
      <StatusBar style="light" />
      {/*** Chef Image animation block begining */}
      <Animated.View style={{ padding: outerCircle}}>
        <Animated.View style={{ padding: centerCircle }}>
          <Animated.View style={{ padding: innerCircle }}>
            
            <Image
              style={{ width: hp(30), height: hp(30), backgroundColor:'violet', borderRadius:100, borderColor:'violet', borderWidth:10 }}
              source={require("../../assets/images/chef03wbg.png")}/>

          </Animated.View>
        </Animated.View>
      </Animated.View>
   {/*** Chef Image animation block End */}
   {/*** Chef Text animation block Begining */}   
      <View style={styles.gridItemBackground2} >
        <Text
          style={{
            fontSize: hp(6),
            fontFamily: "Poppins_700Bold",
          }}>
          Master <Text  style={tailwind('text-amber-400')}> Chef</Text>
        </Text>
        <Text
          style={{ fontSize: hp(2), fontFamily: "Poppins_500Medium" }}>
          I hope you enjoy the recipe!
        </Text>
      </View>
      {/*** Chef Text animation block End */}
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'aliceblue',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  gridItemBackground2: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'rgb(82, 166, 240)',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  
});
