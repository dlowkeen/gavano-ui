import React from 'react';
import axios from 'axios';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authActions} from '../../actions';
import {GenericInput, RoundedButton} from '../../components/ui';
import {ApplicationStyles} from '../../themes';
import {ROUTES} from '../../utilities/constants';

interface IJoinScreenProps {
  navigation: any;
  authActions: any;
  auth: any;
}

interface IJoinScreenState {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

class JoinScreen extends React.Component<IJoinScreenProps, IJoinScreenState> {
  state = {email: '', firstName: '', lastName: '', password: ''};

  handleEmailChange = email => this.setState({email});
  handlePasswordChange = password => this.setState({password});
  handleFirstNameChange = firstName => this.setState({firstName});
  handleLastNameChange = lastName => this.setState({lastName});

  render() {
    return (
      <View style={ApplicationStyles.container}>
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
    const { email, firstName, lastName, password } = this.state;
    const user = {
      email,
      firstName,
      lastName,
      password,
    }
    const { data } = await axios.post('http://localhost:3000/auth/signup', user);
    console.log('data', data);
    this.props.authActions.login(data);
    this.props.navigation.navigate(ROUTES.APP);
  };
}

export function mapStateToProps(state) {
  return {
    auth: state.authReducer,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JoinScreen);
