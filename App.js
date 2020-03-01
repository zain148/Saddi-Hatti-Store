/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'react-native-elements';
import AppContainer from './src/navigation/index';
import SplashScreen from 'react-native-splash-screen';
import {PersistGate} from 'redux-persist/integration/react';
import theme from './src/config/theme';
import configureStore from './src/redux/store/configureStore';
import {getActiveRouteName} from './src/common/utils';
import NavigationService from './src/common/NavigationService';

const {persistor, store} = configureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.disableScaling();
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  disableScaling = () => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    TextInput.defaultProps = TextInput.defaultProps || {};
    TextInput.defaultProps.allowFontScaling = false;
  };

  onNavigationStateChange = (prevState, currentState, action) => {
    const currentRouteName = getActiveRouteName(currentState);
    const previousRouteName = getActiveRouteName(prevState);

    if (previousRouteName !== currentRouteName) {
      // the line below uses the @react-native-firebase/analytics tracker
      // change the tracker here to use other Mobile analytics SDK.
      // eslint-disable-next-line no-console
      console.log('setCurrentScreen', currentRouteName);
      // firebase.analytics().setCurrentScreen(currentRouteName, currentRouteName);
    }
  };

  onRef = navigatorRef => {
    NavigationService.setTopLevelNavigator(navigatorRef);
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <AppContainer
              ref={this.onRef}
              onNavigationStateChange={this.onNavigationStateChange}
            />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
