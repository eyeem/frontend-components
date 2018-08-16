/* @flow */
import * as React from 'react';

import { getButtonColorSet, buttonSizes } from '../../styleConfig';

import StyledButton from './styledButton';
import StyledIcon from './styledIcon';

function Button(props: {
  className: string,
  id: string,
  title?: string,
  htmlFor?: string,

  // html tag name this button will render to
  renderAs?: string,

  color: string,
  size: string,
  display: string,
  alignItems?: string,

  progress?: number,
  icon?: string | false,
  disabled?: boolean,
  spinner?: boolean,
  fullWidth?: boolean,
  moveIconToLeft?: boolean,
  // eslint-disable-next-line react/no-unused-prop-types
  'data-test-id'?: string,

  onClick?: Function,

  // use only when renderAs === 'a'
  href?: string,
  target?: string,

  children: React.Node
}) {
  return (
    <StyledButton
      renderAs={props.renderAs}
      // eslint-disable-next-line react/prop-types
      data-test-id={props['data-test-id']}
      onClick={props.onClick}
      display={props.display}
      alignItems={props.alignItems}
      href={props.href}
      target={props.target}
      id={props.id}
      progress={props.progress}
      className={props.className}
      sizeValues={buttonSizes[props.size]}
      disabled={props.disabled}
      spinner={props.spinner}
      fullWidth={props.fullWidth}
      moveIconToLeft={props.moveIconToLeft}
      colors={getButtonColorSet(props.color)}
      title={props.title}
      htmlFor={props.htmlFor}
    >
      {props.icon && (
        <StyledIcon
          moveIconToLeft={props.moveIconToLeft}
          size={buttonSizes[props.size].iconSize}
          type={props.icon}
          marginRight={props.children ? '8px' : 0}
        />
      )}
      {props.children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'default',
  size: 'default',
  display: 'inline-block',
  icon: false,
  disabled: false,
  spinner: false,
  fullWidth: false,
  moveIconToLeft: false,
  renderAs: 'button'
};

export default Button;
