import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons'
//import screens
import TodoDone from '../../screens/TodoDone';
import TodoPending from '../../screens/TodoPending';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: true,
  inactiveTintColor: '#FFFFFF',
  activeTintColor: 'red',
  style: {
    height: '10%',
    backgroundColor: '#1E1B26',
  },
};

function RootNavigator() {
  return (
    <Tab.Navigator initialRouteName="TodoPending" tabBarOptions={tabBarOptions}>
      <Tab.Screen name="TodoPending" component={TodoPending} />
      <Tab.Screen name="TodoDone" component={TodoDone} />
    </Tab.Navigator>
  );
}
export default RootNavigator;
