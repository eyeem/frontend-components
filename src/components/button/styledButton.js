/* @flow */
import styled, { css } from 'styled-components/primitives';

import {
  font,
  fromInternalTheme,
  fromProps,
  fromPropsTernary,
  propsColorFromTheme
} from '../../styleUtils';

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
    return `
      overflow: hidden;
      &:before {
        display: inline-block;
        margin-bottom: -2px;
        margin-right: ${props.children ? '12px' : '0'};

        width: 16px;
        height: 16px;
        background-image: url("/node-static/img/spinner-32-white.png");
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

const StyledButton = styled.View`
  position: relative;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${fromPropsTernary('fullWidth', '100%', 'auto')};
  font-size: ${fromProps('sizeValues.fontSize')};
  line-height: ${fromProps('sizeValues.lineHeight')};
  padding: ${fromProps('sizeValues.padding')};
  max-height: ${fromProps('sizeValues.maxHeight')};
  border: 1px solid ${propsColorFromTheme('colors.borderRegular')};
  border-radius: ${fromInternalTheme('borderRadius')};
  background-color: ${propsColorFromTheme('colors.bgRegular')};
  color: ${propsColorFromTheme('colors.fontRegular')};
  fill: ${propsColorFromTheme('colors.fontRegular')};
  vertical-align: top;
  text-decoration: none;
  text-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-out,
    color 0.2s ease-out, fill 0.2s ease-out;
  pointer-events: all;

  ${fromPropsTernary('moveIconToLeft', 'padding-left: 32px;', '')} ${font(
  'regular'
)} ${spinner} ${disabled} ${progress};
`;

export default StyledButton;
