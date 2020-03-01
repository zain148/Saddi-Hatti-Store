import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import authActions from '../redux/reducers/auth/actions';
import Screen from '../components/Screen';
import {Header} from 'react-native-elements';
import BackIcon from '../components/BackIcon';
import fonts from '../config/fonts';

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
});

class Profile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      // title: 'Profile',
    };
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <Screen safe={false}>
        <Header
          containerStyle={{backgroundColor: '#0000', borderBottomWidth: 0}}
          leftComponent={<BackIcon navigation={navigation} />}
          centerComponent={<Text style={styles.hText}>Profile</Text>}
        />
      </Screen>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

Profile.defaultProps = {
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
)(Profile);
