import {View , Text} from 'react-native'
import styles from './Styles'
import { TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { savePost, loadPosts } from '../../store/Reducers/perfilSlice';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const [pickedUrl, setPickedUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permiso denegado", "Necesitamos permisos para usar la cámara", [{ text: "Ok" }]);
      return false;
    }
    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchImageLibraryAsync({
      aspect: [16, 9],
      quality: 0.7,
    });
    setPickedUrl(image.uri);
    dispatch(savePost(image.uri))
    dispatch(loadPosts())
  };
    

    return (
        <View style={styles.container}>
            <View style={styles.fotoPerfilContainer}>
                <Image source={ { uri: pickedUrl }} style={{width:120, height:120,borderRadius: 50}}/>
                <TouchableOpacity onPress={onHandleTakeImage}>
                                <View style={styles.botonDetalles}>
                                    <Text style={styles.textoBoton}>Editar</Text>
                                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile