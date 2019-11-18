/* @flow */
import styled from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import {
  backgroundColorDefault,
  backgroundColorHover,
  backgroundColorActive,
  backgroundColorDisabled,
  borderColorDefault,
  borderColorHover,
  borderColorActive,
  borderColorDisabled,
  textColorDefault,
  textColorActive,
  textColorHover,
  textColorDisabled
} from './buttonColors';

import {
  font,
  fromProps,
  alignItems,
  fromPropsTernary
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
    'alignItems',
    'followTextColorIconStroke',
    'followTextColorIconFill'
  ]
});

const getFillAndStroke = (props, colorFunction) => {
  let style = '';
  if (props.followTextColorIconStroke) {
    style += `
        stroke: ${colorFunction(props)};
    `;
  }
  if (props.followTextColorIconFill) {
    style += `
        fill: ${colorFunction(props)};
    `;
  }
  return style;
};

const getIconStyles = props => {
  if (props.followTextColorIconStroke || props.followTextColorIconFill) {
    return `
      path {
        transition: stroke 0.2s ease-out, fill 0.2s ease-out;
        ${getFillAndStroke(props, textColorDefault)}
      }
      &:hover {
        path {
          ${getFillAndStroke(props, textColorHover)}
        }
      }
      &:active {
        path {
          ${getFillAndStroke(props, textColorActive)}
        }
      }
      &:disabled {
        path {
          ${getFillAndStroke(props, textColorDisabled)}
        }
      }
    `;
  }
  return undefined;
};

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
  border-width: 1px;
  border-style: solid;
  background-color: ${backgroundColorDefault};
  color: ${textColorDefault};
  fill: ${textColorDefault};
  ${props => alignItems(props.alignItems)}
  vertical-align: top;
  text-decoration: none;
  text-align: center;
  text-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-out,
    color 0.2s ease-out, fill 0.2s ease-out;
  pointer-events: all;
  &:focus,
  &:hover {
    color: ${textColorHover};
    fill: ${textColorHover};
    background-color: ${backgroundColorHover};
    border-color: ${borderColorHover};
  }
  &:active {
    background-color: ${backgroundColorActive};
    border-color: ${borderColorActive};
    fill: ${textColorActive};
    color: ${textColorActive};
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: ${backgroundColorDisabled};
    border-color: ${borderColorDisabled};
    fill: ${textColorDisabled};
    color: ${textColorDisabled};
  }
  ${fromPropsTernary('moveIconToLeft', 'padding-left: 32px;', '')} ${font(
    'regular'
  )};
  ${props => getIconStyles(props)}
`;

export default StyledButtonv2;
