import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Paginator = ({ data, currentIndex }) => {
    return (
        <View style={{ flexDirection: 'row', height: 34, justifyContent: "center" }} >
            {data.map((_, i) => (
                <View
                    style={[
                        styles.dot,
                        {
                            width: i === currentIndex ? 20 : 20,
                            backgroundColor: i > currentIndex ? '#424242' : '#fff',
                        },
                    ]}
                    key={i.toString()}
                />
            ))}
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    dot: {
        height: 5,
        borderRadius: 5,
        backgroundColor: '#493d8a',
        marginHorizontal: 2,
    },
})