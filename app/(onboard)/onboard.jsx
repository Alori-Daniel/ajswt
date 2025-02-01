import { View, Text, FlatList, useWindowDimensions, Animated, StatusBar } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import onBoardingData from '../../constants/data'
import OnBoardingItem from '../../components/onBoardingItem'
import Paginator from '../../components/Paginator'
import { useGlobalContext } from '../../context/GlobalProvider'
import { Redirect } from 'expo-router'

const Onboard = () => {
    const { width, height } = useWindowDimensions();
    const [currentIndex, setCurrentIndex] = useState(0)
    const slidesRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const { isLoading, isloggedIn } = useGlobalContext()

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    if (!isLoading && isloggedIn) return <Redirect href="/home" />

    return (
        <SafeAreaView edges={["top"]} style={{ flex: 1 }} >
            <View style={{ width: width, height: height }} className="relative">
                <View className="absolute top-[62%] self-center z-20">
                    <Paginator data={onBoardingData} currentIndex={currentIndex} />
                </View>

                <FlatList
                    data={onBoardingData}
                    renderItem={({ item }) => <OnBoardingItem item={item} width={width} height={height} currentIndex={currentIndex} />}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />


            </View >
        </SafeAreaView >
    )
}

export default Onboard