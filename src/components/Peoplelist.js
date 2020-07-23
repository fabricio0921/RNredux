import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';
const Peoplelist = props => {
    const { peoples, onPressItem } = props;

    const items = peoples.map(people =>
        <PeopleListItem
            key={people.name.first}
            people={people}
            navigateToDetail={onPressItem}
        />
    )
    return (
        <View style={styles.container}>
            {items}
        </View>
    )

}

export default Peoplelist;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff',

    },

}

)