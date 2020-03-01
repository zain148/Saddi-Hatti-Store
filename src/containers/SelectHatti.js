import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import authActions from '../redux/reducers/auth/actions';
import Screen from '../components/Screen';
import {Header, Input, Icon} from 'react-native-elements';
import BackIcon from '../components/BackIcon';
import fonts from '../config/fonts';
import images from '../config/images';

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
    // padding: 15,
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
    justifyContent: 'flex-start',
  },
  itemTitle: unread => {
    return {
      color: unread ? '#FFFFFF' : '#2B2B2B',
      fontFamily: fonts.JosefinSans.SemiBold,
      fontSize: 15,
      marginBottom: 4,
    };
  },
  itemText: unread => {
    return {
      color: unread ? '#FFFFFF' : '#2B2B2B',
      fontFamily: fonts.JosefinSans.Regular,
      fontSize: 12,
    };
  },
  image: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
});

class SelectHatti extends Component {
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
          name: 'Baba Karyana Store',
          address: '1087, Phase 7 , SAS Nagar Mohali',
          open: true,
          distance: '2.5 km',
          rating: 4.5,
          unread: false,
        },
        {
          id: 2,
          name: 'Baba Karyana Store',
          address: '1087, Phase 7 , SAS Nagar Mohali',
          open: true,
          distance: '2.5 km',
          rating: 4.5,
          unread: true,
        },
        {
          id: 3,
          name: 'Baba Karyana Store',
          address: '1087, Phase 7 , SAS Nagar Mohali',
          open: false,
          distance: '2.5 km',
          rating: 4.5,
          unread: false,
        },
        {
          id: 4,
          name: 'Baba Karyana Store',
          address: '1087, Phase 7 , SAS Nagar Mohali',
          open: true,
          distance: '2.5 km',
          rating: 4.5,
          unread: false,
        },
        {
          id: 5,
          name: 'Baba Karyana Store',
          address: '1087, Phase 7 , SAS Nagar Mohali',
          open: false,
          distance: '2.5 km',
          rating: 4.5,
          unread: false,
        },
        {
          id: 6,
          name: 'Baba Karyana Store',
          address: '1087, Phase 7 , SAS Nagar Mohali',
          open: true,
          distance: '2.5 km',
          rating: 4.5,
          unread: false,
        },
        {
          id: 7,
          name: 'Baba Karyana Store',
          address: '1087, Phase 7 , SAS Nagar Mohali',
          open: true,
          distance: '2.5 km',
          rating: 4.5,
          unread: false,
        },
      ],
    };
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.itemView(item.unread)}>
        <View style={[styles.itemRow, {marginBottom: 10}]}>
          <Image
            source={images.onlineStore}
            resizeMode="contain"
            style={styles.image}
          />
          <View>
            <Text numberOfLines={1} style={styles.itemTitle(item.unread)}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={styles.itemText(item.unread)}>
              {item.address}
            </Text>
          </View>
        </View>

        <View style={[styles.itemRow, {justifyContent: 'space-between'}]}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <View
              style={{
                height: 20,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FFF',
              }}>
              <Text
                style={{
                  color: item.open ? '#4CD964' : '#FF3B30',
                  fontFamily: fonts.JosefinSans.Bold,
                  fontSize: 10,
                }}>
                {item.open ? 'OPEN' : 'CLOSE'}
              </Text>
            </View>

            <View
              style={{
                height: 15,
                // width: 40,
                borderRadius: 7.5,
                paddingHorizontal: 7.5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#848DFF',
                marginLeft: 13,
              }}>
              <Text
                style={{
                  color: '#ffffff',
                  fontFamily: fonts.JosefinSans.Regular,
                  fontSize: 10,
                }}>
                {item.distance}
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 20,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FFF',
              flexDirection: 'row',
            }}>
            <Icon name="ios-star" color="#FFCC00" size={15} type="ionicon" />
            <Text
              style={{
                color: '#222455',
                fontFamily: fonts.JosefinSans.Bold,
                fontSize: 12,
                marginLeft: 5,
              }}>
              {item.rating}
            </Text>
          </View>
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
          centerComponent={<Text style={styles.hText}>Select Hatti</Text>}
        />
        <View style={{flex: 1, paddingHorizontal: 15, paddingTop: 10}}>
          <Input
            placeholder="Search"
            placeholderTextColor="#6E7FAA"
            leftIcon={
              <Icon
                name="ios-search"
                type="ionicon"
                color="#6E7FAA"
                size={30}
              />
            }
            rightIcon={
              <Icon
                name="equalizer"
                type="simple-line-icon"
                color="#6E7FAA"
                size={25}
              />
            }
            rightIconContainerStyle={{width: 60}}
            inputStyle={{color: '#000'}}
            inputContainerStyle={{
              backgroundColor: '#FFF',
              paddingHorizontal: 0,
            }}
          />
          <FlatList
            data={data}
            style={styles.list}
            contentContainerStyle={styles.listCont}
            renderItem={this.renderItem}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </Screen>
    );
  }
}

SelectHatti.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  authActions: PropTypes.objectOf(PropTypes.func),
  auth: PropTypes.objectOf(PropTypes.any),
};

SelectHatti.defaultProps = {
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
)(SelectHatti);
