/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,TouchableOpacity,
  Text,
  View,
} from 'react-native';





const TaskItem = (props) => {
  return (
    <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                <Text>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
},
indexContainer: {
    borderColor: '#3E3364',
    borderWidth: 1,
    backgroundColor: '#87cefa',
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
},
index: {
    color: '#fff',
    fontSize: 15,
},
taskContainer: {
    borderColor: '#3E3364',
    borderWidth: 1,
    backgroundColor: '#87cefa',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
},
task: {
    color: '#fff',
    width: '90%',
    fontSize: 16,
},
delete: {
    marginLeft: 10,
},

});

export default TaskItem;
