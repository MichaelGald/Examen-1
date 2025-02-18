import { Slot } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import globalStyles from "@/styles/globalStyles";

const Layout = () => {

  return (
    <View style={globalStyles.container}>
      <Slot />
      <StatusBar style="dark" />
    </View>
  );
}
export default Layout