import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from "expo-status-bar";


const HomeLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="onboard"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>
            <StatusBar backgroundColor="#161622" style="light" />
        </>
    )
}

export default HomeLayout