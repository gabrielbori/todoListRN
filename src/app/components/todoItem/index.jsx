import React from 'react';
import {Text, TouchableOpacity} from 'react-native'
import styles from './styles'
function TodoItem({value}){
return (<TouchableOpacity style={styles.container}>
<Text>{value.desc}</Text>
</TouchableOpacity>)
}

export default TodoItem;
