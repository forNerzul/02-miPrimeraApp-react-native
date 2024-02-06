import React from 'react';
// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {ContadorScreen} from './src/screens/ContadorScreen';
// import {Bar} from './src/components/Bar';
import {BoxObjetcModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <BoxObjetcModelScreen />
    </SafeAreaView>
    /* <Bar />
      <ContadorScreen /> */
  );
};

export default App;
