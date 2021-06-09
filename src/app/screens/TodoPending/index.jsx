import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import TodoList from '../../components/todosList'


const todoItemList = [
  {
    id: 1,
    desc: 'First Todo'
  },
  {
    id: 2,
    desc: 'Second Todo'
  },
  {
    id: 3,
    desc: 'Third Todo'
  },
  {
    id: 4,
    desc: 'Fourth Todo'
  },
]



function TodoPending() {
  return (
    <>
      <View style={styles.container}>
        <TodoList todosList={todoItemList} type={"pending"}/>
      </View>
    </>
  );
}

export default TodoPending;
