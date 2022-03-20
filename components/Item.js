/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Icon from 'react-native-vector-icons/dist/Ionicons';

import React from 'react';
import {
  StyleSheet, TouchableOpacity,
  Text,
  View,
} from 'react-native';





const Item = (props) => {
  return (

    <TouchableOpacity style={styles.container} onPress={() => props.completeTask()}>
      <View style={[(props.task.complete) ? styles.taskContainerComplete : styles.taskContainer]}>
        <Text style={styles.task}>{props.task.text}</Text>

        <View style={styles.indexContainer}>
          <TouchableOpacity onPress={() => props.deleteTask()}>
            <Icon name='md-trash-sharp' size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>


  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 50,
  },
  indexContainer: {
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
  index: {
    color: '#fff',
    fontSize: 15,
  },
  taskContainer: {
    borderColor: '#3E3364',
    borderWidth: 1,
    backgroundColor: '#87cefa',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 40,
  },
  taskContainerComplete: {
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#191970',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 40,
  },
  task: {
    color: '#fff',
    width: '90%',
    fontSize: 16,
  },
  delete: {
    marginLeft: -5,
  },

});

export default Item;
