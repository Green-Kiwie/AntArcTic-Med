import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import HomeButton from '../buttons/HomeButton';

import SwtichItUp from '../../game/SwitchItUp';

const Button = ({ title, onPress, backgroundImage }) => {
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

const SettingsScreen = ( { onTabPress } ) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerButtons}>
            <HomeButton onPress={() => onTabPress('Home')} backgroundImage={require('../../assets/icons/house-solid-full.png')}/>
        </View>
      </View>
          <SwtichItUp/>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'start',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  screenText: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    margin: 10,
  },
  screenButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  }, 
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

export default SettingsScreen;
