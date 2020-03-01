import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import authActions from '../redux/reducers/auth/actions';
import Screen from '../components/Screen';
import fonts from '../config/fonts';
import images from '../config/images';
import {Button} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  bigText: {
    color: '#FFFFFF',
    fontFamily: fonts.JosefinSans.SemiBold,
    fontSize: 30,
    marginVertical: 5,
  },
  mediumText: {
    color: '#FFFFFF',
    fontFamily: fonts.JosefinSans.Regular,
    fontSize: 15,
    marginVertical: 2.5,
  },
  yellow: {
    color: '#FFCC00',
  },
  mainView: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
  },
  topView: {
    flex: 1,
    alignItems: 'flex-start',
  },
  bottomView: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  image: {
    height: 61,
    width: 61,
    marginBottom: 25,
  },
});

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  startOrder = () => {
    const {navigation} = this.props;
    navigation.navigate('SelectCity');
  };

  render() {
    return (
      <Screen>
        <View style={styles.mainView}>
          <View style={styles.topView}>
            <Image
              source={images.onlineStore}
              resizeMode="contain"
              style={styles.image}
            />
            <Text style={styles.bigText}>{'Hi JohnVerma,'}</Text>
            <Text style={styles.bigText}>Welcome to</Text>
            <Text style={[styles.bigText, styles.yellow]}>Saddi Hatti</Text>
          </View>

          <View style={styles.bottomView}>
            <View>
              <Text style={styles.mediumText}>Order grocery,</Text>
              <Text style={styles.mediumText}>from your local store.</Text>
            </View>
            <Button title="Start Your Order" onPress={this.startOrder} />
          </View>
        </View>
      </Screen>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

Home.defaultProps = {
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
)(Home);
