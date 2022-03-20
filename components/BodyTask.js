/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Icon from 'react-native-vector-icons/dist/Ionicons';

import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Keyboard
} from 'react-native';
import TaskInputField2 from './TaskInputField2';
import Item from './Item';




const BodyTask = (props) => {
  const [tasks, setTasks] = useState([
    { text: "Create the UI", complete: false },
    { text: "Create the", complete: false },
    { text: "yuyuy2", complete: true },
    { text: "yuyuy3", complete: false }
  ]);

  const addTask = (text) => {
    Keyboard.dismiss();
    if (text == null) return;
    const newTask = {
      text,
      complete: false
    }
     setTasks([...tasks, newTask]);

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

export default BodyTask;
