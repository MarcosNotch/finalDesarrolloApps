import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    fotoPerfilContainer: {
        flex: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contenedorNombrePerfil: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonDetalles:{
        textAlign: 'center',
        backgroundColor: '#be32f5',
        borderRadius: 5,
        height: 35,
        width: 90,
    },
    textoBoton:{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    
    }

});


export default styles;