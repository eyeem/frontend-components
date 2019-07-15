/* @flow */
import * as React from 'react';

import { textSizes, textTopMargins, textColors } from '../../styleConfig';

import StyledText from './styledText';

function Text(props: {
  className: string,
  id: string,
  to: string,

  /** html tag name this text will render to */
  renderAs?: string,

  /** text-overflow: ellipsis */
  ellipsis?: boolean,
  noWrap?: boolean,
  underline?: boolean,
  color?: string,
  size?: string,
  /** CSS text-align property */
  align?: string,
  display?: string,
  alignItems: string,
  margin?: number,
  font?: string,
  fontStyle: string,
  topMargin?: string,
  textTransform?: string,

  'data-test-id': string,
  onClick?: Function,
  children: React.Node,

  /** use only when renderAs === 'a' */
  href?: string,
  target?: string,

  cursor: string
}) {
  return (
    <StyledText
      to={props.to}
      font={props.font}
      fontStyle={props.fontStyle}
      renderAs={props.renderAs}
      data-test-id={props['data-test-id']}
      id={props.id}
      onClick={props.onClick}
      className={props.className}
      href={props.href}
      target={props.target}
      sizeValues={textSizes[props.size]}
      colors={{
        hover: textColors[props.color] && textColors[props.color].regular,
        active: textColors[props.color] && textColors[props.color].regular,
        ...textColors[props.color]
      }}
      cursor={
        props.cursor ||
        (textColors[props.color] && textColors[props.color].hover)
          ? 'pointer'
          : undefined
      }
      margin={props.margin}
      marginTop={textTopMargins[props.topMargin || 'none']}
      textTransform={props.textTransform}
      display={props.display}
      alignItems={props.alignItems}
      ellipsis={props.ellipsis}
      noWrap={props.noWrap}
      underline={props.underline}
      align={props.align}>
      {props.children}
    </StyledText>
  );
}

Text.defaultProps = {
  ellipsis: false,
  noWrap: false,
  underline: false,
  topMargin: 'none',
  color: 'default',
  font: 'regular',
  size: 'default',
  display: 'block',
  margin: undefined,
  align: 'left',
  renderAs: 'p',
  onClick: undefined,
  target: undefined,
  href: undefined,
  textTransform: 'none'
};

export default Text;
