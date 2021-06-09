import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import RootNavigator from './components/Navigation';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView} />
      <View style={{height:50, width:'100%', backgroundColor: 'red'}}/>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

export default App;
