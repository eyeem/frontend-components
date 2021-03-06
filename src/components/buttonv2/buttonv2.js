/* @flow */
import * as React from 'react';

import { buttonv2Sizes } from '../../styleConfig';
import StyledButtonv2 from './styledButtonv2';
import StyledIcon from './styledIcon';

function Buttonv2(props: {
  className: string,
  id: string,
  title: string,
  htmlFor: string,

  /** html tag name this button will render to */
  renderAs?: string,

  size?: string,
  display?: string,
  icon?: string | false,
  followTextColorIconStroke?: string | false,
  followTextColorIconFill?: string | false,
  alignItems: string,
  fill?: 'outline' | 'solid',

  disabled?: boolean,
  fullWidth?: boolean,
  moveIconToLeft?: boolean,
  'data-test-id': string,

  onClick: Function,

  /** use only when renderAs === 'a' */
  href: string,
  target: string,

  children: React.Node
}) {
  return (
    <StyledButtonv2
      renderAs={props.renderAs}
      data-test-id={props['data-test-id']}
      onClick={props.onClick}
      display={props.display}
      alignItems={props.alignItems}
      href={props.href}
      target={props.target}
      fill={props.fill}
      id={props.id}
      className={props.className}
      sizeValues={buttonv2Sizes[props.size]}
      disabled={props.disabled}
      fullWidth={props.fullWidth}
      moveIconToLeft={props.moveIconToLeft}
      title={props.title}
      htmlFor={props.htmlFor}
      type={props.type}
      followTextColorIconStroke={props.followTextColorIconStroke}
      followTextColorIconFill={props.followTextColorIconFill}>
      {props.icon && (
        <StyledIcon
          moveIconToLeft={props.moveIconToLeft}
          size={buttonv2Sizes[props.size].iconSize}
          type={props.icon}
          fill={props.fill}
          marginRight={props.children ? '8px' : 0}
        />
      )}
      {props.children}
    </StyledButtonv2>
  );
}

Buttonv2.defaultProps = {
  size: 'default',
  fill: 'solid',
  display: 'inline-block',
  icon: false,
  followTextColorIconStroke: false,
  followTextColorIconFill: false,
  disabled: false,
  fullWidth: false,
  moveIconToLeft: false,
  renderAs: 'button'
};

export default Buttonv2;
