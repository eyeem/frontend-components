/* @flow */
import React from 'react';
import styled, { css } from 'styled-components';

import Flyout from '../flyout';
import FormRow from '../formRow';

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

const StyledTextarea = styled.textarea`
  font-size: 16px;
  line-height: 20px;
  &::placeholder {
    color: ${fromInternalTheme('colors.uncategorized.unnamed10')};
  }
  ${font('regular')};
  padding: 9px 12px 10px 12px;
  max-width: 100%;
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

declare type Props = {
  inputProps: {},
  errorMessage?: string,
  formRow?: boolean
};

function Textarea(props: Props) {
  const WrapperComponent = props.formRow ? FormRow : 'div';

  return (
    <WrapperComponent>
      <StyledTextarea error={!!props.errorMessage} {...props.inputProps} />
      {props.errorMessage && (
        <Flyout fontColor="whites.white" backgroundColor="solidColors.red">
          {props.errorMessage}
        </Flyout>
      )}
    </WrapperComponent>
  );
}

Textarea.defaultProps = {
  errorMessage: undefined,
  formRow: true
};

export default Textarea;
