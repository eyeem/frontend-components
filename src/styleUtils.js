/* @flow */
import _ from 'lodash';
import { css } from 'styled-components';

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
  regular:
    '"HelveticaNeueW02-55Roma", "Helvetica Neue", Helvetica, Arial, sans-serif',
  light:
    '"HelveticaNeueW02-45Ligh", "Helvetica Neue", Helvetica, Arial, sans-serif',
  bold:
    '"HelveticaNeueW02-75Bold", "Helvetica Neue", Helvetica, Arial, sans-serif'
};

export const helvetica = (type: 'regular' | 'light' | 'bold') => `
  font-weight: 300;
  font-family: ${typeToFontFamily[type]};
`;

export const fromTheme = (selector: string) => (props: { theme: Theme }) =>
  _.get(props.theme, selector);
export const fromProps = (selector: string) => (props: {}) =>
  _.get(props, selector);
export const fromPropsTernary = (
  selector: string,
  ifCase: string,
  elseCase: string
) => (props: {}) => {
  if (_.get(props, selector)) {
    return ifCase;
  }
  return elseCase;
};

export const propsColorFromTheme = (selector: string) => (props: {
  theme: Theme
}) => fromTheme(`colors.${_.get(props, selector)}`)(props);
