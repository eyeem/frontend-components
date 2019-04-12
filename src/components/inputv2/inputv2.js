// @flow
import theme from 'styled-theming';
import React from 'react';
import styled, { css } from 'styled-components';
import Box from '../box';
import StyledText from '../text';
import { colors } from '../../theme';

const borderColorDefault = theme('mode', {
  light: colors.greys.grey3,
  dark: colors.greys.grey2
});

const borderColorDisabled = theme('mode', {
  light: colors.greys.grey4,
  dark: colors.greys.grey1
});

const borderColorHover = theme('mode', {
  light: colors.greys.grey1,
  dark: colors.greys.grey4
});

const borderColorActive = theme('mode', {
  light: colors.blacks.black1,
  dark: colors.whites.white
});

const borderColorInvalid = theme('mode', {
  light: colors.solidColors.redv2,
  dark: colors.solidColors.redv2
});

const labelColor = theme('mode', {
  light: colors.greys.grey3,
  dark: colors.greys.grey2
});

const textColor = theme('mode', {
  light: colors.blacks.black1,
  dark: colors.whites.white
});

const getBorderForState = state => {
  if (state.isInvalid) {
    return borderColorInvalid;
  }
  if (state.isFocused) {
    return borderColorActive;
  }
  if (state.isValidated) {
    return borderColorActive;
  }
  if (state.isDisabled) {
    return borderColorDisabled;
  }

  return borderColorDefault;
};

const xIcon = css`
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 16px;
    width: 16px;
    right: 20px;
    top: 22px;
    border-width: 2px;
    border-color: ${colors.solidColors.redv2};
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
    top: 30px;
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

const StyledLabel = styled.label`
  position: absolute;
  transition: transform 0.2s ease;
  top: 22px;
  color: ${labelColor};
  transform-origin: left;
  font-weight: ${props => (props.isActive ? '600' : 'initial')};

  transform: ${props =>
    props.isActive ? 'translateY(-12px) scale(0.8)' : 'translateY(0) scale(1)'};
`;

const InputWrapper = styled(Box)`
  padding: 12px 16px;
  position: relative;
  border-width: 1.5px;
  border-style: solid;
  transition: border-color 0.2s ease;
  border-color: ${getBorderForState};

  &:hover {
    border-color: ${props =>
      props.isInvalid // eslint-disable-line
        ? colors.solidColors.redv2
        : props.isDisabled
        ? borderColorDisabled
        : borderColorHover};

    ${StyledLabel} {
      color: ${colors.greys.grey1};
    }
  }

  ${props => props.isInvalid && xIcon}
  ${props => props.isValidated && checkmarkIcon}
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

const ElementWrapper = styled.div`
  height: 96px;
  position: relative;
`;

const ErrorWrapper = styled(StyledText)`
  position: absolute;
  bottom: 8px;
  left: 0;
  line-height: 16px;
  color: ${colors.solidColors.redv2};
`;

type InputProps = {
  type?: string,
  disabled?: boolean,
  placeholder?: string,
  'data-test-id'?: string,
  name: string,
  value: string,
  onChange: Function
};

type Props = {
  inputProps: InputProps,
  errorMessage: string,
  isValidated: boolean
};

type State = {
  isFocused: boolean
};

class Inputv2 extends React.Component<Props, State> {
  state = {
    isFocused: false
  };

  setFocus = (val: boolean) => {
    this.setState({ isFocused: val });
  };

  componentDidMount() {
    if (!this.props.inputProps.name) {
      // eslint-disable-next-line
      console.error(
        '<Inputv2>: Missing this.props.inputProps.name, which is needed for accessibility markup.'
      );
    }
  }

  render() {
    const { value } = this.props.inputProps;
    const isActive = (value && value.length) || this.state.isFocused;

    return (
      <ElementWrapper>
        <InputWrapper
          isFocused={this.state.isFocused}
          isInvalid={!!this.props.errorMessage}
          isValidated={this.props.isValidated}
          isDisabled={this.props.inputProps.disabled}>
          <StyledLabel htmlFor={this.props.inputProps.name} isActive={isActive}>
            {this.props.inputProps.placeholder}
          </StyledLabel>
          <StyledInput
            {...this.props.inputProps}
            id={this.props.inputProps.name}
            value={this.props.inputProps.value}
            onChange={this.props.inputProps.onChange}
            disabled={this.props.inputProps.disabled}
            onFocus={() => this.setFocus(true)}
            onBlur={() => this.setFocus(false)}
            isActive={isActive}
            type={this.props.inputProps.type || 'text'}
          />
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
