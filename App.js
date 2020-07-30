import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ErrorHandler } from "redux-persist-error-handler";

import AddContactScreen from "./Screens/AddContactScreen";
import ContactListScreen from "./Screens/ContactListScreen";
import ContactDetailsScreen from "./Screens/ContactDetailsScreen";
import LoginScreen from "./Screens/LoginScreen";
import RecentsScreen from "./Screens/RecentsScreen";
import Contacts from "./contacts";

import { store, persistor } from "./redux/store";

const ContactsTab = createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
  },
  {
    initialRouteName: "ContactList",
  }
);

ContactsTab.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <MaterialIcons
      name={`people${focused ? "" : "-outline"}`}
      size={25}
      color={tintColor}
    />
  ),
};

const MainNavigator = createBottomTabNavigator(
  {
    contacts: ContactsTab,
    Recents: RecentsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: "#3e32a8",
      labelStyle: {
        fontSize: 14,
        alignItems: "center",
        justifyContent: "center",
      },
    },
  }
);

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Login: LoginScreen,
      Main: MainNavigator,
    },
    {
      initialRouteName: "Login",
    }
  )
);

export default class App extends React.Component {
  state = {
    contacts: null,
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
