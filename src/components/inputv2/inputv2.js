// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../theme';
import { textColor } from '../v2helpers/colors';
import {
  ElementWrapper,
  ErrorWrapper,
  StyledLabel,
  StyledWrapper
} from '../v2helpers/styledFields';

const xIcon = css`
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 16px;
    width: 16px;
    right: 20px;
    top: 24px;
    border-width: 2px;
    border-color: ${colors.solidColors.redv2};
    z-index: 1;
  }
  &::before {
    transform: translateX(8px) translateY(4px) rotate(45deg);
    border-left-style: solid;
  }
  &::after {
    border-bottom-style: solid;
    transform: translateX(8px) translateY(-6px) rotate(45deg);
  }
`;

const checkmarkIcon = css`
  &::before,
  &::after {
    content: '';
    position: absolute;
    right: 30px;
    top: 32px;
    background-color: ${colors.solidColors.greenv2};
    z-index: 1;
  }
  &::before {
    height: 2px;
    width: 8px;
    transform: rotate(45deg);
  }
  &::after {
    width: 16px;
    height: 2px;
    transform: rotate(135deg) translateX(-10px) translateY(-7px);
  }
`;

const InputWrapper = styled(StyledWrapper)`
  ${props => !props.isPasswordInput && props.isInvalid && xIcon}
  ${props => !props.isPasswordInput && props.isValidated && checkmarkIcon}
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  line-height: 24px;
  font-size: 16px;
  padding-top: 5px;
  padding-bottom: 9px;
  padding-right: 36px;
  background-color: transparent !important;
  transition: transform 0.2s ease;
  color: ${textColor};

  transform: ${props =>
    props.isActive ? 'translateY(11px)' : 'translateY(0)'};

  ::placeholder {
    color: transparent;
  }

  :focus {
    outline: none;
  }
`;

const InnerHint = styled.span`
  font-size: 12px;
  background-image: ${props =>
    props.showPassword
      ? `url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-eye-off'%3E%3Cpath d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22'/%3E%3C/svg%3E");`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-eye'%3E%3Cpath d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E");`}
  
  background-position: center center;
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  position: absolute;
  top: calc(50% - 12px);
  right: 16px;
  cursor: pointer;

  color: ${colors.greys.grey3};
`;

type InputProps = {
  type?: string,
  disabled?: boolean,
  placeholder?: string,
  'data-test-id'?: string,
  name: string,
  value: string,
  onChange: Function,
  onFocus?: Function,
  onBlur?: Function
};

type Props = {
  inputProps: InputProps,
  errorMessage: string,
  isValidated: boolean
};

type State = {
  isFocused: boolean,
  isHovered: boolean,
  showPassword: boolean
};

class Inputv2 extends React.Component<Props, State> {
  state = {
    isFocused: false,
    isHovered: false,
    showPassword: false
  };

  setFocus = (val: boolean) => {
    this.setState({ isFocused: val });
  };

  setHover = (val: boolean) => {
    this.setState({ isHovered: val });
  };

  componentDidMount() {
    if (!this.props.inputProps.name) {
      // eslint-disable-next-line
      console.error(
        '<Inputv2>: Missing this.props.inputProps.name, which is needed for accessibility markup.'
      );
    }
  }

  togglePassword = () =>
    this.setState(state => ({ showPassword: !state.showPassword }));

  render() {
    const { value } = this.props.inputProps;
    const isActive = (value && value.length) || this.state.isFocused;

    return (
      <ElementWrapper>
        <InputWrapper
          isFocused={this.state.isFocused}
          isHovered={this.state.isHovered}
          isInvalid={!!this.props.errorMessage}
          isValidated={this.props.isValidated}
          isDisabled={this.props.inputProps.disabled}
          isPasswordInput={this.props.inputProps.type === 'password'}>
          <StyledLabel htmlFor={this.props.inputProps.name} isActive={isActive}>
            {this.props.inputProps.placeholder}
          </StyledLabel>
          <StyledInput
            {...this.props.inputProps}
            id={this.props.inputProps.name}
            value={this.props.inputProps.value}
            onChange={this.props.inputProps.onChange}
            disabled={this.props.inputProps.disabled}
            onFocus={event => {
              if (this.props.inputProps.onFocus) {
                this.props.inputProps.onFocus(event);
              }

              this.setFocus(true);
            }}
            onBlur={event => {
              if (this.props.inputProps.onBlur) {
                this.props.inputProps.onBlur(event);
              }

              return this.setFocus(false);
            }}
            onMouseEnter={() => this.setHover(true)}
            onMouseLeave={() => this.setHover(false)}
            isActive={isActive}
            type={
              (this.state.showPassword && 'text') ||
              this.props.inputProps.type ||
              'text'
            }
          />
          {this.props.inputProps.type === 'password' && (
            <InnerHint
              onClick={this.togglePassword}
              showPassword={this.state.showPassword}
            />
          )}
        </InputWrapper>
        {this.props.errorMessage && (
          <ErrorWrapper size="pMin" font="bold">
            {this.props.errorMessage}
          </ErrorWrapper>
        )}
      </ElementWrapper>
    );
  }
}

export default Inputv2;
