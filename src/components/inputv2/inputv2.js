// @flow
import React from 'react';
import styled from 'styled-components';
import Box from '../box';
import StyledText from '../text';

const InputWrapper = styled(Box)`
  position: relative;
`;

const StyledLabel = styled.label`
  position: absolute;
  transition: transform 0.2s ease;
  top: 22px;
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

  transform: ${props => (props.isActive ? 'translateY(8px)' : 'translateY(0)')};

  ::placeholder {
    color: transparent;
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
  errorMessage: string
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

  toggleFocus = (val: boolean) => {
    this.setState({ isFocused: val });
  };

  setValue = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const isActive = this.state.value.length || this.state.isFocused;

    return (
      <ElementWrapper>
        <InputWrapper
          border="1.5px solid"
          p={3}
          borderColor={this.state.isFocused ? 'grey' : 'black'}>
          <StyledLabel htmlFor={this.props.name} isActive={isActive}>
            {this.props.inputProps.placeholder}
          </StyledLabel>
          <StyledInput
            {...this.props.inputProps}
            id={this.props.name}
            value={this.state.value}
            onChange={this.setValue}
            onFocus={() => this.toggleFocus(true)}
            onBlur={() => this.toggleFocus(false)}
            name={this.props.name}
            isActive={isActive}
            type={this.props.inputProps.type || 'text'}
          />
        </InputWrapper>
        {this.props.errorMessage && (
          <ErrorWrapper size="pStatic" font="bold">
            Error
          </ErrorWrapper>
        )}
      </ElementWrapper>
    );
  }
}

export default Inputv2;
