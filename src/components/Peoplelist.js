import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
const Peoplelist = props => {
    const { peoples, onPressItem } = props;

    
    return (
        <FlatList
            style={styles.container}
            data={peoples}
            renderItem={({ item }) => (<PeopleListItem
                
                people={item}
                navigateToDetail={onPressItem}
            />)}
            keyExtractor={item=>item.name.first}
        />
    )

}

export default Peoplelist;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff',

    },

}

)