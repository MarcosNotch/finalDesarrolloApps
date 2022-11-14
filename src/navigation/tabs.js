import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GameNavigator from './gameNavigator';
import { Image, View } from 'react-native';
import ProfileNavigator from './profileNavigator';
import { useSelector } from 'react-redux';
import {loadPosts} from  '../store/Reducers/perfilSlice';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styles from './style';
import { useState } from 'react';

const Tab = createBottomTabNavigator();


const Tabs = () => {
  
  const perfil = useSelector(state => state.perfil.perfil)
  const dispatch = useDispatch();

useEffect(() => {
  console.log('voy a recargar')
  dispatch(loadPosts())
}
, [dispatch])




    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel:false, tabBarStyle: {backgroundColor: '#181a20', height: 60},
        headerTitle: (props) => (
          <View style={styles.headerContainer}>
            <View>
            <Image
              style={{ width: 180, height: 40 }}
              source={require('../images/E-Bets2.png')}
              resizeMode='contain'/>
            </View>
            <View>
               <Image
                 style={{ width: 40, height: 40, borderRadius: 50 }}
                
                 source={ { uri: perfil[0]?.imageUri }}
                 resizeMode='contain'
              />
            </View>
          </View>
       
        
      ),
        headerStyle: {backgroundColor: '#181a20'},
        headerTitleAlign: 'center',
       }}   
        
        > 
            <Tab.Screen name='valorant' component={GameNavigator} options={{tabBarIcon: ({focused}) => ( focused ? <Image source={require('../images/icons8-valorant-100.png')} style={{width: 40, height: 40}}/> :<Image source={require('../images/icons8-valorant-blanco.png')} style={{width: 30, height: 30}}/> )}}/>
            <Tab.Screen name='lol' component={GameNavigator} options={{tabBarIcon: ({focused}) => ( focused ? <Image source={require('../images/icons8-league-of-legends-50.png')} style={{width: 40, height: 40}}/> :<Image source={require('../images/icons8-league-of-legends-48.png')} style={{width: 30, height: 30}}/> )}}/>
            <Tab.Screen name='csgo' component={GameNavigator} options={{tabBarIcon: ({focused}) => ( focused ? <Image source={require('../images/icons8-counter-strike-100.png')} style={{width: 40, height: 40}}/> :<Image source={require('../images/icons8-counter-strike-50.png')} style={{width: 30, height: 30}}/> )}}/>
            <Tab.Screen name='profile' component={ProfileNavigator} options={{tabBarIcon: ({focused}) => ( focused ? <Image source={require('../images/icons8-account-48-filled.png')} style={{width: 40, height: 40}}/> :<Image source={require('../images/icons8-account-48.png')} style={{width: 30, height: 30}}/> )}}/>
        </Tab.Navigator>
    )
}

export default Tabs;