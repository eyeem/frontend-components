import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const StyledAccordionItemBody = styled.div`
  display: ${props => (props.isShown ? 'block' : 'none')};
  opacity: 0;
  animation: ${fadeIn} ease 400ms;
  animation-fill-mode: forwards;
  padding-bottom: 2rem;
  padding-top: 1rem;
`;

export const StyledAccordionItem = styled.div`
  border: 1px solid black;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledAccordionItemTitle = styled.div``;
