import { Dimensions,StatusBar,Platform } from 'react-native';

export const FAMILY = {
  REGULAR: 'Poppins-Regular',
  BOLD: 'Poppins-Bold',
  MEDIUM:'Poppins-Medium',
  SEMIBOLD:'Poppins-semiBold'
}

export const COLOR = {
  DEFAULT:'#f5b642',
  WHITE:'#fff',
  DARK:'#0a000b',
  LIGHTGREY:'#b3b3b3',
  GREY: '#444',
  RED:'#f71000',
  BLUE:'#0091ff',
  SMOKE_WHITE:'#dbdbdb'
}

export const SIZE = {
  tiny: 10,
  small: 12,
  medium: 14,
  compact: 16,
  large: 18,
  huge: 24,
  big: 72
}

export const DIMENSIONS = {
  WIDTH:Dimensions.get('screen').width,
  HEIGHT:Dimensions.get('screen').height,
}

export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const APP_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;