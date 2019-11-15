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
  iconStroke?: string | false,
  iconFill?: string | false,
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
      type={props.type}>
      {props.icon && (
        <StyledIcon
          moveIconToLeft={props.moveIconToLeft}
          size={buttonv2Sizes[props.size].iconSize}
          type={props.icon}
          marginRight={props.children ? '8px' : 0}
          iconFill={props.iconFill}
          iconStroke={props.iconStroke}
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
  iconStroke: false,
  iconFill: false,
  disabled: false,
  fullWidth: false,
  moveIconToLeft: false,
  renderAs: 'button'
};

export default Buttonv2;
