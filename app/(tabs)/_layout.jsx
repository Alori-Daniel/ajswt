import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs, Redirect } from "expo-router";
import React from 'react';
import icon from '../../constants/icon';



const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className=" flex items-center justify-center h-16 w-20">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-8 h-8"
            />
            {/* <Text
                className={`${focused ? "font-psemibold" : "font-pregular"
                    } text-xs text-white`}
                style={{ color: color }}
            >
                {name}
            </Text> */}
        </View>
    );
};

const TabLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#0000B6",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarStyle: {
                        backgroundColor: "#FFFFFF",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 64,
                        paddingBottom: 10,
                        paddingTop: 15,
                    },
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icon.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name='create'
                    options={{
                        title: "Create",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icon.create}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name='order'
                    options={{
                        title: "Order",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icon.order}
                                color={color}
                                name="Order"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name='profile'
                    options={{
                        title: "Profile",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icon.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                    }}
                />




            </Tabs>
        </>
    )
}

export default TabLayout

const styles = StyleSheet.create({})