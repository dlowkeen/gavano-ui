import React from 'react';
import {AsyncStorage, Button, StatusBar, StyleSheet, View} from 'react-native';

interface IOtherScreenProps {
  navigation: any;
  authActions: any;
  auth: any;
}

export default class OtherScreen extends React.Component<IOtherScreenProps> {
  static navigationOptions = {
    title: 'Lots of features here',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
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
