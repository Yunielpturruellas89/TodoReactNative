/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, StyleSheet, View
} from 'react-native';
import HeaderTodo from './components/header';
import ManageTasks from './components/ManageTasks2';

const App = () => {
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderTodo />
        <ManageTasks/>
       </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#6495ed',
  },
  scrollView: {
    marginBottom: 70,
  }

});

export default App;
