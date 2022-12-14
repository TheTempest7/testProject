import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Item from './Item';
import { TextInput, Button, TouchableOpacity } from 'react-native';
import { useRef } from 'react';


export default function Creater(props) {
    const [text, setText] = useState('');

    const inputer = useRef();

    const Changer = (text) => {
        setText(text);
    }

    const Send = () => {
        props.addItem(text);
        inputer.current.value = '';
        setText('');
    }
    return (
        <View style={styles.container}>
            <View>
                <TextInput ref={inputer} style={styles.inputer} onChangeText={Changer} placeholder={'Водите что нибудь'} />
            </View>
            <TouchableOpacity style={styles.button} onPress={Send}><Text>Применить</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    inputer: {
        backgroundColor: '#FFF',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#458',
    }
});
