import React from 'react';
import {
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
