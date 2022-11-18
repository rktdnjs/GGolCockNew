import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo, Fontisto, FontAwesome } from "@expo/vector-icons";
import WriteCocktail from "./screens/WriteCocktail";
import Home from "./screens/Home";
import Icebox from "./screens/Icebox";
import Favorite from "./screens/Favorite";
import Cocktail from "./screens/Cocktail";
import Settings from "./screens/Settings";

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return  (
    <Stack.Navigator>
      <Stack.Screen name="칵테일 레시피" component={Cocktail} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="cocktail" color={color} size={size} />
            )
          }}/>

      <Stack.Screen name="칵테일 글쓰기" component={WriteCocktail}/>

    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <BottomTab.Navigator initialRouteName="홈 화면" // 홈 화면에서 시작
          screenOptions={{
            headerTitleAlign: 'center',
            tabBarShowLabel: false,
          }}>
          <BottomTab.Screen
            name="아이스박스" component={Icebox}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="box" color={color} size={size} />
              )
            }} />
          <BottomTab.Screen name="칵테일 레시피" component={StackNavigator} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="cocktail" color={color} size={size} />
            )
          }}/>
          <BottomTab.Screen name="홈 화면" component={Home}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="home" color={color} size={size} />
              )
            }} />
          <BottomTab.Screen name="즐겨찾기" component={Favorite} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" color={color} size={size} />
            )
          }}/>
          <BottomTab.Screen name="마이페이지" component={Settings} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" color={color} size={size} />
            )
          }}/>
          {/* <BottomTab.Screen name="칵테일 글쓰기" component={WriteCocktail}/> */}
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
