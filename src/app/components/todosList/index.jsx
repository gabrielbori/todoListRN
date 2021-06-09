import React from 'react';
import {FlatList, View} from 'react-native'
import TodoItem from '../todoItem'
import styles from './styles'

function TodoList({todosList, type}) {
    const renderItem = ({item}) => <TodoItem value={item} type={type}/>
    const keyExtractor = (item) => item.id;
return (
    <View style={styles.container}>
    <FlatList 
    data={todosList}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    />
    </View>
)
}

export default TodoList;