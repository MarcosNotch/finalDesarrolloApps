import {View, Text, ScrollView} from 'react-native';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { useEffect } from 'react';
import styles from './Styles';
import { Image } from 'react-native';


const GameDetail = ({ route }) => {

    const { game, horaArgentina, horaUs, horaEspana } = route.params;

    const [jugadoresEquipo1, setJugadoresEquipo1] = React.useState([]);
    const [jugadoresEquipo2, setJugadoresEquipo2] = React.useState([]);

    const equipo_id_1 = game.game.opponents[0].opponent.id;
    const equipo_id_2 = game.game.opponents[1].opponent.id;

    var momentTZ = require('moment-timezone');
    momentTZ.updateLocale('es');
    let utc = momentTZ.utc(game.game.begin_at)
    let argentina = utc.tz('America/Argentina/Buenos_Aires').format('HH:mm');
    let us = utc.tz('America/New_York').format('HH:mm');
    let espana = utc.tz('Europe/Madrid').format('HH:mm');


    let  opponentName1= ""
    let  opponentLogo1= ""
    let  opponentName2= ""
    let  opponentLogo2= ""
    let  leagueLogo = ""

    if (game.game.opponents.length > 1){
        opponentName1= game.game.opponents[0]?.opponent?.name != null ? game.game.opponents[0].opponent.name : "" ;
        opponentLogo1= game.game.opponents[0]?.opponent?.image_url != null ? game.game.opponents[0].opponent.image_url : 'https://cdn.pandascore.co/images/team/image/130396/600px_ovation_e_sports_allmode.png';
        opponentName2= game.game.opponents[1]?.opponent?.name != null ? game.game.opponents[1].opponent.name : "";
        opponentLogo2= game.game.opponents[1]?.opponent?.image_url != null ? game.game.opponents[1].opponent.image_url: 'https://cdn.pandascore.co/images/team/image/130396/600px_ovation_e_sports_allmode.png';
        leagueLogo = game.game.league.image_url != null ? game.game.league.image_url : 'https://cdn.pandascore.co/images/league/image/4804/600px-liga_radiante-png';
    } 

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              authorization: 'Bearer XWS-8fq_iLTuPxxhHElTYS_hm_ltFPSQ1ZvK2OqQq3mEo4lREZo'
            }
          };
          fetch(`https://api.pandascore.co/valorant/players?team_id=${equipo_id_1}sort=&page=1&per_page=6`,  options)
            .then(response => response.json())
            .then(response => setJugadoresEquipo1(response))
            .catch(err => console.error(err));
    }
    , [])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              authorization: 'Bearer XWS-8fq_iLTuPxxhHElTYS_hm_ltFPSQ1ZvK2OqQq3mEo4lREZo'
            }
          };
          fetch(`https://api.pandascore.co/valorant/players?team_id=${equipo_id_2}sort=&page=1&per_page=6`,  options)
            .then(response => response.json())
            .then(response => setJugadoresEquipo2(response))
            .catch(err => console.error(err));
    }
    , [])


    // entonces lo que voy a hacer es mostrar los mismos datos de antes pero de forma distinta y las alinieacioes de cada equipo
    // para eso voy a tener que consultar con la api y me traigo los jugadores de cada equipo y los muestro en la pantalla

    return (
      <SafeAreaView style={styles.scrollView}>

            <View style={styles.header}>
              <View style={styles.mainContainerGameLeft}>
                  <View style={styles.teamContainer}>
                      <Text style={styles.nombreEquipo} >{opponentName1}</Text>
                      <Image source={{uri: opponentLogo1}} style={{width: '100%',height: '100%',resizeMode: 'contain',}}/>
                  </View>
                  <View style={styles.vsContainer}>
                      <Image source={require('../../images/vs2.png')} style={{width: 70, height: 50}}/>
                  </View>
                  <View style={styles.teamContainer}>
                      <Text style={styles.nombreEquipo} >{opponentName2}</Text>
                      <Image source={{uri: opponentLogo2}} style={{width: '100%',height: '100%',resizeMode: 'contain',}}/>
                  </View>
                 </View>
            </View>
            <View style={styles.body}>
              <View style={styles.contenedorDeFechas}>
                  <View style={styles.paisFecha}>
                      <Image source={require('../../images/banderaArgentina.jpg')} style={{width: 30, height: 20}}/>
                      <Text style={styles.fecha}>{argentina}</Text>
                  </View>
                  <View style={styles.paisFecha}>
                      <Image source={require('../../images/usa.png')} style={{width: 30, height: 20}}/>
                      <Text style={styles.fecha}>{us}</Text>
                  </View>
                  <View style={styles.paisFecha}> 
                      <Image source={require('../../images/BanderaEspana.jpg')} style={{width: 30, height: 20}}/>
                      <Text style={styles.fecha}>{espana}</Text>
                  </View>
              </View>
              <View style={styles.alineaciones}>
                <View style={styles.contenedorAlineacionesTitulo}>
                    <Text style={styles.alineacion}>Alineación</Text>
                </View>
                  
                  <View style={styles.alineacionEquipo}>
                      <View style={styles.alineacionEquipoLeft}>
                          <Text style={styles.nombreEquipoAlineacion}>{opponentName1}</Text>
                          <View style={styles.jugadores}>
                              {jugadoresEquipo1.map((jugador) => (
                                  <View style={styles.jugador} key={jugador.name}>
                                      <Text  style={styles.nombreJugador}>{jugador.name}</Text>
                                  </View>
                              ))}
                          </View>
                        </View>
                        <View style={styles.alineacionEquipoRight}>
                          <Text style={styles.nombreEquipoAlineacion}>{opponentName2}</Text>
                          <View style={styles.jugadores}>
                              {jugadoresEquipo2.map((jugador) => (
                                  <View style={styles.jugador}>
                          
                                      <Text style={styles.nombreJugador}>{jugador.name}</Text>
                                      </View>
                              ))}
                          </View>
                        </View>
              </View>
              </View>
            </View>
      </SafeAreaView>
    )
}

export default GameDetail
