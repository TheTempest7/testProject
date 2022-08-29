import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import FlatList from 'react-native';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Item(props) {

    const openUP = () => {
        props.nav.navigate('About', props.el);
    }
    const fg = () => {
        props.deleteItem(props.el);
        console.log(props.el);
    }
    const done = (e) => {
        console.log(e.target.style.pointerEvents);
        e.target.style.pointerEvents = 'none';
        e.target.style.opacity = '0.5'
    }


    return (
        <TouchableHighlight onPress={fg} onLongPress={done} style={styles.container}>
            <View style={styles.parentView}>
                <Text style={styles.text}>{props.el.text}</Text>
                <View style={styles.icon}>
                    <Icon onPress={openUP} name="add" size={36} color="black" />
                </View>

            </View>

        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '25px',
        paddingVertical: '10px',
        marginHorizontal: '10%',
    },
    parentView: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
    }
    , text: {
        flexGrow: '1',
        marginLeft: '20px',
    }
})
