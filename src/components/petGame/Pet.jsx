import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Animated, Image } from 'react-native';

// The component now accepts three props:
// 1. title: The text to display on the button.
// 2. onPress: The function to call when the button is pressed (for navigation).
// 3. backgroundImage: The source for the background image.


const Pet = ({ title, onPress, backgroundImage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.buttonText}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 350,
    height: 230,
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
  heart: {
    position: 'absolute',
    bottom: 40,
    left: 30,
    // Add any base styling for the heart here
  },
  heartImage: {
    width: 42,
    height: 42,
  },
});

export default Pet;