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
  componentDidMount(){
    axios
      .get('https://randomuser.me/api/?nat=br&results=6')
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
        
        <Peoplelist peoples={this.state.peoples}/>



      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',

  },
});
