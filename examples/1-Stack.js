import React from 'react';
import { Button, View, Text } from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

function randomNumber() {
  return Math.floor(Math.random() * 10)
}

class ScreenComponentOne extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'First Screen',
      headerTintColor: 'teal',
    }    
  }
  
    render() {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            borderWidth: 25,
            borderColor: 'teal',
          }}>
          <Button
            title="Go to two"
            onPress={() => {
                this.props.navigation.navigate('RouteNameTwo')
            }}
          />
        </View>
      )
    }
  }

class ScreenComponentTwo extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Second Screen',
      headerTintColor: 'purple',

      headerRight: () =>
      <Button title='Press Me' 
      onPress={ () => navigation.navigate('RouteNameThree', {number: 11} )} />,

      headerLeft: () =>
      <Button title='Back' 
      onPress={() => navigation.navigate('RouteNameOne')}/>,
    }
  }
      render() {
          return (
          <View
              style={{
              flex: 1,
              justifyContent: 'center',
              borderWidth: 25,
              borderColor: 'purple',
              }}>
              <Button
              title="Go to Three"
              onPress={() => {
                  this.props.navigation.navigate('RouteNameThree', {
                    number: randomNumber()
                  })
              }}
              />
          </View>
          )
      }
}


class ScreenComponentThree extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: `Number: ${navigation.getParam('number')}`,
      headerTintColor: 'orange',
    }
  }
      render() {
          return (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 25,
              borderColor: 'orange',
          }}>
            <Text style={{fontSize: 25}}>
              {this.props.navigation.getParam('number')}</Text>
            <Button
              title="New Number"
              onPress={() => {
                  this.props.navigation.setParams({number: randomNumber()})
              }}
            />
            <Button
              title="Go back"
              onPress={() => {
                  this.props.navigation.goBack()
              }}
            />
          </View>
          )
      }
}

const AppNavigator = createAppContainer(createStackNavigator({
  RouteNameOne: ScreenComponentOne,
  RouteNameTwo: ScreenComponentTwo,
  RouteNameThree: ScreenComponentThree,
}))





export default class App extends React.Component {
    render() {
      return <AppNavigator />
    }
}


  