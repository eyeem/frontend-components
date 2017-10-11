/* @flow */
import React from 'react';
import styled from 'styled-components';

import { helvetica, fromTheme } from '../../styleUtils';

import FormRow from '../formRow';
import Flyout from '../flyout';

const background = (props: {
  error: boolean,
  pending: boolean,
  showCheckmark: boolean,
  theme: Theme
}) => {
  if (props.error) {
    return `
    border-color: ${fromTheme('colors.solidColors.red')(props)};
    background-color: ${fromTheme('colors.lightColors.lightRed')(props)};
    `;
  }
  if (props.pending) {
    return `
    border-color: ${fromTheme('colors.greys.grey4')(props)};
    background-color: ${fromTheme('colors.whites.white')(props)};
    background-image: url("/node-static/img/spinner-32-black.gif");
    background-position: center right 8px;
    background-size: 16px;
    background-repeat: no-repeat;
    `;
  }
  if (props.showCheckmark) {
    return `
    border-color: ${fromTheme('colors.greys.grey4')(props)};
    background-color: ${fromTheme('colors.whites.white')(props)};
    padding-right: 30px;
    background-image: url("/node-static/img/check-green.svg");
    background-position: center right 8px;
    background-size: 15px;
    background-repeat: no-repeat;
    `;
  }
  return `
  border-color: ${fromTheme('colors.greys.grey4')(props)};
  background-color: ${fromTheme('colors.whites.white')(props)};
  `;
};

const StyledInput = styled.input`
  ${helvetica('regular')};
  font-size: 16px;
  line-height: 20px;
  &::placeholder {
    color: ${fromTheme('colors.uncategorized.unnamed10')};
  }
  padding: 9px 12px 10px 12px;
  max-height: 40px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: ${fromTheme('borderRadius')};
  box-shadow: none;
  color: ${fromTheme('colors.blacks.black1')};
  ${background} appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: ${fromTheme('colors.solidColors.green')};
    &::placeholder {
      color: ${fromTheme('colors.uncategorized.unnamed16')};
    }
  }
`;

declare type Props = {
  inputProps: {},
  pending?: boolean,
  errorMessage?: string,
  showCheckmark?: boolean,
  formRow?: boolean
};

function Input(props: Props) {
  const WrapperComponent = props.formRow ? FormRow : 'div';

  return (
    <WrapperComponent>
      <StyledInput
        error={!!props.errorMessage}
        pending={props.pending}
        showCheckmark={props.showCheckmark}
        {...props.inputProps}
      />
      {props.errorMessage && (
        <Flyout fontColor="whites.white" backgroundColor="solidColors.red">
          {props.errorMessage}
        </Flyout>
      )}
    </WrapperComponent>
  );
}

Input.defaultProps = {
  errorMessage: undefined,
  pending: false,
  formRow: true,
  showCheckmark: false
};

export default Input;
