import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation';
import { Provider } from 'react-redux';
import Store from './src/store/Store';
import { init } from './src/db';

export default function App() {

  init().then(() => {
    console.log('Initialized database');
  }).catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  }
  )  


  return (
    <Provider store={Store}>
           <AppNavigator />
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
