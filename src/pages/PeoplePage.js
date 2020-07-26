import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { render } from 'react-dom';

import axios from 'axios';


import Peoplelist from '../components/Peoplelist';
export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      loading: false,
      error: false
    }


  }
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      axios
        .get('https://randomuser.me/api/?nat=br&results=150')
        .then(response => {
          const { results } = response.data;
          this.setState({
            peoples: results,
            loading: false
          });


        })

    }, 1500).catch(error => {
      this.setState({ error: true })
    })


  }

  renderLoading() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' color="#6ca2f7" />

    } else {
      return <Peoplelist
        peoples={this.state.peoples}
        onPressItem={pageParams => { this.props.navigation.navigate('Detail', pageParams) }}
      />;
    }

  }


  render() {


    return (
      <View style={styles.container}>
        {this.renderLoading()}





      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'

  },
});
