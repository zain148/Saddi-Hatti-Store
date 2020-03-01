import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import authActions from '../redux/reducers/auth/actions';
import fonts from '../config/fonts';
import Screen from '../components/Screen';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#F0C642C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#3E3F68',
    fontFamily: fonts.JosefinSans.Bold,
    fontSize: 34,
  },
  subtitle: {
    color: '#221111',
    fontFamily: fonts.JosefinSans.Light,
    fontSize: 15,
  },
});

class Splash extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.goHome();
    }, 1000);
  }

  goHome = () => {
    const {navigation} = this.props;
    navigation.navigate('authStack');
  };

  render() {
    return (
      <Screen>
        <View style={styles.overlay}>
          <Text style={styles.titleText}>Saddi Hatti</Text>
          <Text style={styles.subtitle}>Your local kiryana store</Text>
        </View>
      </Screen>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

Splash.defaultProps = {
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
)(Splash);
