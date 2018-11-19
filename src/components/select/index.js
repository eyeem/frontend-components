/* @flow */
import React from 'react';
import styled, { css } from 'styled-components';

import FormRow from '../formRow';
import Flyout from '../flyout';

import { font, fromInternalTheme } from '../../styleUtils';

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
  return css`
    border-color: ${fromInternalTheme('colors.greys.grey4')};
    background-color: ${fromInternalTheme('colors.whites.white')};
  `;
};

const StyledSelect = styled.select`
  font-size: 16px;
  line-height: 20px;
  &::placeholder {
    color: ${fromInternalTheme('colors.uncategorized.unnamed10')};
  }
  ${font('regular')};
  padding: 9px 12px 10px 12px;
  max-height: 40px;
  width: 100%;
  box-shadow: none;
  color: ${fromInternalTheme('colors.blacks.black1')};
  border-width: 1px;
  border-style: solid;
  border-radius: ${fromInternalTheme('borderRadius')};
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='5' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h10L5.028 5 0 0z' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-position: center right 16px;
  background-size: 10px;
  background-repeat: no-repeat;

  appearance: none;
  -webkit-appearance: none;
  ${background} &:focus {
    border-color: ${fromInternalTheme('colors.solidColors.green')};
    &::placeholder {
      color: ${fromInternalTheme('colors.uncategorized.unnamed16')};
    }
  }
`;

declare type Props = {
  inputProps: mixed,
  errorMessage?: string,
  error?: boolean,
  formRow?: boolean,
  options: Array<{
    value: string,
    text: string
  }>
};

function Select(props: Props) {
  const WrapperComponent = props.formRow ? FormRow : 'div';

  const options = props.text
    ? [
        {
          key: '__selectTitle__',
          text: props.text
        }
      ].concat(props.options)
    : props.options;

  return (
    <WrapperComponent>
      <StyledSelect
        {...props.inputProps}
        error={!!props.errorMessage || props.error}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </StyledSelect>
      {props.errorMessage && (
        <Flyout fontColor="whites.white" backgroundColor="solidColors.red">
          {props.errorMessage}
        </Flyout>
      )}
    </WrapperComponent>
  );
}

Select.defaultProps = {
  errorMessage: undefined,
  formRow: true
};

export default Select;
