import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../config/colors';

const styles = StyleSheet.create({
  hLeft: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});

class BackIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onBackPress = () => {
    const {navigation, tabs} = this.props;
    // console.log('navigation', navigation);
    if (tabs) {
      navigation.popToTop();
      navigation.navigate('Home');
    } else {
      navigation.goBack();
    }
  };

  render() {
    return (
      <Icon
        onPress={this.onBackPress}
        name="arrow-left"
        underlayColor="#0000"
        type="simple-line-icon"
        color={'#FFF'}
        size={25}
        containerStyle={styles.hLeft}
      />
    );
  }
}

BackIcon.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  tabs: PropTypes.bool,
};

BackIcon.defaultProps = {
  tabs: false,
};

export default BackIcon;
