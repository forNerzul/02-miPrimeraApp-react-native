import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fab} from '../components/Fab';
import {useCounter} from '../hooks/useCounter';

export const ContadorScreen = () => {
  //   const [contador, setContador] = useState(0);
  const {contador, incrementar, decrementar} = useCounter(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <Fab
        title="+1"
        onPress={() => {
          incrementar(1);
        }}
        position="br"
      />
      <Fab
        title="-1"
        onPress={() => {
          decrementar(1);
        }}
        position="bl"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
});
