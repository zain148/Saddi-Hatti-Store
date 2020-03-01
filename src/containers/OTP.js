import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import authActions from '../redux/reducers/auth/actions';
import Screen from '../components/Screen';
import {Header, Input, Button, Icon} from 'react-native-elements';
import BackIcon from '../components/BackIcon';
import fonts from '../config/fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  hText: {
    color: '#FFFFFF',
    fontFamily: fonts.JosefinSans.SemiBold,
    fontSize: 15,
  },
  mainViewTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSection: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  infoView: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    color: '#FFFFFF',
    fontFamily: fonts.JosefinSans.Light,
    fontSize: 15,
  },
  inputView: {
    // flex: 1,
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

class OTP extends Component {
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
    navigation.navigate('UserDetails');
  };

  render() {
    const {navigation} = this.props;
    return (
      <Screen safe={false}>
        <Header
          containerStyle={{backgroundColor: '#0000', borderBottomWidth: 0}}
          leftComponent={<BackIcon navigation={navigation} />}
          centerComponent={<Text style={styles.hText}>Confirm OTP</Text>}
        />
        <KeyboardAwareScrollView
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          extraHeight={150}
          keyboardShouldPersistTaps="handled">
          <View style={styles.mainViewTop}>
            {/* <Text style={styles.titleText}>Saddi Hatti</Text>
            <Text style={styles.subtitle}>Your local kiryana store</Text> */}
          </View>
          <View style={styles.inputSection}>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>
                OTP sent to <Text style={styles.hText}>07518914502</Text>
              </Text>
            </View>

            <View style={styles.inputView}>
              <Input placeholder="Enter OTP" keyboardType="number-pad" />
              <Button title="Confirm" onPress={this.next} />
            </View>

            <View style={[styles.infoView, { marginTop: 15 }]}>
              <Text style={styles.infoText}>
                Resend OTP to <Text style={styles.hText}>07518914502</Text>
              </Text>
            </View>
          </View>
          <View style={styles.bottomSection} />
        </KeyboardAwareScrollView>
      </Screen>
    );
  }
}

OTP.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

OTP.defaultProps = {
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
)(OTP);
