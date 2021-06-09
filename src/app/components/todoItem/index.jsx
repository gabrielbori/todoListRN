import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';


function TodoItem({value}){      
return (
<View style={{flexDirection: 'row'}}>
    <TouchableOpacity style={styles.container}>
        <Text>{value.desc+" "+value.id}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.checkContainer}>
        <Icon name="check" color="green" size={30}/>
    </TouchableOpacity>
   
</View>
)
}

export default TodoItem;
