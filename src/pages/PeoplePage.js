import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';

import axios from 'axios';


import Peoplelist from '../components/Peoplelist';
export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: []
    }


  }
  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=7')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });


      })
  }


  render() {

    return (
      <View style={styles.container}>

        <Peoplelist
          peoples={this.state.peoples}
          onPressItem={pageParams => { this.props.navigation.navigate('Detail', pageParams) }}
        />



      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',

  },
});
