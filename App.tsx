import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import { AppContainer } from "./src/styles";
import Routes from "./src/routes";
import { SafeAreaView } from "react-native/types";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) <AppLoading />;

  return (
      <AppContainer>
        <Routes />
        <StatusBar style="auto" />
      </AppContainer>
  );
}
