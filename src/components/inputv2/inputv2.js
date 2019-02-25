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

const InputWrapper = styled(Box)`
  position: relative;
  border-width: 1.5px;
  border-style: solid;
  transition: border-color 0.2s ease;
  border-color: ${getBorderForState};

  &:hover {
    border-color: ${props =>
      props.isInvalid ? colors.solidColors.redv2 : borderColorHover};
  }

  ${props => props.isInvalid && xIcon}
  ${props => props.isValidated && checkmarkIcon}
`;

const StyledLabel = styled.label`
  position: absolute;
  transition: transform 0.2s ease;
  top: 22px;
  color: ${labelColor};
  font-weight: ${props => (props.isActive ? '600' : 'initial')};

  transform: ${props =>
    props.isActive
      ? 'translateX(-4px) translateY(-10px) scale(0.8)'
      : 'translateX(0) translateY(0) scale(1)'};
`;

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  line-height: 22px;
  font-size: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 36px;
  background-color: transparent;
  transition: transform 0.2s ease;
  color: ${textColor};

  transform: ${props =>
    props.isActive ? 'translateY(10px)' : 'translateY(0)'};

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
  bottom: 0;
  left: 0;
  color: ${colors.solidColors.redv2};
`;

type InputProps = {
  type?: string,
  disabled?: boolean,
  placeholder?: string,
  'data-test-id'?: string
};

type Props = {
  name: string,
  inputProps: InputProps,
  errorMessage: string,
  isValidated: boolean
};

type State = {
  isFocused: boolean,
  value: string
};

class Inputv2 extends React.Component<Props, State> {
  state = {
    isFocused: false,
    value: ''
  };

  setFocus = (val: boolean) => {
    this.setState({ isFocused: val });
  };

  setValue = event => {
    this.setState({ value: event.target.value });
  };

  componentDidMount() {
    if (!this.props.name) {
      // eslint-disable-next-line
      console.error(
        '<Inputv2>: Missing this.props.name, which is needed for accessibility markup.'
      );
    }
  }

  render() {
    const isActive = this.state.value.length || this.state.isFocused;

    return (
      <ElementWrapper>
        <InputWrapper
          isFocused={this.state.isFocused}
          isInvalid={!!this.props.errorMessage}
          isValidated={this.props.isValidated}
          p={3}>
          <StyledLabel htmlFor={this.props.name} isActive={isActive}>
            {this.props.inputProps.placeholder}
          </StyledLabel>
          <StyledInput
            {...this.props.inputProps}
            id={this.props.name}
            value={this.state.value}
            onChange={this.setValue}
            onFocus={() => this.setFocus(true)}
            onBlur={() => this.setFocus(false)}
            name={this.props.name}
            isActive={isActive}
            type={this.props.inputProps.type || 'text'}
          />
        </InputWrapper>
        {this.props.errorMessage && (
          <ErrorWrapper size="pStatic" font="bold">
            {this.props.errorMessage}
          </ErrorWrapper>
        )}
      </ElementWrapper>
    );
  }
}

export default Inputv2;
