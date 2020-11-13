import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Routes from './routes';

Icon.loadFont();

const App: React.FC = () => (
  <View style={{flex: 1}}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <Routes />
  </View>
);

export default App;
