/* @flow */
import React from 'react';
import styled, { css } from 'styled-components';

import { font, fromInternalTheme } from '../../styleUtils';

import FormRow from '../formRow';
import Flyout from '../flyout';

const background = (props: {
  error: boolean,
  pending: boolean,
  showCheckmark: boolean
}) => {
  if (props.error) {
    return css`
      border-color: ${fromInternalTheme('colors.solidColors.red')};
      background-color: ${fromInternalTheme('colors.lightColors.lightRed')};
    `;
  }
  if (props.pending) {
    return css`
      border-color: ${fromInternalTheme('colors.greys.grey4')};
      background-color: ${fromInternalTheme('colors.whites.white')};
      background-image: url('/node-static/img/spinner-32-black.gif');
      background-position: center right 8px;
      background-size: 16px;
      background-repeat: no-repeat;
    `;
  }
  if (props.showCheckmark) {
    return css`
      border-color: ${fromInternalTheme('colors.greys.grey4')};
      background-color: ${fromInternalTheme('colors.whites.white')};
      padding-right: 30px;
      background-image: url('/node-static/img/check-green.svg');
      background-position: center right 8px;
      background-size: 15px;
      background-repeat: no-repeat;
    `;
  }
  return css`
    border-color: ${fromInternalTheme('colors.greys.grey4')};
    background-color: ${p =>
      p.disabled
        ? fromInternalTheme('lightColors.lightRed')
        : fromInternalTheme('colors.whites.white')};
  `;
};

const StyledInput = styled.input`
  ${font('regular')};
  font-size: 16px;
  line-height: 20px;
  &::placeholder {
    color: ${fromInternalTheme('colors.uncategorized.unnamed10')};
  }
  padding: 9px 12px 10px 12px;
  max-height: 40px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: ${fromInternalTheme('borderRadius')};
  box-shadow: none;
  color: ${fromInternalTheme('colors.blacks.black1')};
  ${background} appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: ${fromInternalTheme('colors.solidColors.green')};
    &::placeholder {
      color: ${fromInternalTheme('colors.uncategorized.unnamed16')};
    }
  }
`;

const InnerHint = styled.p`
  font-size: 12px;

  position: absolute;
  top: 2px;
  right: 12px;
  cursor: pointer;

  color: ${fromInternalTheme('colors.greys.grey3')};
`;

declare type Props = {
  inputProps: {},
  pending?: boolean,
  errorMessage?: string,
  showCheckmark?: boolean,
  formRow?: boolean,
  disabled?: boolean
};

declare type State = {
  showPassword: boolean
};

class Input extends React.Component<Props, State> {
  state = { showPassword: false };

  static defaultProps = {
    errorMessage: undefined,
    pending: false,
    formRow: true,
    showCheckmark: false
  };

  togglePassword = () =>
    this.setState({
      showPassword: !this.state.showPassword
    });

  render() {
    const WrapperComponent = this.props.formRow ? FormRow : 'div';

    return (
      <WrapperComponent>
        <StyledInput
          {...this.props.inputProps}
          disabled={this.props.disabled}
          error={!!this.props.errorMessage}
          pending={this.props.pending}
          showCheckmark={this.props.showCheckmark}
          type={
            (this.state.showPassword && 'text') ||
            this.props.inputProps.type ||
            'text'
          }
        />
        {this.props.inputProps.type === 'password' && (
          <InnerHint
            onClick={this.togglePassword}
            className="g_input_innerHint"
          >
            {this.state.showPassword ? 'hide' : 'show'}
          </InnerHint>
        )}
        {this.props.errorMessage && (
          <Flyout fontColor="whites.white" backgroundColor="solidColors.red">
            {this.props.errorMessage}
          </Flyout>
        )}
      </WrapperComponent>
    );
  }
}

export default Input;
