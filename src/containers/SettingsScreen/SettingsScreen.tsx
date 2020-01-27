import React from 'react';
import {
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

interface ISettingsScreenProps {
  navigation: any;
  authActions: any;
  auth: any;
}

export default class SettingsScreen extends React.Component<ISettingsScreenProps> {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Page (need to add some stuff)</Text>
        <Button title="Sign out" onPress={this._signOutAsync} />
        <Button title="Add Bank Info" onPress={this._handlePressButtonAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  _handlePressButtonAsync = async () => {
    const blah = 'https://cdn.plaid.com/link/v2/stable/link.html?env=sandbox&selectAccount=false&key=22e27ed508c9ae65d89e11fadcae97&origin=localhost&product=auth,transactions&clientName'
    let result = await WebBrowser.openBrowserAsync(blah);
    this.setState({ result });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
