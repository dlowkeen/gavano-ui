import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authActions} from '../../actions';
import {AsyncStorage, Button, View} from 'react-native';
import {ApplicationStyles} from '../../themes';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Gavano',
  };

  render() {
    return (
      <View style={ApplicationStyles.container}>
        <Button title="Recent Offsets" onPress={this._showMoreApp} />
        <Button title="Settings" onPress={this.goToSettings} />
        <Button title="Sign Out" onPress={this._signOutAsync} />
      </View>
    );
  }

  goToSettings = () => {
    this.props.navigation.navigate('Settings');
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
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
)(HomeScreen);
