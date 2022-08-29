import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { TextInput, Button, TouchableOpacity } from 'react-native';



export default function Creater(props) {
    const [text, setText] = useState('');

    const inputer = useRef();

    const Changer = (text) => {
        setText(text);
    }

    const Send = () => {
        props.addItem(text);
        inputer.value = '';
        console.log(inputer.current._internalFiberInstanceHandleDEV);
        setText('');
    }
    return (
        <View style={styles.container}>
            <View>
                <TextInput ref={inputer} style={styles.inputer} onChangeText={Changer} placeholder={'Водите что нибудь'} />
            </View>
            <TouchableOpacity style={styles.button} onPress={Send}><Text style={styles.buttonTxt}>Применить</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        marginVertical: 0,

    },
    inputer: {
        backgroundColor: '#FFF',
        textAlign: 'center'
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#458',
    },
    buttonTxt: {
        maxWidth: 100,
        backgroundColor: 'yellow',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,

    }

});
