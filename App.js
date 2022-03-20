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
import BodyTask from './components/BodyTask';

const App = () => {
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HeaderTodo />
        <BodyTask/>
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
