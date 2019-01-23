/* @flow */
import React from 'react';
import styled, { css } from 'styled-components';

import { fromInternalTheme, fromPropsTernary } from '../../styleUtils';

import FormRow from '../formRow';
import Flyout from '../flyout';

const StyledRadio = styled.input`
  display: none;
  visibility: hidden;
  float: left;
  margin-right: 16px;
`;

const RadioRow = styled.div`
  ${fromPropsTernary(
    'radioColumned',
    'display: inline-block;margin-right: 32px;',
    `display: block;
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 0;
      }`
  )};
`;

const border = props => {
  if (props.error) {
    return css`1px solid ${fromInternalTheme('colors.solidColors.red')}`;
  }

  if (props.checked) {
    return css`5px solid ${fromInternalTheme('colors.solidColors.green')}`;
  }

  return css`1px solid ${fromInternalTheme('colors.greys.grey3')}`;
};

const StyledLabel = styled.label`
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  display: block;

  font-size: 14px;
  line-height: 22px;

  &:before {
    position: absolute;
    top: 2px;
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

const Wrapper = styled.div`
  position: relative;
`;

type Props = {
  inputProps?: {
    name: string,
    value: string
  },
  errorMessage: string,
  formRow?: boolean,
  options: Array<{
    value: string,
    text: string
  }>,
  radioColumned: boolean
};

const compareAsString = (val1: number | string, val2: number | string) =>
  `${val1}`.toLowerCase() === `${val2}`.toLowerCase();

function RadioGroup(props: Props) {
  const WrapperComponent = props.formRow ? FormRow : Wrapper;

  return (
    <WrapperComponent>
      {props.options.map(option => (
        <RadioRow key={option.value} radioColumned={props.radioColumned}>
          <StyledRadio
            {...props.inputProps}
            value={option.value}
            checked={compareAsString(option.value, props.inputProps.value)}
            type="radio"
            id={`${props.inputProps.name}_${option.value}`}
          />
          <StyledLabel
            error={!!props.errorMessage}
            checked={compareAsString(option.value, props.inputProps.value)}
            htmlFor={`${props.inputProps.name}_${option.value}`}>
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
  inputProps: {
    name: 'missingName'
  },
  formRow: true
};

export default RadioGroup;
