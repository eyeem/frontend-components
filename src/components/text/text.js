/* @flow */
import * as React from 'react';

import { textSizes, textTopMargins, textColors } from '../../styleConfig';

import StyledText from './styledText.js';

function Text(props: {
  className: string,
  id: string,

  // html tag name this text will render to
  renderAs?: string,

  ellipsis?: boolean,
  noWrap?: boolean,
  underline?: boolean,
  color: string,
  size: string,
  align: string,
  display: string,
  margin?: number,
  font: string,
  topMargin: string,

  // eslint-disable-next-line react/no-unused-prop-types
  'data-test-id'?: string,
  onClick?: Function,
  children: React.Node,

  // use only when renderAs === 'a'
  href?: string,
  target?: string,

  cursor?: string
}) {
  return (
    <StyledText
      font={props.font}
      renderAs={props.renderAs}
      // eslint-disable-next-line react/prop-types
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
        props.cursor || textColors[props.color].hover ? 'pointer' : 'auto'
      }
      margin={props.margin}
      marginTop={textTopMargins[props.topMargin || 'none']}
      display={props.display}
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
  'data-test-id': undefined,
  onClick: undefined,
  target: undefined,
  href: undefined
};

export default Text;
