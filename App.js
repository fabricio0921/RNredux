import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';

import axios from 'axios';

import Header from './src/components/Header';

export default class App extends React.Component{
renderList(){
  /*
  const names =['Joelma', 
  'chimbinha',
   'Raul',
   'Steave Wonder',
  'Jimmi randrix'];

   const textelements = names.map(name=>{
   return <Text key={name}>{name}</Text>
   })
   */
  axios
  .get('https://randomuser.me/api/?nat=br&results=5')
  .then(response=>{
    const {results}=response.data
    const names = results.map(people=>{
      people.name.first
    })
    return results;
  })
//return results;
}


  render(){
    
    return (
      <View style={styles.container}>
        <Header title="Pessoas !"/>
        {this.renderList()}
        

        
      </View>
    );

  }
  
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    
  },
});
