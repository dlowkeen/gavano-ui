import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../containers/HomeScreen/HomeScreen';
import Other from '../containers/other/Other';
import SignIn from '../containers/authentication/SignIn';
import AuthLoading from '../containers/authentication/AuthLoading';
import SettingsScreen from '../containers/SettingsScreen/SettingsScreen';
import AuthScreen from '../containers/authentication/AuthScreen';
import JoinScreen from '../containers/authentication/Join';
import {ROUTES} from '../utilities/constants';

const AppStack = createStackNavigator({
  [ROUTES.HOME]: HomeScreen,
  [ROUTES.OTHER]: Other,
  [ROUTES.SETTINGS]: SettingsScreen,
});
const AuthStack = createStackNavigator({
  [ROUTES.AUTH]: AuthScreen,
  [ROUTES.JOIN]: JoinScreen,
  [ROUTES.SIGNIN]: SignIn,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      [ROUTES.AUTHLOADING]: AuthLoading,
      App: AppStack,
      [ROUTES.AUTH]: AuthStack,
    },
    {
      initialRouteName: ROUTES.AUTHLOADING,
    },
  ),
);
