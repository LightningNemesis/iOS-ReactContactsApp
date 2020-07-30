import React from 'react';
import { Button, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';



class ScreenComponentOne extends React.Component {
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
                this.props.navigation.navigate('routeNameTwo')
            }}
          />
        </View>
      )
    }
  }

class ScreenComponentTwo extends React.Component {
    render() {
        return (
        <View
            style={{
            flex: 1,
            justifyContent: 'center',
            borderWidth: 25,
            borderColor: 'yellow',
            }}>
            <Button
            title="Go to One"
            onPress={() => {
                this.props.navigation.navigate('routeNameOne')
            }}
            />
        </View>
        )
    }
}

const AppNavigator = createSwitchNavigator({
routeNameOne: ScreenComponentOne,
routeNameTwo: ScreenComponentTwo,
});

const AppNav = createAppContainer(AppNavigator)


export default class App extends React.Component {
    render() {
        return <AppNav />;
    }
}


  