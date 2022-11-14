import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { GameResume } from '../../components/gameResume/GameResume';


const GameList = ({navigation, route}) => {

    const {category} = route.params;

    const [refreshing, setRefreshing] = React.useState(false);
    const [actualizar, setActualizar] = useState(false);
    const [matchesList, setMatchesList] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              authorization: 'Bearer XWS-8fq_iLTuPxxhHElTYS_hm_ltFPSQ1ZvK2OqQq3mEo4lREZo'
            }
          };
          fetch(`https://api.pandascore.co/${category}/matches/upcoming?sort=begin_at&page=1&per_page=12`,  options)
            .then(response => response.json())
            .then(response => setMatchesList(response))
            .catch(err => console.error(err));
    }
    , [actualizar, category])


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setActualizar((e) => !e);
      wait(1000).then(() => setRefreshing(false));
    }, []);

    
    const renderGame = ({item}) => {
        return(
            <GameResume game={item} navigation={navigation}/>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
             <FlatList 
                data={matchesList}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing}
                      onRefresh={onRefresh}/>
                  }
                renderItem={renderGame}
                keyExtractor={item => item.id.toString()}/>
        </SafeAreaView>
      );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    scrollView: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default GameList