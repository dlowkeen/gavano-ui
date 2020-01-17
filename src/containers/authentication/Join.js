import React from 'react';
import {AsyncStorage, Text, View} from 'react-native';
import {GenericInput, RoundedButton} from '../../components/ui';
import {ApplicationStyles} from '../../themes';
import {ROUTES} from '../../utilities/constants';

export default class JoinScreen extends React.Component {
  state = {email: '', firstName: '', lastName: '', password: ''};

  handleEmailChange = email => this.setState({email});
  handlePasswordChange = password => this.setState({password});
  handleFirstNameChange = firstName => this.setState({firstName});
  handleLastNameChange = lastName => this.setState({lastName});

  render() {
    return (
      <View style={ApplicationStyles.screen.container}>
        <Text style={ApplicationStyles.logoTitle}>Gavano</Text>
        <GenericInput
          onChangeText={this.handleFirstNameChange}
          value={this.state.firstName}
          label="First name"
        />
        <GenericInput
          onChangeText={this.handleLastNameChange}
          value={this.state.lastName}
          label="Last name"
        />
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
        <RoundedButton label="Join now" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate(ROUTES.APP);
  };
}
