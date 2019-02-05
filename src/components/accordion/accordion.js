// @flow
import React from 'react';

import {
  StyledAccordion,
  StyledAccordionItem,
  StyledAccordionItemBody,
  StyledAccordionItemTitle
} from './styledAccordion';

type AccordionItem = {
  title: string,
  body: React.Node
};

type Props = {
  items: AccordionItem[],

  /** Controlled externally by whatever is rendering the accordion */
  activeIndex: number
};

const Accordion = (props: Props) => {
  if (!props.items || !props.items.length) {
    return null;
  }

  return (
    <StyledAccordion role="tablist">
      {props.items.map((item, index) => (
        <StyledAccordionItem key={item.title}>
          <StyledAccordionItemTitle
            role="tab"
            id={`accordion__title-${index}`}
            aria-controls={`accordion__body-${index}`}
            tabIndex={0}
            aria-selected={props.activeIndex === index}>
            <h3>{item.title}</h3>
          </StyledAccordionItemTitle>
          <StyledAccordionItemBody
            role="tabpanel"
            id={`accordion__body-${index}`}
            labelledby={`accordion__title-${index}`}
            aria-hidden={props.activeIndex === index}
            isShown={props.activeIndex === index}>
            {item.body}
          </StyledAccordionItemBody>
        </StyledAccordionItem>
      ))}
    </StyledAccordion>
  );
};

export default Accordion;
