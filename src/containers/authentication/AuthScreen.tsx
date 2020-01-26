import React from 'react';
import {AsyncStorage, Linking, Platform, Text, View} from 'react-native';
import {Button, RoundedButton, TransparentButton} from '../../components/ui';
import {ApplicationStyles} from '../../themes';
import {ROUTES} from '../../utilities/constants';
import * as WebBrowser from 'expo-web-browser';

interface IAuthScreenProps {
  navigation: any;
  authActions: any;
  auth: any;
}

export default class AuthScreen extends React.Component<IAuthScreenProps> {
  render() {
    return (
      <View style={ApplicationStyles.container}>
        <Text style={ApplicationStyles.logoTitle}>Gavano</Text>
        <Text style={ApplicationStyles.sectionText}>
          Make your life carbon neutral.
        </Text>
        <RoundedButton label="Join now" onPress={this.goToJoinNow} />
        <TransparentButton
          label="Join with Google"
          onPress={this._signInAsync}
        />
        <Button label="Sign in" onPress={this.goToSignIn} />
      </View>
    );
  }

  goToJoinNow = () => {
    this.props.navigation.navigate(ROUTES.JOIN);
  };

  goToSignIn = () => {
    this.props.navigation.navigate(ROUTES.SIGNIN);
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    // Handle Login with Google button tap
    // this.openURL('https://localhost:3000/auth/google');
    let result = await WebBrowser.openBrowserAsync('http://localhost:3000/auth/google');
    console.log('result', result);

    this.props.navigation.navigate(ROUTES.APP);
  };

}
