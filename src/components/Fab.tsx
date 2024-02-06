import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

export const Fab = ({
  title,
  onPress,
  position = 'br',
}: {
  title: string;
  onPress: () => void;
  position?: 'bl' | 'br';
}) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <View
        style={position === 'br' ? styles.fabLocationBR : styles.fabLocationBL}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#afc97e', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fab: {
    backgroundColor: '#FFD23F',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
