/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, Text, View
} from 'react-native';
import HeaderTodo from './components/header';
import TaskInputField2 from './components/TaskInputField2';
import Item from './components/Item';


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
       <ScrollView style={styles.scrollView}>
      <HeaderTodo/>

      <TaskInputField2 addTask={addTask}/>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <Item index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#6495ed',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});

export default App;
