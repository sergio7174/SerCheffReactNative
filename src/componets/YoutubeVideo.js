import { View, Text, StyleSheet, ScrollView } from "react-native";
import { heightPercentageToDP as hp,widthPercentageToDP as wp, } from "react-native-responsive-screen";
import YouTubeIframe from "react-native-youtube-iframe";
import PropTypes from 'prop-types';

YoutubeVideo.propTypes = {
  recipeDetail: PropTypes.string,
};



export default function YoutubeVideo({ recipeDetail }) {
  const link = recipeDetail?.map((item) => item.strYoutube);

  const youtubeID = link?.join("").split(`https://www.youtube.com/watch?v=`)[1];

  return (
    <ScrollView style={styles.YoutubeVideoContainer}>
      {link?.length > 0 && (
        <View>
          <Text
            style={{ fontSize: hp(4), textAlign:'center' }}
          >
            Recipe Video
          </Text>

          <View style={styles.RecipeVideo}>
            <YouTubeIframe videoId={youtubeID} height={hp(35)} width={wp(35)} />
          </View>
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  YoutubeVideoContainer: {
    flex: 1,
    alignSelf:'center',
    height: 750,
    width: 1100,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'rgb(213, 224, 245)',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    marginTop:20
  },
  RecipeVideo: {
    flex: 1,
    //flexDirection: 'row',
    alignSelf:'center',
    height: 450,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: 'rgb(245, 239, 228);',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
