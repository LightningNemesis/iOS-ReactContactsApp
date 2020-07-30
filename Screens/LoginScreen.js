import React from "react";
import { Text, Button, View, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logInUser, purgeState } from "../redux/actions";

class LoginScreen extends React.Component {
  static propTypes = {
    err: PropTypes.string,
    token: PropTypes.string,
    logInUser: PropTypes.func,
  };

  state = {
    username: "",
    password: "",
  };

  _login = async () => {
    console.log('Login pressed')
    this.props.logInUser(this.state.username, this.state.password);
  };

  _purge = () => {
    this.props.purgeState();
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.token) {
      console.log('Token recieved')
      this.props.navigation.navigate("Main");
    }else{
      console.log('error')
    }
    // if ((nextProps.token === "thisIsARealToken") && (nextProps.err === undefined)){
    //   console.log('Successful at finale')
    //   console.log(nextProps)
    //     this.props.navigation.navigate("Main");
    // }
    // if ((nextProps.token == "thisIsARealToken") && (nextProps.err !== undefined)){
    //   console.log('Not Successful at finale')
    //   console.log(nextProps)
    // }
  }

  handleUsernameChange = (username) => {
    this.setState({ username });
  };
  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.error}>{this.props.err}</Text>
        <Text style={styles.mainText}>Hi Fellas</Text>
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.usernameText}
            placeholder="Username"
            value={this.state.username}
            onChangeText={this.handleUsernameChange}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.passwordText}
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            secureTextEntry
          />
          <Button title="Login" onPress={() => this._login()} color="#3e32a8" />
          <Button title="Reset" onPress={() => this._purge()} color="red" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  err: state.user.loginErr,
  token: state.user.token,
});

export default connect(mapStateToProps, { logInUser, purgeState })(LoginScreen);

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  innerContainer: {
    paddingTop: 35,
  },
  mainText: {
    fontSize: 35,
  },
  usernameText: {
    fontSize: 20,
  },
  passwordText: {
    fontSize: 20,
    paddingVertical: 15,
  },
  error: {
    padding: 15,
    color: "red",
  },
});
