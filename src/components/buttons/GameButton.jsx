import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

// The component now accepts three props:
// 1. title: The text to display on the button.
// 2. onPress: The function to call when the button is pressed (for navigation).
// 3. backgroundImage: The source for the background image.

const GameButton = ({ title, onPress, backgroundImage }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 350,
    height: 130,
    borderRadius: 10,
    overflow: 'hidden',
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

export default GameButton;