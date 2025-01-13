import { View, Text, Image, ImageBackground, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from './CustomButton';


const OnBoardingItem = ({ item, width, height, paginator, currentIndex }) => {
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(20)).current;
    useEffect(() => {
        if (currentIndex === 2) {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();

            // Animated.timing(translateY, {
            //     toValue: 0,
            //     duration: 500,
            //     useNativeDriver: true,
            // }).start();
        } else {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();

            // Animated.timing(translateY, {
            //     toValue: 20,
            //     duration: 1,
            //     useNativeDriver: true,
            // }).start();
        }
    }, [currentIndex]);
    return (
        <ImageBackground source={item.image} resizeMode='cover' style={{ width, height }} >
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.1)', 'transparent']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: -1 }}
                style={{ flex: 1 }}
            >

                <View className="" style={{ height: height, justifyContent: 'flex-end', padding: 19, gap: 3 }}  >
                    <View className=" text-white ">
                        <Text className="text-white text-[24px] font-Rsemibold font-bold mb-4 w-[90%]">{item.title}</Text>
                        <Text className="text-white text-[16px] mb-1 font-medium">{item.subtitle}</Text>
                        <Text className="text-slate-50 text-[13px] font-normal">{item.text}</Text>

                    </View>
                    {currentIndex >= 0 ?
                        (
                            <Animated.View className="mt-6 flex-row items-center mx-auto gap-9"
                                style={{
                                    opacity: opacity,
                                    transform: [{ translateY }],
                                }}>
                                <CustomButton
                                    title="Sign-Up"
                                    handlePress={() => { if (currentIndex === 2) { router.push("/signUp") } }}
                                    containerStyles="w-[40%] rounded-full border border-[#424242]"
                                    textStyles="text-white text-xl"
                                />
                                <CustomButton
                                    title="Login"
                                    handlePress={() => { if (currentIndex === 2) { router.push("/signIn") } }}
                                    containerStyles="w-[40%] rounded-full bg-white"
                                    textStyles="text-[#0000B6] text-xl"
                                />
                            </Animated.View>
                        ) :
                        (
                            ""
                        )

                    }
                </View>
            </LinearGradient>
        </ImageBackground >
    )
}

export default OnBoardingItem