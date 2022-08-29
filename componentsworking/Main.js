import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import Creater from "./Creater";
import { FlatList } from "react-native-gesture-handler";
import Item from "./Item";

export default function Main({ navigation }) {


    const [listOfItems, setlistOfItems] = useState([
        { text: 'Купить', key: 1 },
        { text: 'Стать', key: 2 },
        { text: 'Заработать', key: 3 },
        { text: 'Сходить', key: 4 },
    ]);
    console.log(listOfItems);
    const open = () => {
        navigation.navigate('Item');
    }
    const addItem = (x) => {
        setlistOfItems((item) => {
            return [{ x: x, key: Math.random().toString(36).substring(7) },
            ...item]
        })
    }

    return (
        <View style={styles.container}>
            <Creater addItem={addItem} />
            <FlatList data={listOfItems} renderItem={({ item }) => (
                <Item nav={navigation} el={item} />
            )} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        marginVertical: 0,

    },
});
