import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {ApplicationStyles} from '../../themes';
import {ROUTES} from '../../utilities/constants';

interface IAuthLoadingScreenProps {
  navigation: any;
  authActions: any;
  auth: any;
}

export default class AuthLoadingScreen extends React.Component<IAuthLoadingScreenProps> {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? ROUTES.APP : ROUTES.AUTH);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={ApplicationStyles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Text style={ApplicationStyles.logoTitle}>Gavano</Text>
      </View>
    );
  }
}