import { View, Text, Platform } from 'react-native';

import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import {StatusBar} from 'expo-status-bar';

import { globalStyles } from '@/styles/global-styles';

import * as NavigationBar from 'expo-navigation-bar';


if (Platform.OS === 'android') {
  NavigationBar.setBackgroundColorAsync('black');
  
}


//? layout espera un componente por defecto
//? todas las paginas van a pasar por este layout 
//? lugar ideal donde pondrmeos nuestr contextApi

const RootLayout = () => {

  //? deestruturamos loadedd para que 
  //? si la fuente no esta cargada entonces rn haga otra cosa
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background} >
      {/* //? este componente  <Slot  /> vacio le dice al layout que busque el
      //? index de la carpeta en la que esta y lo renderize */}
      <Slot/>
      <StatusBar style='light' />
      
    </View>
  )
}

export default RootLayout