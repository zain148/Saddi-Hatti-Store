import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
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
  itemView: unread => {
    return {
      padding: 15,
      marginVertical: 5,
      backgroundColor: unread ? '#E80A60' : '#FFCC2E',
    };
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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

class Notifications extends Component {
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
          title: '#00101 Order has been created.',
          description: 'By John Verma',
          date: '22 Feb 5:30 pm',
          unread: true,
        },
        {
          id: 2,
          title: '#00101 Order has been confirmed.',
          description: 'By Baba Karyana Store',
          date: '22 Feb 5:30 pm',
        },
        {
          id: 3,
          title: '#00101 Order is ready for delivery.',
          description: 'By Baba Karyana Store',
          date: '22 Feb 5:30 pm',
        },
        {
          id: 4,
          title: '#00101 Order is ready for collection.',
          description: 'By Baba Karyana Store',
          date: '22 Feb 5:30 pm',
        },
        {
          id: 5,
          title: '#00101 Order is delivered.',
          description: 'By Baba Karyana Store',
          date: '22 Feb 5:30 pm',
        },
        {
          id: 6,
          title: '#00101 Order has been collected.',
          description: 'By John Verma',
          date: '22 Feb 5:30 pm',
        },
      ],
    };
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.itemView(item.unread)}>
        <View style={[styles.itemRow, {marginBottom: 10}]}>
          <Text numberOfLines={1} style={styles.itemTitle(item.unread)}>
            {item.title}
          </Text>
        </View>
        <View style={styles.itemRow}>
          <Text numberOfLines={1} style={styles.itemText(item.unread)}>
            {item.description}
          </Text>
          <Text numberOfLines={1} style={styles.itemText(item.unread)}>
            {item.date}
          </Text>
        </View>
      </View>
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
          centerComponent={<Text style={styles.hText}>Notifications</Text>}
        />
        <FlatList
          data={data}
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, padding: 15}}
          renderItem={this.renderItem}
          keyExtractor={item => String(item.id)}
        />
      </Screen>
    );
  }
}

Notifications.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

Notifications.defaultProps = {
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
)(Notifications);
