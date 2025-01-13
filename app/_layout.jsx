import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font'
import "../global.css"

import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();


const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        "instrument-sans": require("../assets/fonts/InstrumentSans_SemiCondensed-Italic.ttf"),
        // "Instrument Sans": require("../assets/fonts/InstrumentSans-Italic-VariableFont_wdth,wght.ttf"),
        "Instrument Sans": require("../assets/fonts/InstrumentSans-VariableFont_wdth,wght.ttf"),
        "Playball-Regular": require("../assets/fonts/Playball-Regular.ttf"),
        "Roboto-Italic": require("../assets/fonts/Roboto-Italic-VariableFont_wdth,wght.ttf"),
        "Roboto-Extrabold": require("../assets/fonts/Roboto-VariableFont_wdth,wght.ttf"),
    });
    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);
    if (!fontsLoaded && !error) {
        return null;
    }
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(onboard)" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout

