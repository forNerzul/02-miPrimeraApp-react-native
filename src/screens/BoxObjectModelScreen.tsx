import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjetcModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4E6B5',
  },
  title: {
    padding: 20,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 20,
    textAlign: 'center',
    backgroundColor: '#877B66',
  },
});
