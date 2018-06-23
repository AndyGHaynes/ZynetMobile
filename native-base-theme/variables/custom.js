import color from 'color';

import {Platform, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = 'material';
const isIphoneX =
  platform === 'ios' && deviceHeight === 812 && deviceWidth === 375;

export default {
  platformStyle: 'material',
  platform: 'ios',
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: true,
  badgeBg: 'rgba(194,1,20,1)',
  badgeColor: '#fff',
  badgePadding: 3,
  btnFontFamily: 'System',
  btnDisabledBg: 'rgba(199,214,213,1)',
  buttonPadding: 6,
  btnPrimaryBg: 'rgba(12,18,12,1)',
  btnPrimaryColor: '#fff',
  btnInfoBg: 'rgba(60,60,179,1)',
  btnInfoColor: '#fff',
  btnSuccessBg: 'rgba(109,114,117,1)',
  btnSuccessColor: '#fff',
  btnDangerBg: 'rgba(236,28,47,1)',
  btnDangerColor: '#fff',
  btnWarningBg: 'rgba(255,87,6,1)',
  btnWarningColor: '#fff',
  btnTextSize: 16.5,
  btnTextSizeLarge: 22.5,
  btnTextSizeSmall: 12,
  borderRadiusLarge: 57,
  iconSizeLarge: 45,
  iconSizeSmall: 18,
  cardDefaultBg: 'rgba(236,235,243,1)',
  cardBorderColor: '#ccc',
  CheckboxRadius: 49,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 0,
  CheckboxIconSize: 18,
  CheckboxFontSize: 21,
  DefaultFontSize: 17,
  checkboxBgColor: 'rgba(50,74,95,1)',
  checkboxSize: 20,
  checkboxTickColor: 'rgba(236,235,243,1)',
  brandPrimary: 'rgba(194,1,20,1)',
  brandInfo: '#3F57D3',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: 'rgba(0,0,0,1)',
  brandLight: '#f4f4f4',
  fontFamily: 'System',
  fontSizeBase: 15,
  fontSizeH1: 27,
  fontSizeH2: 24,
  fontSizeH3: 21,
  footerHeight: 55,
  footerDefaultBg: 'rgba(194,1,20,1)',
  footerPaddingBottom: 0,
  tabBarTextColor: 'rgba(109,114,117,1)',
  tabBarTextSize: 14,
  activeTab: '#fff',
  sTabBarActiveTextColor: 'rgba(194,1,20,1)',
  tabBarActiveTextColor: 'rgba(236,235,243,1)',
  tabActiveBgColor: 'rgba(12,18,12,1)',
  toolbarBtnColor: 'rgba(236,235,243,1)',
  toolbarDefaultBg: 'rgba(12,18,12,1)',
  toolbarHeight: 64,
  toolbarSearchIconSize: 20,
  toolbarInputColor: 'rgba(236,235,243,1)',
  searchBarHeight: 30,
  searchBarInputHeight: 30,
  toolbarBtnTextColor: 'rgba(236,235,243,1)',
  toolbarDefaultBorder: 'rgba(194,1,20,1)',
  iosStatusbar: 'light-content',
  statusBarColor: 'rgba(0,0,0,1)',
  darkenHeader: '#F0F0F0',
  iconFamily: 'Ionicons',
  iconFontSize: 30,
  iconHeaderSize: 29,
  inputFontSize: 17,
  inputBorderColor: 'rgba(199,214,213,1)',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: 'rgba(194,1,20,1)',
  inputHeightBase: 50,
  inputColor: 'rgba(12,18,12,1)',
  inputColorPlaceholder: 'rgba(109,114,117,1)',
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 20,
  listBg: '#FFF',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: 10,
  listNoteColor: 'rgba(109,114,117,1)',
  listNoteSize: 13,
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',
  radioBtnSize: 25,
  radioSelectedColorAndroid: 'rgba(204,1,22,1)',
  radioBtnLineHeight: 29,
  segmentBackgroundColor: 'rgba(12,18,12,1)',
  segmentActiveBackgroundColor: 'rgba(236,235,243,1)',
  segmentTextColor: 'rgba(199,214,213,1)',
  segmentActiveTextColor: 'rgba(12,18,12,1)',
  segmentBorderColor: 'rgba(236,235,243,1)',
  segmentBorderColorMain: '#3F51B5',
  defaultSpinnerColor: 'rgba(194,1,20,1)',
  inverseSpinnerColor: 'rgba(35,31,40,1)',
  tabDefaultBg: 'rgba(109,114,117,1)',
  topTabBarTextColor: 'rgba(199,214,213,1)',
  topTabBarActiveTextColor: 'rgba(236,235,243,1)',
  topTabBarBorderColor: 'rgba(236,235,243,1)',
  topTabBarActiveBorderColor: 'rgba(194,1,20,1)',
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  textColor: 'rgba(109,114,117,1)',
  inverseTextColor: 'rgba(236,235,243,1)',
  noteFontSize: 14,
  defaultTextColor: '#000',
  titleFontfamily: 'System',
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: 'rgba(236,235,243,1)',
  titleFontColor: 'rgba(236,235,243,1)',
  borderRadiusBase: 2,
  borderWidth: 0.5,
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth: 1280,
  deviceHeight: 726,
  isIphoneX: false,
  inputGroupRoundedBorderRadius: 30
};
