import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetail from './src/pages/PeopleDatail';
const AppNavigator = createStackNavigator(
  {
    Pessoa: PeoplePage,
    Detail: PeopleDetail
    
    
  },{
    defaultNavigationOptions:{
      title:'Pessoas!',
      headerStyle:{
        backgroundColor:'#6ca2f7',
        borderBottomWidth:1,
        borderBottomColor:'#c5c5c5'
      },
      headerTitleStyle:{
        color:'white',
        fontSize:30,
        flexGrow:1,
        textAlign: 'center'
      }
    }
  }
  
);

export default createAppContainer(AppNavigator);



