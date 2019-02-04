/* @flow */
import theme from 'styled-theming';
import styled, { css } from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import { colors } from '../../theme';
import {
  font,
  fromProps,
  alignItems,
  fromPropsTernary,
  propsColorFromTheme
} from '../../styleUtils';

const ComponentFromTagProp = createComponentFromTagProp({
  tag: 'button',
  prop: 'renderAs',
  propsToOmit: [
    'renderAs',
    'progress',
    'sizeValues',
    'spinner',
    'fullWidth',
    'moveIconToLeft',
    'fill',
    'display',
    'alignItems'
  ]
});

const disabled = props => {
  if (props.disabled || (props.progress && props.progress < 100)) {
    return css`
      cursor: default;
      border-color: ${propsColorFromTheme('colors.borderDisabled')};
      background-color: ${propsColorFromTheme('colors.bgDisabled')};
      color: ${propsColorFromTheme('colors.fontDisabled')};
      fill: ${propsColorFromTheme('colors.fontDisabled')};
      &:focus,
      &:hover {
        color: ${propsColorFromTheme('colors.fontDisabled')};
        fill: ${propsColorFromTheme('colors.fontDisabled')};
        background-color: ${propsColorFromTheme('colors.bgDisabled')};
        border-color: ${propsColorFromTheme('colors.borderDisabled')};
      }
      &:active {
        background-color: ${propsColorFromTheme('colors.bgDisabled')};
        border-color: ${propsColorFromTheme('colors.borderDisabled')};
      }
    `;
  }
  return '';
};

const progress = props => {
  if (props.progress && props.progress < 100) {
    return css`
      background-image: linear-gradient(
        to right,
        ${propsColorFromTheme('colors.bgRegular')} 0%,
        ${propsColorFromTheme('colors.bgRegular')} ${fromProps('progress')}%,
        ${propsColorFromTheme('colors.bgDisabled')} ${fromProps('progress')}%,
        ${propsColorFromTheme('colors.bgDisabled')} 100%
      );
    `;
  }
  return '';
};

const spinner = props => {
  if (props.spinner) {
    const spinnerImg =
      props.colors &&
      props.colors.bgRegular &&
      ['ghost', 'white', 'trans'].filter(
        item => props.colors.bgRegular.indexOf(item) !== -1
      ).length > 0
        ? 'spinner-32-black.png'
        : 'spinner-32-white.png';

    return `
      overflow: hidden;
      &:before {
        display: inline-block;
        margin-bottom: -2px;
        margin-right: ${props.children ? '12px' : '0'};

        width: 16px;
        height: 16px;
        background-image: url("/node-static/img/${spinnerImg}");
        background-position: center;
        background-size: 16px 16px;
        background-repeat: no-repeat;
        content: "";
        animation: spin .7s linear infinite;
      }
    `;
  }
  return '';
};

const backgroundColorDefault = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  }
});

const backgroundColorHover = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  }
});

const borderColorDefault = theme.variants('mode', 'fill', {
  outline: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  },
  solid: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  }
});

const borderColorHover = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  },
  solid: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  }
});

const textColorDefault = theme.variants('mode', 'fill', {
  outline: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  },
  solid: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  }
});

const textColorHover = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  },
  solid: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  }
});

const StyledButtonv2 = styled(ComponentFromTagProp)`
  position: relative;
  display: ${props => props.display};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${fromPropsTernary('fullWidth', '100%', 'auto')};
  font-size: ${fromProps('sizeValues.fontSize')};
  line-height: ${fromProps('sizeValues.lineHeight')};
  padding: ${fromProps('sizeValues.padding')};
  max-height: ${fromProps('sizeValues.maxHeight')};
  border-color: ${borderColorDefault};
  border: 1px solid;
  background-color: ${backgroundColorDefault};
  color: ${textColorDefault};
  fill: ${propsColorFromTheme('colors.fontRegular')};
  ${props => alignItems(props.alignItems)}
  vertical-align: top;
  text-decoration: none;
  text-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-out,
    color 0.2s ease-out, fill 0.2s ease-out;
  pointer-events: all;
  &:focus,
  &:hover {
    color: ${textColorHover};
    fill: ${propsColorFromTheme('colors.fontHover')};
    background-color: ${backgroundColorHover};
    border-color: ${borderColorHover};
  }
  &:active {
    background-color: ${propsColorFromTheme('colors.bgActive')};
    border-color: ${propsColorFromTheme('colors.borderActive')};
  }
  &:focus {
    outline: none;
  }
  ${fromPropsTernary('moveIconToLeft', 'padding-left: 32px;', '')} ${font(
  'regular'
)} ${spinner} ${disabled} ${progress};
`;

export default StyledButtonv2;
