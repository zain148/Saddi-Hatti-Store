import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import authActions from '../redux/reducers/auth/actions';
import {SafeAreaView} from 'react-navigation';
import images from '../config/images';

const COLORS = ['#2D2D2D69', '#0808082E', '#000000'];

const LOCATIONS = [0, 0.18, 1];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  overlay: {
    flex: 1,
    zIndex: 2,
  },
});

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {safe} = this.props;
    return (
      <ImageBackground
        style={styles.container}
        source={images.splash}
        imageStyle={styles.background}>
        <StatusBar barStyle="light-content" backgroundColor="#0000" />
        <LinearGradient
          colors={COLORS}
          locations={LOCATIONS}
          style={styles.linearGradient}
        />
        {safe ? (
          <SafeAreaView style={styles.overlay}>
            {this.props.children}
          </SafeAreaView>
        ) : (
          <View style={styles.overlay}>{this.props.children}</View>
        )}
      </ImageBackground>
    );
  }
}

Screen.propTypes = {
  // navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
  safe: PropTypes.bool,
};

Screen.defaultProps = {
  authActions: {},
  auth: {},
  safe: true,
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
)(Screen);
