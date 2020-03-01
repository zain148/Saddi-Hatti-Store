import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import authActions from '../redux/reducers/auth/actions';
import fonts from '../config/fonts';
import {Input, Icon, Button} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Screen from '../components/Screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F0C642C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#FFFFFF',
    fontFamily: fonts.JosefinSans.Bold,
    fontSize: 34,
  },
  subtitle: {
    color: '#FFFFFF',
    fontFamily: fonts.JosefinSans.Light,
    fontSize: 15,
  },
  mainView: {
    flex: 1,
    zIndex: 1123,
  },
  mainViewTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSection: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
  },
  infoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    color: '#FFFFFF',
    fontFamily: fonts.JosefinSans.Regular,
    fontSize: 15,
  },
  inputView: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1122,
  },
});

class Login extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  next = () => {
    const {navigation} = this.props;
    navigation.navigate('OTP');
  };

  render() {
    return (
      <Screen>
        <KeyboardAwareScrollView
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          extraHeight={150}
          keyboardShouldPersistTaps="handled">
          <View style={styles.mainViewTop}>
            <Text style={styles.titleText}>Saddi Hatti</Text>
            <Text style={styles.subtitle}>Your local kiryana store</Text>
          </View>
          <View style={styles.inputSection}>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>
                Register with your mobile number
              </Text>
            </View>

            <View style={styles.inputView}>
              <Input
                placeholder="Enter Mobile Number"
                keyboardType="number-pad"
                leftIcon={
                  <Icon name="ios-mail" type="ionicon" size={30} color="#FFF" />
                }
              />
              <Button title="Next" onPress={this.next} />
            </View>
          </View>
          <View style={styles.bottomSection} />
        </KeyboardAwareScrollView>
      </Screen>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

Login.defaultProps = {
  authActions: {},
  auth: {},
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
