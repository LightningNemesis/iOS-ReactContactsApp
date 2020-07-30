import React from 'react'
import {Text,View} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class RecentsScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) => (
            <MaterialCommunityIcons
              name={`account-clock${focused ? "" : "-outline"}`}
              size={25}
              color={tintColor}
            />),
        headerTitle: 'Recents',
        headerTintColor: '#3e32a8',
    }
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>
                    Recents Coming Soon...
                </Text>
            </View>
        )
    }
}


