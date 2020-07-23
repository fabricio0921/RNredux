import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeoplePage from './src/pages/PeoplePage';
import PeopleDetail from './src/pages/PeopleDatail';
import { capitalizeFirstLetter } from './src/util';
const AppNavigator = createStackNavigator(
  {

    'Pessoa': { screen: PeoplePage },
    'Detail': {
      screen: PeopleDetail,
      navigationOptions: ({ navigation }) => {
        const peopleName = navigation.state.params.people.name.first;
        return ({
          title: peopleName,
          headerTitleStyle: {
            color: 'white',
            fontSize: 30
          }

        })

      }
    },


  }, {
  defaultNavigationOptions: {
    title: 'Pessoas!',
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: '#6ca2f7',
      borderBottomWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
      flexGrow: 1,
      textAlign: 'center'
    }
  }
}

);

export default createAppContainer(AppNavigator);



