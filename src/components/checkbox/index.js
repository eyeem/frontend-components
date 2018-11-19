/* @flow */
import React from 'react';
import styled, { css } from 'styled-components';

import { fromInternalTheme, fromPropsTernary } from '../../styleUtils';

import FormRow from '../formRow';
import Flyout from '../flyout';

const StyledCheckbox = styled.input`
  display: none;
  visibility: hidden;
  float: left;
  margin-right: 16px;
`;

const background = (props: { error: boolean, checked: boolean }) => {
  if (props.error) {
    return css`
      border-color: ${fromInternalTheme('colors.solidColors.red')};
      background-color: ${fromInternalTheme('colors.lightColors.lightRed')};
    `;
  }
  if (props.checked) {
    return css`
      border-color: ${fromInternalTheme('colors.solidColors.green')};
      background-color: ${fromInternalTheme('colors.solidColors.green')};
    `;
  }
  return css`
    border-color: ${fromInternalTheme('colors.greys.grey4')};
    background-color: ${fromInternalTheme('colors.whites.white')};
  `;
};

const StyledLabel = styled.label`
  font-size: 14px;
  display: block;
  margin: 0 0 12px 12px;

  padding-left: 16px;
  min-height: 12px;
  text-align: left;
  line-height: 22px;
  cursor: pointer;
  &:after {
    content: ' ';
    display: table;
    clear: both;
  }

  &:before {
    ${background} content: ' ';
    display: table;
    position: absolute;
    top: 3px;
    left: 0;
    display: block;

    width: 16px;
    height: 16px;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    background-image: url("data:image/svg+xml,%3Csvg width='9' height='7' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.685 6.772a.717.717 0 0 0 1.037 0l5.06-5.205A.733.733 0 0 0 8.76.522L8.43.213a.765.765 0 0 0-1.06.025L3.213 4.526 1.632 2.89a.763.763 0 0 0-1.063-.028l-.329.309a.73.73 0 0 0-.026 1.045l2.471 2.556z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");
    background-position: center center;
    background-size: ${fromPropsTernary('checked', '9px 7px', '0')};
    background-repeat: no-repeat;
    content: '';
    transition: transform 0.15s ease-out, background 0.15s ease-out,
      border-color 0.15s ease-out;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

declare type Props = {
  inputProps: {
    name: string,
    checked: boolean
  },
  label: string,
  errorMessage?: string,
  formRow?: boolean
};

function Checkbox(props: Props) {
  const WrapperComponent = props.formRow ? FormRow : Wrapper;

  return (
    <WrapperComponent>
      <StyledCheckbox
        {...props.inputProps}
        type="checkbox"
        id={props.inputProps.name}
      />
      <StyledLabel
        htmlFor={props.inputProps.name}
        error={!!props.errorMessage}
        checked={props.inputProps.checked}>
        {props.label}
      </StyledLabel>
      {props.errorMessage && (
        <Flyout fontColor="whites.white" backgroundColor="solidColors.red">
          {props.errorMessage}
        </Flyout>
      )}
    </WrapperComponent>
  );
}

Checkbox.defaultProps = {
  errorMessage: undefined,
  inputProps: {
    name: 'missingName'
  },
  label: 'Missing label',
  formRow: true
};

export default Checkbox;
