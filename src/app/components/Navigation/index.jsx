import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import screens
import TodoDone from '../../screens/TodoDone';
import TodoPending from '../../screens/TodoPending';
import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: true,
  inactiveTintColor: '#2D3038',
  activeTintColor: '#FFFFFF',
  style: {
    height: '10%',
    backgroundColor: '#1E1B26',
  },
};

function RootNavigator() {
  return (
    <Tab.Navigator initialRouteName="TodoDone" tabBarOptions={tabBarOptions}>
      <Tab.Screen name="TodoDone" component={TodoDone} />
      <Tab.Screen name="TodoPending" component={TodoPending} />
    </Tab.Navigator>
  );
}
export default RootNavigator;
