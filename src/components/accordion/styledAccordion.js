import styled from 'styled-components';

export const StyledAccordionItemBody = styled.div`
  display: ${props => (props.isShown ? 'block' : 'none')};
  padding-bottom: 2rem;
  padding-top: 1rem;
`;

export const StyledAccordionItem = styled.div`
  border: 1px solid black;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledAccordionItemTitle = styled.div``;
