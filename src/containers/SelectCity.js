import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
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
    fontSize: 20,
  },
  hCont: {
    backgroundColor: '#0000',
    borderBottomWidth: 0,
  },
  list: {
    flex: 1,
  },
  listCont: {
    flexGrow: 1,
    padding: 15,
  },
  itemView: unread => {
    return {
      padding: 15,
      backgroundColor: unread ? '#E80A60' : '#FFCC2E',
    };
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: unread => {
    return {
      color: unread ? '#FFFFFF' : '#2B2B2B',
      fontFamily: fonts.JosefinSans.SemiBold,
      fontSize: 15,
    };
  },
  itemText: unread => {
    return {
      color: unread ? '#FFFFFF' : '#2B2B2B',
      fontFamily: fonts.JosefinSans.Regular,
      fontSize: 12,
    };
  },
});

class SelectCity extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Chandigarh',
          unread: false,
        },
        {
          id: 2,
          title: 'SAS Nagar Mohali',
          unread: true,
        },
        {
          id: 3,
          title: 'Panchkula',
          unread: false,
        },
      ],
    };
  }

  onPressItem = item => () => {
    const {navigation} = this.props;
    navigation.navigate('SelectHatti');
  };

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemView(item.unread)}
        onPress={this.onPressItem(item)}>
        <View style={[styles.itemRow]}>
          <Text numberOfLines={1} style={styles.itemTitle(item.unread)}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {navigation} = this.props;
    const {data} = this.state;
    return (
      <Screen safe={false}>
        <Header
          containerStyle={styles.hCont}
          leftComponent={<BackIcon navigation={navigation} />}
          centerComponent={<Text style={styles.hText}>Select City</Text>}
        />
        <FlatList
          data={data}
          style={styles.list}
          contentContainerStyle={styles.listCont}
          renderItem={this.renderItem}
          keyExtractor={item => String(item.id)}
        />
      </Screen>
    );
  }
}

SelectCity.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

SelectCity.defaultProps = {
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
)(SelectCity);
