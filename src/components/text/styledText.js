/* @flow */
import styled, { css } from 'styled-components';
import _ from 'lodash';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';

import {
  font,
  propsColorFromTheme,
  fromProps,
  fromPropsTernary,
  media
} from '../../styleUtils';

const ComponentFromTagProp = createComponentFromTagProp({
  tag: 'a',
  prop: 'renderAs',
  propsToOmit: [
    'renderAs',
    'underline',
    'colors',
    'font',
    'sizeValues',
    'margin',
    'marginTop',
    'ellipsis',
    'noWrap',
    'align'
  ]
});

const fontSizeToLineHeight = fontSize => fontSize + 8;
const fontSizeToMargin = fontSize => (fontSize + 8) / 2;

const fontSize = size => fromProps(`sizeValues.font.${size}`);
const lineHeight = size => props => fontSizeToLineHeight(fontSize(size)(props));
const marginBottom = size => props => {
  if (_.isUndefined(props.margin)) {
    return fontSizeToMargin(fontSize(size)(props));
  }
  return props.margin;
};

const noWrap = props => {
  if (props.noWrap) {
    return css`
      white-space: nowrap;
    `;
  }
  return '';
};

const StyledText = styled(ComponentFromTagProp)`
  display: ${fromProps('display')};
  letter-spacing: ${fromProps('sizeValues.letterSpacing')}px;
  text-align: ${fromProps('align')};
  color: ${propsColorFromTheme('colors.regular')};
  fill: ${propsColorFromTheme('colors.regular')};
  font-size: ${fontSize('small')}px;
  line-height: ${lineHeight('small')}px;
  text-decoration: ${fromPropsTernary('underline', 'underline', 'none')};
  margin-bottom: ${marginBottom('small')}px;
  margin-top: ${fromProps('marginTop.small')}px;
  margin: 0;
  cursor: ${fromProps('cursor')};
  transition: color 0.2s ease-out;
  &:focus,
  &:hover {
    color: ${propsColorFromTheme('colors.hover')};
    fill: ${propsColorFromTheme('colors.hover')};
  }
  &:active {
    color: ${propsColorFromTheme('colors.active')};
    fill: ${propsColorFromTheme('colors.active')};
  }
  &:focus {
    outline: none;
  }
  ${media.medium`
    font-size: ${fontSize('medium')}px;
    line-height: ${lineHeight('medium')}px;
    margin-bottom: ${marginBottom('medium')}px;
    margin-top: ${fromProps('marginTop.medium')}px;
  `} ${media.large`
    font-size: ${fontSize('large')}px;
    line-height: ${lineHeight('large')}px;
    margin-bottom: ${marginBottom('large')}px;
    margin-top: ${fromProps('marginTop.large')}px;
  `} ${media.xlarge`
    font-size: ${fontSize('xlarge')}px;
    line-height: ${lineHeight('xlarge')}px;
    margin-bottom: ${marginBottom('xlarge')}px;
    margin-top: ${fromProps('marginTop.xlarge')}px;
  `} &:last-child {
    margin-bottom: 0;
  }
  ${props => font(props.font)} ${props =>
      props.ellipsis
        ? css`
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          `
        : ''} ${noWrap};
`;

export default StyledText;
