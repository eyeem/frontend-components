import styled from 'styled-components';

export const StyledAccordion = styled.div``;

export const StyledAccordionItemBody = styled.div`
  display: ${props => (props.isShown ? 'block' : 'none')};
`;

export const StyledAccordionItem = styled.div`
  border: 1px solid black;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const StyledAccordionItemTitle = styled.div``;
