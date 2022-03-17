/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, {useState} from 'react';
 import { KeyboardAvoidingView, StyleSheet, View, TextInput,Text, TouchableOpacity, } from "react-native";
 
 export default TaskInputField = (props) => {
     const [task, setTask] = useState();
 
     const handleAddTask = (value) => {
         props.addTask(value);
         setTask(null);
     }
 
     return (
         
        
           <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
         <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'New item...'} placeholderTextColor={'#000000'}/>
         
         <TouchableOpacity onPress={() => handleAddTask(task)}>
           <View style={styles.button}>
              <Text>+</Text>
           </View>
         </TouchableOpacity>
            </KeyboardAvoidingView>
         
     );
 }
 
 const styles = StyleSheet.create({
     container: {
         borderColor: '#3E3364',
         backgroundColor: '#fff',
         borderWidth: 1,
         marginHorizontal: 20,
         borderRadius: 12,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'space-between',
         paddingHorizontal: 10,
         
     },
     inputField: {
         color: '#000000',
         height: 50,
         flex: 2,
     },
     button: {
         height: 30,
         width: 30,
         borderRadius: 5,
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center'
     },
 });