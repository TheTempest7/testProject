import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import FlatList from 'react-native';
import { TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Item() {



    return (
        <TouchableHighlight >
            <View >
                <Text >gagaga</Text>
                <View>
                    <Icon name="plus-circle" size={36} color="black" />
                </View>

            </View>

        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({

})
