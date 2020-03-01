import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import authActions from '../redux/reducers/auth/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

class EnterMobile extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      // header: null,
      title: 'EnterMobile',
    };
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>EnterMobile</Text>
      </View>
    );
  }
}

EnterMobile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

EnterMobile.defaultProps = {
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
)(EnterMobile);
