import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Image } from 'react-native/types_generated/index';


const SettingsButton = ({ title, onPress, backgroundImage }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 2,
    padding: 4,
    marginBottom: 8,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SettingsButton