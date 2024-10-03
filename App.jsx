import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
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
} from '@expo-google-fonts/sen';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import {
  Arvo_400Regular,
  Arvo_400Regular_Italic,
  Arvo_700Bold,
  Arvo_700Bold_Italic
} from '@expo-google-fonts/arvo';
import { LikeProvider } from './src/assets/context/LikeContext';
import { BookmarkProvider } from './src/assets/context/BookmarkContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Sen_400Regular,
    Sen_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Arvo_400Regular,
    Arvo_400Regular_Italic,
    Arvo_700Bold,
    Arvo_700Bold_Italic
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <LikeProvider>
      <BookmarkProvider>
        <AppNavigator />
      </BookmarkProvider>
    </LikeProvider>
  );

};