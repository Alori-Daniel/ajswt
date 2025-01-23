import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState, React } from "react";

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

            <View className=" border-2 border-[#E5E5E5]  w-full h-16 px-4 bg-[#4E4E4E] rounded-2xl focus:border-secondary items-center flex-row">
                <TextInput
                    className="flex-1 text-white text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#CBCBCB"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />
                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
                        <Image
                            // source={ }
                            className="w-6 h-6 "
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
