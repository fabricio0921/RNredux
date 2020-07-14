import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => (
    <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{props.title}</Text>
    </View>
)


export default Header;

const styles= StyleSheet.create({
    containerStyle: {
        marginTop: 25,
        backgroundColor: '#6ca2f7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleStyle: {
        
        fontSize: 50,
        color: 'white'
    }
});