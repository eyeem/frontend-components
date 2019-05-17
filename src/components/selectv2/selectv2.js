// @flow
import React from 'react';
import styled from 'styled-components';
import Box from '../box';
import StyledText from '../text';
import Icon from '../icon';
import { colors } from '../../theme';
import {
  getBorderForState,
  getLabelColor,
  textColor
} from '../helpers/fieldBorders';

const StyledLabel = styled.label`
  position: absolute;
  transition: transform 0.2s ease;
  top: 22px;
  color: ${getLabelColor};
  transform-origin: left;
  font-weight: ${props => (props.isActive ? '600' : 'initial')};

  transform: ${props =>
    props.isActive ? 'translateY(-12px) scale(0.8)' : 'translateY(0) scale(1)'};
`;

const StyledIcon = styled(Icon)`
  transform: rotate(-90deg);
  position: absolute;
  right: 16px;
  top: 24px;
`;

const SelectWrapper = styled(Box)`
  padding: 12px 16px;
  position: relative;
  border-width: 1.5px;
  border-style: solid;
  transition: border-color 0.2s ease;
  border-color: ${getBorderForState};
`;

const StyledSelect = styled.select`
  appearance: none;
  width: 100%;
  border: 0;
  line-height: 24px;
  font-size: 16px;
  margin-top: 5px;
  margin-bottom: 9px;
  margin-left: ${props => (props.alignLeft ? '-4px' : '0px')};
  padding-right: 36px;
  background-color: transparent !important;
  transition: transform 0.2s ease;
  color: ${textColor};

  transform: ${props =>
    props.isActive ? 'translateY(11px)' : 'translateY(0)'};

  /* This removes the outline on a selected option in Firefox */
  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
  &:-moz-focusring option:disabled {
    text-shadow: none;
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
  &:hover,
  &:focus {
    color: ${colors.solidColors.redv2};
  }
`;

type Option = {
  disabled?: boolean,
  label?: string,
  value: string
};

type SelectProps = {
  disabled?: boolean,
  'data-test-id'?: string,
  name: string,
  value: string,
  label: string,
  onChange: Function,
  onFocus?: Function,
  onBlur?: Function,
  options: Option[]
};

type Props = {
  selectProps: SelectProps,
  errorMessage: string,
  isValidated: boolean
};

type State = {
  isFocused: boolean,
  isHovered: boolean,
  value?: string
};

export default class Selectv2 extends React.Component<Props, State> {
  state = {
    isFocused: false,
    isHovered: false
  };

  getInitialSelectedIndex = () => {
    const index = this.props.selectProps.options.findIndex(
      option => option.value === this.props.selectProps.value
    );
    if (index < 0) return 0;
    return index;
  };

  setFocus = (isFocused: boolean) => {
    this.setState({ isFocused });
  };

  setHover = (isHovered: boolean) => {
    this.setState({ isHovered });
  };

  componentDidMount() {
    if (!this.props.selectProps.name) {
      // eslint-disable-next-line
      console.error(
        '<Inputv2>: Missing this.props.selectProps.name, which is needed for accessibility markup.'
      );
    }
  }

  render() {
    const { value } = this.props.selectProps;
    const isActive = (value && value.length) || this.state.isFocused;
    // In FF, the select element has a padding left that can't be changed
    // so we shift the whole element left to align the text
    const isFirefox = window
      ? window.navigator.userAgent.includes('Firefox')
      : false;

    return (
      <ElementWrapper>
        <SelectWrapper
          isFocused={this.state.isFocused}
          isHovered={this.state.isHovered}
          isInvalid={!!this.props.errorMessage}
          isValidated={this.props.isValidated}
          isDisabled={this.props.selectProps.disabled}>
          <StyledLabel
            htmlFor={this.props.selectProps.name}
            isActive={isActive}>
            {this.props.selectProps.label}
          </StyledLabel>
          <StyledIcon type="leftArrow" />
          <StyledSelect
            {...this.props.selectProps}
            alignLeft={isFirefox}
            id={this.props.selectProps.name}
            value={this.props.selectProps.value}
            onChange={this.props.selectProps.onChange}
            disabled={this.props.selectProps.disabled}
            onFocus={event => {
              if (this.props.selectProps.onFocus) {
                this.props.selectProps.onFocus(event);
              }

              this.setFocus(true);
            }}
            onBlur={event => {
              if (this.props.selectProps.onBlur) {
                this.props.selectProps.onBlur(event);
              }

              return this.setFocus(false);
            }}
            onMouseEnter={() => this.setHover(true)}
            onMouseLeave={() => this.setHover(false)}
            isActive={isActive}>
            {this.props.selectProps.options.map(option => (
              <option key={JSON.stringify(option.value)} {...option}>
                {option.label || option.value}
              </option>
            ))}
          </StyledSelect>
        </SelectWrapper>
        {this.props.errorMessage && (
          <ErrorWrapper size="pMin" font="bold">
            {this.props.errorMessage}
          </ErrorWrapper>
        )}
      </ElementWrapper>
    );
  }
}
