import React from "react";
import { Button, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import {connect} from 'react-redux'

import SectionListContacts from "../SectionListContacts";

class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Contacts",
      headerTintColor: "#3e32a8",
      headerRight: () => (
        <Button
          title="Add"
          onPress={() => navigation.navigate("AddContact")}
          color="#3e32a8"
        />
      ),
    };
  };

  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.showContacts && (
          <SectionListContacts
            contacts={this.props.contacts}
            onSelectContact={(contact) => {
              this.props.navigation.navigate("ContactDetails", {
                phone: contact.phone,
                name: contact.name,
              });
            }}
          />
        )}
      </View>
    );
  }
}

const MapStateToProps = state => ({
    contacts: state.contacts,
})

export default connect(MapStateToProps)(ContactListScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
