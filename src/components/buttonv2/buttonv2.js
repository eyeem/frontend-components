/* @flow */
import * as React from 'react';

import { buttonSizes } from '../../styleConfig';
import StyledButtonv2 from './styledButtonv2';

function Buttonv2(props: {
  className: string,
  id: string,
  title: string,
  htmlFor: string,

  /** html tag name this button will render to */
  renderAs?: string,

  size?: string,
  display?: string,
  alignItems: string,
  fill?: 'outline' | 'solid',

  progress?: number,
  disabled?: boolean,
  spinner?: boolean,
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
      progress={props.progress}
      className={props.className}
      sizeValues={buttonSizes[props.size]}
      disabled={props.disabled}
      spinner={props.spinner}
      fullWidth={props.fullWidth}
      moveIconToLeft={props.moveIconToLeft}
      title={props.title}
      htmlFor={props.htmlFor}
      type={props.type}>
      {props.children}
    </StyledButtonv2>
  );
}

Buttonv2.defaultProps = {
  size: 'default',
  fill: 'solid',
  display: 'inline-block',
  disabled: false,
  spinner: false,
  fullWidth: false,
  moveIconToLeft: false,
  renderAs: 'button',
  progress: 100
};

export default Buttonv2;
