import fonts from './fonts';

const theme = {
  Input: {
    placeholderTextColor: '#FFF',
    underlineColorAndroid: '#0000',
    containerStyle: {
      paddingHorizontal: 0,
      marginVertical: 10,
    },
    inputContainerStyle: {
      height: 50,
      backgroundColor: '#FFFFFF32',
      borderRadius: 10,
      borderBottomWidth: 0,
      paddingHorizontal: 17,
    },
    inputStyle: {
      color: '#FFFFFF',
      fontFamily: fonts.JosefinSans.Regular,
      fontSize: 15,
      marginLeft: 12,
    },
  },
  Button: {
    containerStyle: {
      marginVertical: 10,
    },
    buttonStyle: {
      backgroundColor: '#08A022',
      height: 45,
      borderRadius: 9,
    },
    titleStyle: {
      color: '#FFFFFF',
      fontFamily: fonts.JosefinSans.Regular,
      fontSize: 15,
    },
  },
};

export default theme;
