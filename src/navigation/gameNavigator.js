import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GameDetail from "../screens/gameDetail/GameDetail";
import GameList from "../screens/gameList/GameList";
import { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import { useDispatch } from "react-redux";



const Stack = createNativeStackNavigator();

const GameNavigator = ({ route }) => {

    const [categories, setCategories] = useState('');
    const isFocused = useIsFocused();
    const [cargado, setCargado] = useState(false);

    //const routeName = route.name;
//
    //if(isFocused && routeName){
    //    setCategories(routeName);
    //}

    useEffect(() => {
      const routeName = route.name;

        if(isFocused && routeName){
         console.log(routeName)
         setCategories(routeName)
         setCargado(true)
        }
    }, [isFocused])


   if (cargado){
        return (
            <Stack.Navigator  initialRouteName="GameList" screenOptions={{headerShown: false, tabBarShowLabel:false}} >
                <Stack.Screen  name="GameList" initialParams={{category:categories}} component={GameList} options={({route}) => ({title: route.name})}/>
                <Stack.Screen name="GameDetail" component={GameDetail} />
            </Stack.Navigator>
        )
   }


}

export default GameNavigator;