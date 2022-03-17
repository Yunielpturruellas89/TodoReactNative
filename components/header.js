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





const HeaderTodo = () => {
  return (
    <View style={styles.container}>
            <Text style={styles.title}>WORK TO-DOS</Text>

            <Text style={styles.text1}>Enter text into the input field to add items to your list (max. 28 characters)</Text>
            <Text style={styles.text2}>Clic the item to mark it the complete</Text>
            <Text style={styles.text3}>Clic de "X" to remove the item from your list</Text>
        </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 20,
    flex: 1,
},
title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    textAlign: 'center',
  },
  text1: {
    color: '#f4a460',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    textAlign: 'center',
  },
  text2: {
    color: '#98fb98',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    textAlign: 'center',
    
  },
  text3: {
    color: '#00008b',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
    textAlign: 'center',

  },




});

export default HeaderTodo;
