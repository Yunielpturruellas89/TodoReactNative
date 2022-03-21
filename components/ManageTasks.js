/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import DeviceStorage from './DeviceStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Keyboard
} from 'react-native';
import TaskInputField2 from './TaskInputField2';
import Item from './Item';




const ManageTasks = (props) => {
  const [tasks, setTasks] = useState([
    { text: "Create the components", complete: false },
    /*{ text: "Create the UI for each component", complete: false },
    { text: "Create the logic for each component", complete: true },*/
    { text: "Test the aplication", complete: true }
  ]);

    
  
  const addTask = (text) => {
    Keyboard.dismiss();
    if (text == null) return;
    const newTask = {
      text,
      complete: false
    }
     setTasks([...tasks, newTask]);
     saveData(newTask)

  }
  const completeTask = (taskIndex) => {

    let newTasks = [...tasks];
    let isComplete= newTasks[taskIndex].complete? false : true;
    newTasks[taskIndex].complete = isComplete;
    setTasks(newTasks);
    console.log(newTasks);
  }
  const deleteTask = (deleteIndex) => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this task?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            setTasks(tasks.filter((value, index) => index != deleteIndex))
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
    
  }
  const saveData = async (newTask) => {
  
    const storedData = await AsyncStorage.getItem('tasks');
    const storedDataParsed = JSON.parse(storedData);
  
    let newData = [];
  
    if (storedData === null) {
      // save
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      newData = JSON.stringify([...newTask]);
      await AsyncStorage.setItem('tasks', newData);
    }
    setTasks(newData);
    console.log(newData)
    Keyboard.dismiss();
  };

  return (
    <View>
    <TaskInputField2 addTask={addTask} />
    {
    tasks.map((task, index) => {
      return (
        <View key={index} style={styles.taskContainer} >
          <Item task={task} deleteTask={() => deleteTask(index)} completeTask={() => completeTask(index)} />
        </View>
      );
    })
  }
    </View>

  );
};
const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
  }

});

export default ManageTasks;
