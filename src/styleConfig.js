/* @flow */
export const textSizes = {
  default: {
    font: {
      small: 14,
      medium: 16,
      large: 16,
      xlarge: 16
    },
    letterSpacing: 0.4
  },
  pStatic: {
    font: {
      small: 14,
      medium: 14,
      large: 14,
      xlarge: 14
    },
    letterSpacing: 0
  },
  pMin: {
    font: {
      small: 12,
      medium: 12,
      large: 12,
      xlarge: 12
    },
    letterSpacing: 0
  },
  headline: {
    font: {
      small: 24,
      medium: 32,
      large: 40,
      xlarge: 56
    },
    letterSpacing: 0.3
  },
  headline2: {
    font: {
      small: 20,
      medium: 24,
      large: 32,
      xlarge: 40
    },
    letterSpacing: 0.3
  },
  headline2Pumped: {
    font: {
      small: 24,
      medium: 28,
      large: 36,
      xlarge: 44
    },
    letterSpacing: 0.3
  },
  headline3: {
    font: {
      small: 18,
      medium: 22,
      large: 28,
      xlarge: 32
    },
    letterSpacing: 0.3
  },
  headline4: {
    font: {
      small: 20,
      medium: 20,
      large: 24,
      xlarge: 24
    },
    letterSpacing: 0.3
  },
  sub1: {
    font: {
      small: 16,
      medium: 20,
      large: 24,
      xlarge: 24
    },
    letterSpacing: 0.3
  },
  sub2: {
    font: {
      small: 14,
      medium: 24,
      large: 24,
      xlarge: 24
    },
    letterSpacing: 0
  },
  subHeader: {
    font: {
      small: 12,
      medium: 12,
      large: 14,
      xlarge: 14
    },
    letterSpacing: 0
  },
  loudSub: {
    font: {
      small: 14,
      medium: 14,
      large: 14,
      xlarge: 16
    },
    letterSpacing: 0.3
  },
  loud: {
    font: {
      small: 56,
      medium: 48,
      large: 56,
      xlarge: 64
    },
    letterSpacing: 0.3
  },
  cap: {
    font: {
      small: 12,
      medium: 14,
      large: 14,
      xlarge: 14
    },
    letterSpacing: 0
  },
  tableP: {
    font: {
      small: 14,
      medium: 14,
      large: 14,
      xlarge: 16
    },
    letterSpacing: 0.3
  },
  sidebarP: {
    font: {
      small: 12,
      medium: 12,
      large: 12,
      xlarge: 14
    },
    letterSpacing: 0
  },
  footerSection: {
    font: {
      small: 16,
      medium: 16,
      large: 16,
      xlarge: 16
    },
    letterSpacing: 0.2
  },
  footerSub: {
    font: {
      small: 10,
      medium: 10,
      large: 10,
      xlarge: 10
    },
    letterSpacing: 0.1
  },
  tablePrice: {
    font: {
      small: 40,
      medium: 20,
      large: 20,
      xlarge: 20
    },
    letterSpacing: 0.2
  }
};

export const textFonts = ['regular', 'light', 'bold'];
export const textDisplays = ['block', 'inline-block', 'inline'];
export const textAligns = ['left', 'center', 'right'];
export const textTopMargins = {
  none: {
    small: 0,
    medium: 0,
    large: 0,
    xlarge: 0
  },
  regular: {
    small: 36,
    medium: 56,
    large: 56,
    xlarge: 56
  },
  xsmall: {
    small: 4,
    medium: 4,
    large: 4,
    xlarge: 8
  },
  xsmall2: {
    small: 0,
    medium: 0,
    large: 2,
    xlarge: 4
  },
  small: {
    small: 16,
    medium: 24,
    large: 24,
    xlarge: 24
  },
  smallStatic: {
    small: 16,
    medium: 16,
    large: 16,
    xlarge: 16
  },
  small2: {
    small: 12,
    medium: 12,
    large: 12,
    xlarge: 12
  },
  medium: {
    small: 45,
    medium: 68,
    large: 76,
    xlarge: 76
  },
  large: {
    small: 48,
    medium: 48,
    large: 48,
    xlarge: 48
  },
  large2: {
    small: 40,
    medium: 40,
    large: 40,
    xlarge: 40
  },
  xlarge: {
    small: 104,
    medium: 104,
    large: 104,
    xlarge: 104
  }
};
export const textColors = {
  default: { regular: 'blacks.black5' },
  green: { regular: 'solidColors.green' },
  white: { regular: 'whites.white' },
  grey1: { regular: 'greys.grey1' },
  grey2: { regular: 'greys.grey2' },
  grey3: { regular: 'greys.grey3' },
  opacityWhite: {
    regular: 'uncategorized.unnamed28'
  },
  link: {
    regular: 'greys.grey3',
    hover: 'greys.grey4',
    active: 'blacks.black5'
  },
  linkOnDark: {
    regular: 'greys.grey4',
    hover: 'whites.white',
    active: 'greys.grey5'
  },
  linkBlack: {
    regular: 'blacks.black5',
    hover: 'uncategorized.unnamed7',
    active: 'blacks.black5'
  },
  linkGreen: {
    regular: 'solidColors.green',
    hover: 'solidColors.greenHover',
    active: 'solidColors.greenActive'
  },
  linkOrange: {
    regular: 'solidColors.orange',
    hover: 'solidColors.orangeHover',
    active: 'solidColors.orangeActive'
  },
  linkRed: {
    regular: 'solidColors.red',
    hover: 'solidColors.redHover',
    active: 'solidColors.redActive'
  },
  linkWhite: {
    regular: 'whites.white',
    hover: 'whites.pearlWhite',
    active: 'whites.pearlWhite'
  }
};

export const buttonColors = {
  default: {
    fontRegular: 'whites.white',
    bgRegular: 'uncategorized.unnamed1',
    bgHover: 'greys.grey4',
    bgActive: 'greys.grey3',
    bgDisabled: 'greys.grey1',
    fontDisabled: 'whites.white'
  },
  green: {
    fontRegular: 'whites.white',
    bgRegular: 'solidColors.green',
    bgHover: 'solidColors.greenHover',
    bgActive: 'solidColors.greenActive',
    bgDisabled: 'solidColors.greenHover',
    fontDisabled: 'whites.white'
  },
  greenFont: {
    fontRegular: 'solidColors.green',
    bgRegular: 'whites.transparent',
    fontHover: 'whites.white',
    bgHover: 'solidColors.green',
    bgActive: 'solidColors.greenActive',
    bgDisabled: 'whites.transparent',
    fontDisabled: 'solidColors.green'
  },
  orange: {
    fontRegular: 'whites.white',
    bgRegular: 'solidColors.orange',
    bgHover: 'solidColors.orangeHover',
    bgActive: 'solidColors.orangeActive',
    bgDisabled: 'solidColors.orangeHover',
    fontDisabled: 'whites.white'
  },
  red: {
    fontRegular: 'whites.white',
    bgRegular: 'solidColors.red',
    bgHover: 'solidColors.redHover',
    bgActive: 'solidColors.redActive',
    bgDisabled: 'greys.grey1',
    fontDisabled: 'whites.white'
  },
  white: {
    fontRegular: 'blacks.black1',
    bgRegular: 'whites.white',
    bgHover: 'uncategorized.unnamed28',
    bgActive: 'uncategorized.unnamed12',
    bgDisabled: 'uncategorized.unnamed28',
    fontDisabled: 'uncategorized.unnamed17'
  },
  black: {
    fontRegular: 'whites.white',
    bgRegular: 'blacks.black1',
    bgHover: 'blacks.black5',
    bgActive: 'blacks.black1',
    bgDisabled: 'blacks.black1',
    fontDisabled: 'whites.white'
  },
  bluePaypal: {
    fontRegular: 'whites.white',
    bgRegular: 'foreigns.paypal',
    bgHover: 'blacks.black1',
    bgActive: 'blacks.black1',
    bgDisabled: 'foreigns.paypal',
    fontDisabled: 'whites.white'
  },
  whiteTrans: {
    fontRegular: 'greys.grey1',
    bgRegular: 'uncategorized.unnamed3',
    bgHover: 'uncategorized.unnamed12',
    bgActive: 'uncategorized.unnamed12',
    bgDisabled: 'uncategorized.unnamed12',
    fontDisabled: 'whites.white'
  },
  blackTrans: {
    fontRegular: 'whites.white',
    bgRegular: 'uncategorized.unnamed10',
    bgHover: 'uncategorized.unnamed8',
    bgActive: 'uncategorized.unnamed8',
    bgDisabled: 'uncategorized.unnamed8',
    fontDisabled: 'whites.white'
  },
  facebook: {
    fontRegular: 'whites.white',
    bgRegular: 'foreigns.facebook2',
    bgHover: 'foreigns.facebook2Hover',
    bgActive: 'foreigns.facebook2Active',
    bgDisabled: 'foreigns.facebook2Disabled',
    fontDisabled: 'whites.white'
  },
  ghostWhite: {
    fontRegular: 'whites.white',
    bgRegular: 'whites.transparent',
    bgDisabled: 'whites.transparent',
    fontDisabled: 'whites.white',
    borderRegular: 'whites.white',
    borderHover: 'whites.white',
    borderActive: 'whites.white'
  },
  ghostGreen: {
    fontRegular: 'solidColors.green',
    bgRegular: 'whites.transparent',
    bgDisabled: 'whites.transparent',
    borderRegular: 'solidColors.green',
    borderHover: 'solidColors.greenHover',
    borderActive: 'solidColors.greenActive',
    fontDisabled: 'solidColors.greenHover',
    borderDisabled: 'solidColors.greenHover'
  },
  ghostGrey: {
    fontRegular: 'blacks.black5',
    bgRegular: 'whites.transparent',
    bgDisabled: 'whites.transparent',
    borderRegular: 'greys.grey4',
    fontDisabled: 'blacks.black5',
    fontHover: 'solidColors.green',
    fontActive: 'solidColors.green',
    borderDisabled: 'blacks.black1',
    borderHover: 'solidColors.green',
    borderActive: 'solidColors.green'
  },
  transparent: {
    fontRegular: 'greys.grey3',
    bgRegular: 'whites.transparent',
    bgDisabled: 'whites.transparent',
    bgHover: 'uncategorized.unnamed15',
    fontHover: 'whites.white',
    bgActive: 'whites.transparent'
  }
};

