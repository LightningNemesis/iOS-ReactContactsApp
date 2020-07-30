import React from 'react';
import {connect} from 'react-redux'
import AddContactForm from '../AddContactForm';
import {updateContact} from '../redux/actions'
import store from '../redux/store';

class AddContactScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'New Contact',
    headerTintColor: '#3e32a8',
  };

  handleSubmit = formState => {
    this.props.updateContact({name:formState.name, phone: formState.phone})
    this.props.navigation.navigate('ContactList');
  };

  render() {
    return <AddContactForm onSubmit={this.handleSubmit} />;
  }
}

export default connect(null, {updateContact: updateContact})(AddContactScreen)