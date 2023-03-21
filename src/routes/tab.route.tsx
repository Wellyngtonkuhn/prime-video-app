import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Download from "../screens/Downloads";
import Home from "../screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoute() {
  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#00B9E7",
        tabBarInactiveTintColor: "#0D1821",
        tabBarStyle: {
          backgroundColor: "#5A6777",
          height: 60,
        },
      }}
    >
      <Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={30} />
          ),
        }}
        component={Home}
      />
      <Screen
        name="Search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" color={color} size={30} />
          ),
        }}
        component={Download}
      />
      <Screen
        name="Download"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="arrow-circle-down" color={color} size={30} />
          ),
        }}
        component={Download}
      />
      <Screen
        name="Account"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" color={color} size={30} />
          ),
        }}
        component={Download}
      />
    </Navigator>
  );
}
