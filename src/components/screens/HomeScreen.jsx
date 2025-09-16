import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pet from '../petGame/Pet';
import SettingsButton from '../buttons/HomeButton';
import MetricsButton from '../buttons/HomeButton';
import Currency from '../petGame/Currency';

const HomeScreen = ( { onTabPress } ) => {
  const [coins, setCoins] = useState(100);

  const increaseCoins = () => {
    setCoins(prevCoins => prevCoins + 1);
  }

  return (
    <View style={styles.screenContainer}>
      {/*Header Content*/}
      <View style={styles.headerContainer}>
        <View style={styles.storeContainer}>
          <Currency coins={coins}/>
          <SettingsButton onPress={() => onTabPress('Games')} backgroundImage={require('../../assets/icons/gamepad-solid-full.png')}/>
        </View>
        <View>
          <SettingsButton onPress={() => onTabPress('Settings')} backgroundImage={require('../../assets/icons/gear-solid-full.png')}/>
          <MetricsButton backgroundImage={require('../../assets/icons/chart-simple-solid-full.png')}/>
        </View>
      </View>

      {/*Pet*/}
      <View style={styles.screenButtons}>
        <Pet onPress={increaseCoins} backgroundImage={require('../../assets/images/anteater.png')}/>
      </View>

      {/*Footer*/}
      <View style={styles.footerContainer}>
        <View>
          <SettingsButton onPress={() => onTabPress('Settings')} backgroundImage={require('../../assets/icons/box-solid-full.png')}/>
          <MetricsButton backgroundImage={require('../../assets/icons/store-solid-full.png')}/>
        </View>
          <Text style={styles.musicText}>Now Playing: Music</Text>
      </View>
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
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  storeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
    footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20,
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
  musicText: {
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 24,
    padding: 10,
    marginBottom: 3,
  },
});

export default HomeScreen;