// @flow
import React from 'react';
import type { Node } from 'react';

import {
  StyledAccordionItem,
  StyledAccordionItemBody
} from './styledAccordion';

import Box from '../box';

type AccordionItem = {
  title: Node,
  titleSupplement: Node, // only shown if filled-in accordion step info
  body: Node
};

type Props = {
  /** An array of objects with title, titleSupplement and body properties. */
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
        <StyledAccordionItem
          p={{ sm: 3, md: 4 }}
          mb={3}
          // eslint-disable-next-line
          key={`acc-item-${index}`}
        >
          <Box p={{ sm: 2, md: 1 }}>
            <div
              role="tab"
              id={`accordion__title-${index}`}
              aria-controls={`accordion__body-${index}`}
              tabIndex={0}
              aria-selected={props.activeIndex === index}>
              {item.title}
              {props.activeIndex !== index && item.titleSupplement}
            </div>
            <StyledAccordionItemBody
              pt={3}
              pb={1}
              role="tabpanel"
              id={`accordion__body-${index}`}
              labelledby={`accordion__title-${index}`}
              aria-hidden={props.activeIndex === index}
              isShown={props.activeIndex === index}>
              {item.body}
            </StyledAccordionItemBody>
          </Box>
        </StyledAccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
