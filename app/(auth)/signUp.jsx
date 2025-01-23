import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { router } from 'expo-router';


const SignUp = () => {
    const [form, setform] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        number: "",

    });
    return (
        <SafeAreaView className="bg-[#181818]" style={{ flex: 1 }}>
            <ScrollView>
                <View className="p-3 my-2  border-yellow-400 min-h-[85vh]">
                    <View className="my-2 flex-col gap-2">
                        <Text className="text-white text-[24px] font-bold">Welcome to</Text>
                        <Text className="text-[#3236F9] text-[36px] font-bold">Jamakswift</Text>
                        <Text className="text-white">Sign up or Login below to begin making your orders</Text>

                    </View>
                    <View className="flex-row mt-2 mb-6 w-full border-white h-11">
                        <Text className="text-white   border-yellow-400 text-center text-lg w-1/2 " onPress={() => { router.push("/signIn") }} >Login</Text>
                        <Text className="text-white  border-b-2 border-yellow-400 text-center text-lg w-1/2">Sign-Up</Text>
                    </View>
                    <View className="flex flex-col  border-yellow-400">
                        <FormField
                            title="Email"
                            value={form.email}
                            handleChangeText={(e) => setform({ ...form, email: e })}
                            otherStyles="mt-5"
                            placeholder="aj@gmail.com"
                            keyboardType="email-address"
                        />
                        <FormField
                            title="Phone Number"
                            value={form.number}
                            handleChangeText={(e) => setform({ ...form, number: e })}
                            otherStyles="mt-5"
                            placeholder="e.g 091*****679"
                            keyboardType="email-address"
                        />
                        <FormField
                            title="Password"
                            value={form.password}
                            handleChangeText={(e) => setform({ ...form, password: e })}
                            otherStyles="mt-5"
                            placeholder="*********"
                            keyboardType="email-address"
                        />
                        <FormField
                            title="Confirm Password"
                            value={form.confirmPassword}
                            handleChangeText={(e) => setform({ ...form, confirmPassword: e })}
                            otherStyles="mt-5"
                            placeholder="*********"
                            keyboardType="email-address"
                        />
                        <Text className="text-white text-center mt-7 ">By signing in, you agree to out Terms of Service and Privacy Policy</Text>

                        <CustomButton containerStyles="w-full bg-[#3236F9] mt-[5rem] h-[50px] rounded-full" title="Login" textStyles="text-lg font-bold text-white" />

                    </View>




                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp