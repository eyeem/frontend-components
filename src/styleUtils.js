/* @flow */
import _get from 'lodash/get';
import { css } from 'styled-components';
import * as theme from './theme';

// breakpoint lower limits
export const BREAKPOINTS = {
  small: 0,
  medium: 641,
  large: 769,
  xlarge: 1025
};

// iterate through the sizes and create a media template
export const media = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = BREAKPOINTS[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

const typeToFontFamily = {
  regular: '"Sailec Regular", sans-serif',
  bold: '"Sailec Bold", sans-serif',
  light: '"Sailec Light", sans-serif'
};

// eslint-disable-next-line
export const font = (type: 'regular' | 'bold' = 'regular' | 'light') => `
  font-weight: 300;
  font-family: ${typeToFontFamily[type]};
`;

export const fromInternalTheme = (selector: string) => () =>
  _get(theme, selector);
export const fromTheme = (selector: string) => (props: { theme: {} }) =>
  _get(props.theme, selector);
export const fromProps = (selector: string) => (props: {}) =>
  _get(props, selector);
export const fromPropsTernary = (
  selector: string,
  ifCase: string,
  elseCase: string
) => (props: {}) => {
  if (_get(props, selector)) {
    return ifCase;
  }
  return elseCase;
};

// Flexbox helper
export const alignItems = (
  position: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
) =>
  position
    ? `
    align-items: ${position};
  `
    : '';

export const propsColorFromTheme = (selector: string) => (props: {}) =>
  fromInternalTheme(`colors.${_get(props, selector)}`)(props);

export const isRgbaColor = (color: string) => color && color.startsWith('rgba');

const getRGBComponents = (color: string) => {
  if (isRgbaColor(color)) {
    const rgba = color.match(/\d+/g);
    return {
      red: rgba[0],
      green: rgba[1],
      blue: rgba[2],
      alpha: rgba[3]
    };
  }

  const red = color.substring(1, 3);
  const green = color.substring(3, 5);
  const blue = color.substring(5, 7);

  return {
    red: parseInt(red, 16),
    green: parseInt(green, 16),
    blue: parseInt(blue, 16)
  };
};

export const idealTextColor = bgColor => {
  const threshold = 105;
  const components = getRGBComponents(bgColor);
  const bgDelta =
    components.red * 0.299 + components.green * 0.587 + components.blue * 0.114;

  if (components.alpha && components.alpha < 0.4) {
    return '#000000';
  }

  return 255 - bgDelta < threshold ? '#000000' : '#ffffff';
};
