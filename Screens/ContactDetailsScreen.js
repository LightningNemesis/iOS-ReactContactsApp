import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ContactDetailsScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Contact Details',
            headerTintColor: '#3e32a8',
            headerLeft: () =>
            <Button color='#3e32a8' title='Back' onPress={()=>navigation.navigate('ContactList')}/>
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contactIcon}>
                    <Ionicons name="ios-contacts" size={100}/>
                </View>
                <View style={styles.details}>
                    <Text style={{fontSize:20, padding:20}}>Name: {this.props.navigation.getParam('name')}</Text>
                    <Text style={{fontSize:15, paddingLeft:5}}>Phone No.: {this.props.navigation.getParam('phone')}</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contactIcon: {
        paddingTop: 50,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    details: {
        flex: 1,
        backgroundColor: '#f8f7fa',
        paddingTop: 40,
        // marginHorizontal: 10,
        marginBottom: 150,
        paddingHorizontal: 80,
        alignItems: 'center',
        // alignContent: 'center',
        // justifyContent: 'center',
    }
})