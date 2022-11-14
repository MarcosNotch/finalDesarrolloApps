import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/profile/Profile";

const stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <stack.Navigator screenOptions={{headerShown: false}}>
            <stack.Screen name="profile2" component={Profile} />
        </stack.Navigator>
    )
}

export default ProfileNavigator;