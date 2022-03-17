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





const Item = (props) => {
  return (
    <View style={styles.container}>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                <View style={styles.indexContainer}>
                <Text style={styles.delete}>x</Text>
                </View>
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
    
    
    paddingVertical: 2,
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
