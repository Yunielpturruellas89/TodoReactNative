/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import DeviceStorage from './DeviceStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, Component } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Keyboard
} from 'react-native';
import TaskInputField2 from './TaskInputField2';
import Item from './Item';




export default class ManageTasks extends Component {
  state = {
    tasks: []
  }
  constructor(props) {
    super(props);
    console.log("en el contructor")
    this.getData()
  }
  getData = async () => {
    try {
     const data= await AsyncStorage.getItem('tasks')
     const dataParsed = JSON.parse(data)
     
     if (data!==null) {
       console.log("dataParsed "+dataParsed)
       this.setState({tasks:dataParsed})
       
     }
    } catch (error) {
      
    }
    
  }
  saveData = async (newData) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(newData));
    } catch (error) {
    }
    
  }
  addTask = (text) => {
    Keyboard.dismiss();
    if (text == null) return;
    const newTask = {
      text,
      complete: false
    }
    
    let newTasks=[...this.state.tasks]
    
    newTasks.push(newTask)
   
    this.saveData(newTasks)
   this.setState({tasks:newTasks});
 
    
    //this.saveData(newTasks);
    

  }
  completeTask = (taskIndex) => {

    let newTasks = [...this.state.tasks];
    let isComplete = newTasks[taskIndex].complete ? false : true;
    newTasks[taskIndex].complete = isComplete;
    this.saveData(newTasks)
    this.setState({tasks:newTasks});
  }
  deleteTask = (deleteIndex) => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this task?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            //setTasks(tasks.filter((value, index) => index != deleteIndex))

            this.state.tasks.splice(deleteIndex,1)
            let newTasks = [...this.state.tasks]
            this.saveData(newTasks)
            this.setState({tasks:newTasks})
            
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
  



  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    //this.getData()
  }






  render() {
    return (
      <View>
        <TaskInputField2 addTask={this.addTask} />
        {
          this.state.tasks.map((task, index) => {
            return (
              <View key={index} style={styles.taskContainer} >
                <Item task={task} deleteTask={() => this.deleteTask(index)} completeTask={() => this.completeTask(index)} />
              </View>
            );
          })
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
  }

});