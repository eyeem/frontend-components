import styled, { keyframes } from 'styled-components';
import { colors } from '../../theme';
import { media } from '../../styleUtils';

import Box from '../box';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const StyledAccordionItemBody = styled(Box)`
  display: ${props => (props.isShown ? 'block' : 'none')};
  opacity: 0;
  animation: ${fadeIn} ease 400ms;
  animation-fill-mode: forwards;
`;

export const StyledAccordionItem = styled(Box)`
  border-top: 1px solid ${colors.greys.grey4};
  border-bottom: 1px solid ${colors.greys.grey4};

  ${media.medium`
    border-left: 1px solid ${colors.greys.grey4};
    border-right: 1px solid ${colors.greys.grey4};
  `}
`;
