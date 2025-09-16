import React, { useState } from 'react';
import { StyleSheet, View, useColorScheme, SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import GamesScreen from './components/screens/GamesScreen';

const renderScreen = (currentTab, onTabPress) => {
  switch (currentTab) {
    case 'Home':
      return <HomeScreen onTabPress={onTabPress} />;
    case 'Profile':
      return <ProfileScreen />;
    case 'Games':
      return <GamesScreen onTabPress={onTabPress}/>
    case 'Settings':
      return <SettingsScreen onTabPress={onTabPress}/>;
    default:
      return <HomeScreen onTabPress={onTabPress} />;
  }
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <View style={styles.contentContainer}>
        {renderScreen(selectedTab, setSelectedTab)}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    flex: 1,
  },
});

export default App;