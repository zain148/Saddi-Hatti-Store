import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import authActions from '../redux/reducers/auth/actions';
import Screen from '../components/Screen';
import {Header, Input, Button, Icon} from 'react-native-elements';
// import BackIcon from '../components/BackIcon';
import fonts from '../config/fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {StackActions, NavigationActions} from 'react-navigation';

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
    color: '#FFFFFF',
    fontFamily: fonts.JosefinSans.Bold,
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 3,
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

class UserDetails extends Component {
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
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'drawerStack'})],
    });
    navigation.dispatch(resetAction);
  };

  render() {
    return (
      <Screen>
        <KeyboardAwareScrollView
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1}}
          extraHeight={250}
          keyboardShouldPersistTaps="handled">
          <View style={styles.mainViewTop} />
          <View style={styles.inputSection}>
            <View style={styles.infoView}>
              <Text style={styles.infoText}>We need few more details,</Text>
              <Text style={styles.infoText}>
                this help us to contact you fast.
              </Text>
            </View>

            <View style={styles.inputView}>
              <Input
                placeholder="Name"
                leftIcon={
                  <Icon name="user" size={20} color="#FFF" type="feather" />
                }
              />
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                leftIcon={
                  <Icon name="mail" size={20} color="#FFF" type="feather" />
                }
              />
              <Input
                placeholder="Your location"
                leftIcon={
                  <Icon name="map-pin" size={20} color="#FFF" type="feather" />
                }
              />

              <Button
                title="Next"
                onPress={this.next}
                containerStyle={{marginTop: 30}}
              />
            </View>
          </View>
          <View style={styles.bottomSection} />
        </KeyboardAwareScrollView>
      </Screen>
    );
  }
}

UserDetails.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

UserDetails.defaultProps = {
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
)(UserDetails);
