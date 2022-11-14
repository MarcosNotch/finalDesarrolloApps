import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    scrollView: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
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

  contenedorDeFechas:{
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
      height: 50,
  },

  paisFecha: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 50,
},
  vsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 35,
  },



  fecha:{
      color: '#fff',
      fontSize: 12,
      marginLeft: 5,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 3,
  },
  horarios: {
    flex: 1,
    flexDirection: 'row',
  
  },

contenedorDeFechas:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
alineaciones: {
    flex:3,
},
tituloAlineaciones: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: "center"
},  
alineacion: {
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  marginLeft: 10,
  marginTop: 10,
  alignSelf: "center"
},
alineacionEquipo: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,

},
alineacionEquipoLeft: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
},
alineacionEquipoRight: {
    flex: 1,
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
},
nombreJugador:{
  color: '#fff',
},
nombreEquipoAlineacion:{
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold',
  marginLeft: 10,
  marginTop: 10,
  alignSelf: "center"
},

nombreEquipo:{
  color: '#fff',
  fontSize: 15,
  fontWeight: 'bold',
  marginLeft: 10,
  marginTop: 10,
  alignSelf: "center"
},
jugadores: {
  color: '#fff',
  marginLeft: 10,
  alignSelf: "center"
},
contenedorAlineacionesTitulo:{
  width: '100%',
  backgroundColor: '#181a20',
  height: 50,
},


  });
  
  export default styles;