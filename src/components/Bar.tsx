import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Bar = () => {
  return (
    <View style={styles.bar}>
      <Text style={styles.title}>Mi Primera App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#AFC97E',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
