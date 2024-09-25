import React, { useEffect } from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
} from '@expo-google-fonts/roboto';
import {
  Sen_400Regular,
  Sen_700Bold,
  Sen_800ExtraBold
} from '@expo-google-fonts/sen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Sen_400Regular,
    Sen_700Bold,
    Sen_800ExtraBold
  });

  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <AppNavigator />;

};