// prefills some default values if they were omitted in the definitions
export const getButtonColorSet = (color: string) => ({
  borderRegular: 'whites.transparent',
  borderHover: 'whites.transparent',
  borderActive: 'whites.transparent',
  borderDisabled: buttonColors[color].borderRegular || 'whites.transparent',
  fontHover: buttonColors[color].fontRegular,
  fontActive: buttonColors[color].fontRegular,
  fontDisabled: buttonColors[color].fontRegular,
  ...buttonColors[color]
});

export const buttonSizes = {
  default: {
    fontSize: '16px',
    lineHeight: '24px',
    padding: '7px 15px',
    maxHeight: '40px',
    iconSize: '16'
  },
  large: {
    fontSize: '16px',
    lineHeight: '24px',
    padding: '11px 16px 12px 16px',
    maxHeight: '48px',
    iconSize: '18'
  },
  small: {
    fontSize: '14px',
    lineHeight: '16px',
    padding: '7px 15px',
    maxHeight: '40px',
    iconSize: '14'
  },
  minimal: {
    padding: '8px',
    fontSize: '12px',
    lineHeight: '16px',
    maxHeight: '32px',
    iconSize: '16'
  }
};

export const icons = {
  eyeconfont: [
    'star',
    'image',
    'mail',
    'phone',
    'close',
    'timing',
    'prize',
    'remove',
    'alert',
    'flag',
    'embed',
    'delete',
    'backToTop',
    'contactEyeEm',
    'contactFacebook',
    'contactTwitter',
    'contactTumblr'
  ],
  buttons: [
    'cart',
    'checkmark',
    'download',
    'upload',
    'compDownload',
    'like',
    'comment',
    'addToLightbox',
    'isInLightbox',
    'dragndrop',
    'share',
    'facebook'
  ],
  services: ['dropbox', 'googledrive', 'flickr', 'picasa', 'instagram'],
  uncategorized: [
    'leftArrow',
    'rightArrow',
    'leftArrow2',
    'plus',
    'terms',
    'market',
    'growth',
    'star2',
    'star3'
  ]
};
