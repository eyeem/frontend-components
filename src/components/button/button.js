/* @flow */
import * as React from 'react';
import styled from 'styled-components/primitives';

import { getButtonColorSet, buttonSizes } from '../../styleConfig';

import StyledButton from './styledButton';

const Text = styled.Text``;

function Button(props: {
  className: string,
  id: string,

  // html tag name this button will render to
  renderAs?: string,

  color: string,
  size: string,

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
      colors={getButtonColorSet(props.color)}>
      <Text>{props.children}</Text>
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'default',
  size: 'default',
  icon: false,
  disabled: false,
  spinner: false,
  fullWidth: false,
  moveIconToLeft: false,
  renderAs: 'button'
};

export default Button;
