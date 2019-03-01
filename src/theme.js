import { BREAKPOINTS } from './styleUtils';

export const colors = {
  whites: {
    white: '#ffffff',
    pearlWhite: '#fafafa',
    transparent: 'rgba(0,0,0,0)'
  },

  greys: {
    grey1: '#666666',
    grey2: '#888888',
    grey3: '#999999',
    grey4: '#cccccc',
    grey5: '#e5e5e5',
    grey6: '#f2f2f2',
    grey7: '#f5f5f5'
  },

  blacks: {
    black1: '#000000',
    black2: '#111111',
    black3: '#1d1d1d',
    black4: '#292929',
    black5: '#333333'
  },

  lightColors: {
    lightRed: '#fff5f5',
    lightBlue: '#e7f0fb'
  },

  solidColors: {
    green: '#22cc88',
    greenv2: '#48B307',
    greenHover: '#4ed69f',
    greenActive: '#1ba36c',
    orange: '#ffaa33',
    orangeHover: '#ffbb5b',
    orangeActive: '#cc8828',
    red: '#ff3333',
    redHover: '#ff5b5b',
    redActive: '#cc2828',
    redv2: '#EA3223'
  },

  foreigns: {
    tumblr: '#34465d',
    twitter: '#55acee',
    facebook1: '#3a5795',
    facebook2: '#3b5998',
    facebook2Hover: '#4c70ba',
    facebook2Disabled: '#96abd6',
    paypal: '#009cde',
    paypalActive: '#007CB1',
    paypalDisabled: '#7FCEEF',
    paypalHover: '#008CC8'
  },

  uncategorized: {
    unnamed1: '#b2b2b2',
    unnamed3: 'rgba(255,255,255,.2)',
    unnamed7: 'rgba(51,51,51,.6)',
    unnamed8: 'rgba(0,0,0,.8)',
    unnamed9: 'rgba(0,0,0,.6)',
    unnamed10: 'rgba(0,0,0,.4)',
    unnamed12: 'rgba(255,255,255,.3)',
    unnamed13: 'rgba(255,255,255,.1)',
    unnamed15: 'rgba(0,0,0,.1)',
    unnamed16: 'rgba(0,0,0,.2)',
    unnamed17: 'rgba(0,0,0,.7)',
    unnamed24: '#ff6666',
    unnamed28: 'rgba(255,255,255,.6)',
    unnamed30: 'rgba(255,255,255,.5)',
    unnamed31: '#5555ff',
    unnamed39: 'rgba(0,0,0,.5)'
  }
};

export const borderRadius = '2px';

/* NOTE: styled-system
         https://styled-system.com/#space-theming
         https://styled-system.com/#responsive-styles
*/
export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const breakpoints = {
  sm: `${BREAKPOINTS.small}px`,
  md: `${BREAKPOINTS.medium}px`,
  lg: `${BREAKPOINTS.large}px`,
  xl: `${BREAKPOINTS.xlarge}px`
};
