import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Animated, Easing, View, StyleSheet, Text} from 'react-native';
import colors from '../config/colors';
import Splash from '../containers/Splash';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Favorites from '../containers/Favorites';
import Notifications from '../containers/Notifications';
import Profile from '../containers/Profile';
import OTP from '../containers/OTP';
import UserDetails from '../containers/UserDetails';
import fonts from '../config/fonts';
import {Icon} from 'react-native-elements';
import SelectCity from '../containers/SelectCity';
import SelectHatti from '../containers/SelectHatti';

const styles = StyleSheet.create({
  tabView: {
    height: 36,
    width: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  activeTab: {
    // backgroundColor: colors.activeTab,
  },
  labelText: {
    // color: colors.mediumGrey,
    // fontFamily: fonts.openSans.semiBold,
    fontSize: 10,
    alignSelf: 'center',
    textAlign: 'center',
  },
  activeLabel: {
    // color: colors.secondary,
  },
  badge: {
    zIndex: 1122,
    position: 'absolute',
    top: 0,
    right: 0,
    // padding: 5,
    // backgroundColor: colors.secondary,
    borderRadius: 10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 15,
    // fontFamily: fonts.openSans.regular,
  },
});

export const getIcon = (routeName, focused, tintColor) => {
  let icon = null;
  const iconColor = tintColor;
  switch (routeName) {
    case 'Home':
      icon = <Icon name="home" size={30} color={iconColor} />;
      break;

    case 'Favorites':
      icon = (
        <Icon name="bookmark" size={30} color={iconColor} type="feather" />
      );
      break;

    case 'Notifications':
      icon = <Icon name="bell" size={30} color={iconColor} type="feather" />;
      break;

    case 'Profile':
      icon = <Icon name="user" size={30} color={iconColor} type="feather" />;
      break;
    default:
      break;
  }
  return icon;
};

const getLabel = routeName => {
  let label = '';
  switch (routeName) {
    case 'Home':
    case 'Favorites':
    case 'Notifications':
    case 'Profile':
      label = routeName;
      break;
    default:
      break;
  }
  return label;
};

const transitionConfig = () => ({
  transitionSpec: {
    duration: 100,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.spring,
    useNativeDriver: true,
  },
  screenInterpolator: sceneProps => {
    const {layout, position, scene} = sceneProps;
    const {index} = scene;

    const width = layout.initWidth;
    const translateX = position.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [width, 0, 0],
    });

    const opacity = position.interpolate({
      inputRange: [index - 1, index - 0.99, index],
      outputRange: [0, 1, 1],
    });

    return {opacity, transform: [{translateX}]};
  },
});

const authStack = createStackNavigator(
  {
    Login: {screen: Login},
    OTP: {screen: OTP},
    UserDetails: {screen: UserDetails},
  },
  {
    initialRouteName: 'Login',
    transitionConfig,
  },
);

const HomeNav = createStackNavigator(
  {
    Home: {screen: Home},
    SelectCity: {screen: SelectCity},
    SelectHatti: {screen: SelectHatti},
  },
  {
    initialRouteName: 'Home',
    transitionConfig,
  },
);

const NotificationsNav = createStackNavigator(
  {
    Notifications: {
      screen: Notifications,
    },
  },
  {
    initialRouteName: 'Notifications',
    transitionConfig,
  },
);

const FavoritesNav = createStackNavigator(
  {
    Favorites: {
      screen: Favorites,
    },
  },
  {
    initialRouteName: 'Favorites',
    transitionConfig,
  },
);

const ProfileNav = createStackNavigator(
  {
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Profile',
    transitionConfig,
  },
);

const tabStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNav,
    },
    Favorites: {
      screen: FavoritesNav,
    },
    Empty: {
      screen: () => null,
      navigationOptions: {
        tabBarOnPress: ({ navigation, defaultHandler }) => {
          // navigation.navigate('Home');
          // defaultHandler();
          return false;
        },
      },
    },
    Notifications: {
      screen: NotificationsNav,
    },
    Profile: {
      screen: ProfileNav,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName, params = {}} = navigation.state;
        const {badge, badgeKey} = params;
        const icon = getIcon(routeName, focused, tintColor);
        return (
          <View style={[styles.tabView]}>
            {icon}
            {badgeKey === routeName && badge && badge > 0 ? (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{1}</Text>
              </View>
            ) : null}
          </View>
        );
      },
      // eslint-disable-next-line react/prop-types
      tabBarLabel: ({focused}) => {
        const {routeName} = navigation.state;
        const label = getLabel(routeName);
        return (
          <Text style={[styles.labelText, focused ? styles.activeLabel : null]}>
            {label}
          </Text>
        );
      },
    }),
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      activeTintColor: '#08A022',
      inactiveTintColor: '#FFF',
      labelStyle: {
        color: '#FFF',
        fontFamily: fonts.JosefinSans.Regular,
        fontSize: 10,
      },
      style: {
        backgroundColor: '#312F2F',
        paddingVertical: 8,
      },
      keyboardHidesTabBar: true,
    },
  },
);

const drawerStack = createDrawerNavigator(
  {
    HomeTabs: {screen: tabStack},
  },
  {
    // contentComponent: Drawer,
    initialRouteName: 'HomeTabs',
    drawerType: 'slide',
    hideStatusBar: false,
    backBehavior: 'history',
    gesturesEnabled: false,
    drawerLockMode: 'locked-closed',
    edgeWidth: 0,
  },
);

const mainStack = createStackNavigator(
  {
    Splash: {screen: Splash},
    authStack,
    drawerStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splash',
    transitionConfig,
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const Navigation = createAppContainer(mainStack);

export default Navigation;
