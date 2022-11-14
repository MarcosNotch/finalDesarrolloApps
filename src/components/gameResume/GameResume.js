import moment from 'moment';
import 'moment/locale/es';

import {View, Text, StyleSheet, TouchableOpacity, Image, Linking} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181a20',
        margin: 10,
        borderRadius: 10,
    },
    body:{
        flex: 4,
        flexDirection: 'row',
    },

    leftContainer: {
        flex: 3,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'space-around',
        marginLeft: 10,
        marginRight: 10,
    },
    headerProximoPartidoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor: '#393939',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      
    },
    nombreCompentencia: {
        color: '#fff',
    },
    nombreEquipo: {
        color: '#fff',
        marginBottom: 10,
    },
    mainContainerGame: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#181a20',
        height: 100,
        justifyContent: 'space-around',
    },
    mainContainerGameLeft: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-around',
        marginLeft: 10, 
        flexDirection: 'row',
        alignItems: 'center',
    },
    teamContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50
    },
    vsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },

    contenedorDeFechas:{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 10,
    },
    paisFecha: {
        flex: 1,
        flexDirection: 'row',
    },
    fecha:{
        color: '#fff',
        fontSize: 12,
        marginLeft: 5,
    },
    botonDetalles:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#be32f5',
        borderRadius: 5,
        height: 35,
        width: 90,
    },
    botonTwitch:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9147ff',
        borderRadius: 5,
        height: 35,
        width: 90,
    },
    contendorImagenTorneo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:30,
        width:50,
        marginRight: 10,
    }

    


});

export const GameResume = ({game, navigation}) => {

    var momentTZ = require('moment-timezone');
    momentTZ.updateLocale('es');
    let utc = momentTZ.utc(game.begin_at)
    let argentina = utc.tz('America/Argentina/Buenos_Aires').format('HH:mm');
    let us = utc.tz('America/New_York').format('HH:mm');
    let espana = utc.tz('Europe/Madrid').format('HH:mm');


    let  opponentName1= ""
    let  opponentLogo1= ""
    let  opponentName2= ""
    let  opponentLogo2= ""
    let  leagueLogo = ""

    if (game.opponents.length > 1){

        opponentName1= game.opponents[0]?.opponent?.name != null ? game.opponents[0].opponent.name : "" ;
        opponentLogo1= game.opponents[0]?.opponent?.image_url != null ? game.opponents[0].opponent.image_url : 'https://cdn.pandascore.co/images/team/image/130396/600px_ovation_e_sports_allmode.png';
        opponentName2= game.opponents[1]?.opponent?.name != null ? game.opponents[1].opponent.name : "";
        opponentLogo2= game.opponents[1]?.opponent?.image_url != null ? game.opponents[1].opponent.image_url: 'https://cdn.pandascore.co/images/team/image/130396/600px_ovation_e_sports_allmode.png';
        leagueLogo = game.league.image_url != null ? game.league.image_url : 'https://cdn.pandascore.co/images/league/image/4804/600px-liga_radiante-png';
    } 

    if (!opponentName1){
        return
    }


    const abrirTwitch = () => {
        Linking.openURL(game.streams_list[0].raw_url);
    }

    return (
        <TouchableOpacity >
            
            <View style={Styles.container}>
                <View style={Styles.headerProximoPartidoContainer}>
                    <View style={Styles.contendorImagenTorneo}>
                        <Image source={{uri: leagueLogo}} style={{width: '100%',height: '100%',resizeMode: 'contain',}} />
                    </View>
                    <View>
                        <Text style={Styles.nombreCompentencia}>{game.league.name} </Text>
                    </View>
                        
                </View>
                <View style={Styles.body}>

                    <View style={Styles.leftContainer}>

                        <View style={Styles.mainContainerGame}>
                            <View style={Styles.mainContainerGameLeft}>
                                <View style={Styles.teamContainer}>
                                    <Text style={Styles.nombreEquipo} >{opponentName1}</Text>
                                    <Image source={{uri: opponentLogo1}} style={{width: '100%',height: '100%',resizeMode: 'contain',}}/>

                                </View>
                                <View style={Styles.vsContainer}>
                                    <Image source={require('../../images/vs2.png')} style={{width: 70, height: 50}}/>
                                </View>
                                <View style={Styles.teamContainer}>
                                    <Text style={Styles.nombreEquipo} >{opponentName2}</Text>
                                    <Image source={{uri: opponentLogo2}} style={{width: '100%',height: '100%',resizeMode: 'contain',}}/>
                                </View>
                            </View>
                        </View>
                                <View style={Styles.contenedorDeFechas}>
                                    <View style={Styles.paisFecha}>
                                        <Image source={require('../../images/banderaArgentina.jpg')} style={{width: 30, height: 20, marginLeft: 10}}/>
                                        <Text style={Styles.fecha}>{argentina}</Text>
                                    </View>
                                    <View style={Styles.paisFecha}>
                                        <Image source={require('../../images/usa.png')} style={{width: 30, height: 20, marginLeft: 10}}/>
                                        <Text style={Styles.fecha}>{us}</Text>
                                    </View>
                                    <View style={Styles.paisFecha}> 
                                        <Image source={require('../../images/BanderaEspana.jpg')} style={{width: 30, height: 20, marginLeft: 10}}/>
                                        <Text style={Styles.fecha}>{espana}</Text>
                                    </View>

                                </View>

                    </View>
                    <View style={Styles.rightContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('GameDetail', {game: {game}, horaArgentina: {argentina}, horaUsa: {us}, horaEspana: {espana}})}>
                            <View style={Styles.botonDetalles}>
                                <Text style={Styles.fecha}>Detalles</Text>
                            </View>
                        </TouchableOpacity>
                        {game?.streams_list[0]?.raw_url !== undefined &&
                        <TouchableOpacity onPress={abrirTwitch}>
                            <View style={Styles.botonTwitch}>
                                <Text style={Styles.fecha}>Ver en VIVO</Text>
                            </View>
                        </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>
   
    )

}

