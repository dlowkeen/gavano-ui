import React from 'react';
import {AsyncStorage, Text, View} from 'react-native';
import {GenericInput, RoundedButton} from '../../components/ui';
import {ApplicationStyles} from '../../themes';
import {ROUTES} from '../../utilities/constants';

interface ISignInScreenProps {
  navigation: any;
  authActions: any;
  auth: any;
}

export default class SignInScreen extends React.Component<ISignInScreenProps> {
  state = {email: '', password: ''};

  handleEmailChange = email => this.setState({email});
  handlePasswordChange = password => this.setState({password});

  render() {
    return (
      <View style={ApplicationStyles.container}>
        <Text style={ApplicationStyles.logoTitle}>Gavano</Text>
        <GenericInput
          onChangeText={this.handleEmailChange}
          value={this.state.email}
          label="Email"
        />
        <GenericInput
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
          label="Password"
        />
        <RoundedButton label="Sign In" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate(ROUTES.APP);
  };
}
