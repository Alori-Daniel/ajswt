import { View, Text, StatusBar, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, Redirect } from 'expo-router'
const index = () => {

    useEffect(() => {
        setTimeout(() => {
            router.replace("/onboard");
        }, 2000);
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="min-h-[100vh] w-full bg-[#23278C] flex items-center justify-center ">
                    <Text className="text-white text-4xl font-Ithin font-extrabold">JamakSwift</Text>
                    <Text className="text-white font-pregular">Swift Deliveries, Anytime, Anywhere.</Text>
                    <StatusBar backgroundColor="#23278C" style="light" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default index