import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabBar = ({ selectedTab, onTabPress }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.tabBar, {
      backgroundColor: isDarkMode ? '#1c1c1c' : '#ffffff',
      borderTopColor: isDarkMode ? '#333' : '#e0e0e0',
    }]}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => onTabPress('Home')}
      >
        <Icon name="home" size={24} color={selectedTab === 'Home' ? '#6200ee' : '#888'} />
        <Text style={[styles.tabText, selectedTab === 'Home' && styles.tabTextActive]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => onTabPress('Profile')}
      >
        <Icon name="user" size={24} color={selectedTab === 'Profile' ? '#6200ee' : '#888'} />
        <Text style={[styles.tabText, selectedTab === 'Profile' && styles.tabTextActive]}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => onTabPress('Settings')}
      >
        <Icon name="cog" size={24} color={selectedTab === 'Settings' ? '#6200ee' : '#888'} />
        <Text style={[styles.tabText, selectedTab === 'Settings' && styles.tabTextActive]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    marginTop: 4,
  },
  tabTextActive: {
    color: '#6200ee',
  },
});

export default TabBar;