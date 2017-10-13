/* @flow */
import React from 'react';
import styled, { css } from 'styled-components';

import { fromTheme } from '../../styleUtils';

import FormRow from '../formRow';
import Flyout from '../flyout';

const StyledRadio = styled.input`
  display: none;
  visibility: hidden;
  float: left;
  margin-right: 16px;
`;

const RadioRow = styled.div`
  display: inline-block;
  margin-right: 32px;
`;

const border = props =>
  props.checked
    ? css`5px solid ${fromTheme('colors.solidColors.green')}`
    : css`1px solid ${fromTheme('colors.greys.grey3')}`;

const StyledLabel = styled.label`
  position: relative;
  padding-left: 24px;
  cursor: pointer;

  font-size: 14px;
  line-height: 22px;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    display: block;

    width: 16px;
    height: 16px;
    border: ${border};
    border-radius: 12px;
    transition: border-color 0.15s ease-out;
    content: '';
  }
`;

const Wrapper = styled.div`position: relative;`;

declare type Props = {
  inputProps: {
    name: string,
    value: string
  },
  errorMessage?: string,
  formRow?: boolean,
  options: Array<{
    value: string,
    text: string
  }>
};

function RadioGroup(props: Props) {
  const WrapperComponent = props.formRow ? FormRow : Wrapper;

  return (
    <WrapperComponent>
      {props.options.map(option => (
        <RadioRow key={option.value}>
          <StyledRadio
            {...props.inputProps}
            value={option.value}
            checked={option.value === props.inputProps.value}
            type="radio"
            id={`${props.inputProps.name}_${option.value}`}
          />
          <StyledLabel
            checked={option.value === props.inputProps.value}
            htmlFor={`${props.inputProps.name}_${option.value}`}
          >
            {option.text}
          </StyledLabel>
        </RadioRow>
      ))}
      {props.errorMessage && (
        <Flyout fontColor="whites.white" backgroundColor="solidColors.red">
          {props.errorMessage}
        </Flyout>
      )}
    </WrapperComponent>
  );
}

RadioGroup.defaultProps = {
  errorMessage: undefined,
  inputProps: {
    name: 'missingName'
  },
  formRow: true
};

export default RadioGroup;
