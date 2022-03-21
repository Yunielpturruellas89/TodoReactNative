/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, Text, TouchableOpacity, } from "react-native";
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default TaskInputField = (props) => {
    const [task, setTask] = useState();

    const handleAddTask = (value) => {
        props.addTask(value);
        setTask(null);
    }

    return (


        <View

            style={styles.container}
        >
            <View style={styles.InputContainer}>
                <TextInput maxLength={28} style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'New item...'} placeholderTextColor={'#000000'} />

            </View>
            <View style={styles.ButtonContainer}>
                <TouchableOpacity onPress={() => handleAddTask(task)}>
                    <View style={styles.button}>
                        <Icon name='md-add-circle-sharp' size={25} color="#000000" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
        height: 40,

    },
    ButtonContainer: {

        width: 40,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    InputContainer: {
        borderColor: '#3E3364',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,

    },

    inputField: {
        color: '#000000',
        height: 50,
        flex: 1,
    },


});