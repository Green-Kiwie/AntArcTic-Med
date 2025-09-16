import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';


const Currency = ({ coins }) => {
  return (
    <View>
        <Text style={styles.coinText}>
            {coins} coins
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({

    coinText: {
        fontSize: 24,
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 40,
        padding: 10,
    },
    
});
export default Currency