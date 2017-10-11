/* @flow */
import React from 'react';
import styled from 'styled-components';

import Flyout from '../flyout';
import FormRow from '../formRow';

import { helvetica, fromTheme } from '../../styleUtils';

const background = (props: {
  error: boolean,
  pending: boolean,
  showCheckmark: boolean,
  theme: Theme
}) => {
  if (props.error) {
    return `
    border-color: ${fromTheme('colors.solidColors.red')(props)};
    background-color: ${fromTheme('colors.lightColors.lightRed')(props)};
    `;
  }
  return `
  border-color: ${fromTheme('colors.greys.grey4')(props)};
  background-color: ${fromTheme('colors.whites.white')(props)};
  `;
};

const StyledTextarea = styled.textarea`
  font-size: 16px;
  line-height: 20px;
  &::placeholder {
    color: ${fromTheme('colors.uncategorized.unnamed10')};
  }
  ${helvetica('regular')};
  padding: 9px 12px 10px 12px;
  max-width: 100%;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: ${fromTheme('borderRadius')};
  box-shadow: none;
  color: ${fromTheme('colors.blacks.black1')};
  ${background} appearance: none;
  -webkit-appearance: none;

  &:focus {
    border-color: ${fromTheme('colors.solidColors.green')};
    &::placeholder {
      color: ${fromTheme('colors.uncategorized.unnamed16')};
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
