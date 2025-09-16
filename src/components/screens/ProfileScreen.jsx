import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProfileScreen;