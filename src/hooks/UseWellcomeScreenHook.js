import { useEffect } from "react";
import {
 // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// useSharedValue, Use this hook to create a reference to a JavaScript value that can be shared with worklets.
import { useSharedValue, withSpring } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/core";
import {useTailwind} from 'tailwind-rn';

export default function UseWellcomeScreenHook () {

    const tailwind = useTailwind();
  
  const innerCircle = useSharedValue(0);
  const centerCircle = useSharedValue(0);
  const outerCircle = useSharedValue(0);

  const navigation = useNavigation();

  useEffect(() => {
    innerCircle.value = 0;
    centerCircle.value = 0;
    outerCircle.value = 0;
    // inner circle animation
    setTimeout(
      () => (innerCircle.value = withSpring(innerCircle.value + hp(5))),
      100
    );

    // center circle animation
    setTimeout(
      () => (centerCircle.value = withSpring(centerCircle.value + hp(5))),
      300
    );

    // outer circle animation
    setTimeout(
      () => (outerCircle.value = withSpring(outerCircle.value + hp(6))),
      500
    );

    // navigate to home screen
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  }, []);

  return { tailwind, innerCircle, centerCircle, outerCircle};

}