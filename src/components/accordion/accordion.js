// @flow
import React from 'react';
import type { Node } from 'react';

import {
  StyledAccordionItem,
  StyledAccordionItemBody,
  StyledAccordionItemTitle
} from './styledAccordion';

type AccordionItem = {
  title: Node,
  body: Node
};

type Props = {
  /** An array of objects with title and body properties. */
  items: AccordionItem[],

  /** Controlled externally by whatever is rendering the accordion */
  activeIndex: number
};

const Accordion = (props: Props) => {
  if (!props.items || !props.items.length) {
    return null;
  }

  return (
    <div role="tablist">
      {props.items.map((item, index) => (
        <StyledAccordionItem key={item.title}>
          <StyledAccordionItemTitle
            role="tab"
            id={`accordion__title-${index}`}
            aria-controls={`accordion__body-${index}`}
            tabIndex={0}
            aria-selected={props.activeIndex === index}>
            {item.title}
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
    </div>
  );
};

export default Accordion;
