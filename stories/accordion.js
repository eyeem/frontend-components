import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Accordion from '../src/components/accordion';
import StyledText from '../src/components/text';

import StoryWrapper from '../src/Layout/StoryWrapper';

const items = [
  {
    title: (
      <StyledText renderAs="h3" size="headline4">
        1. Billing Information
      </StyledText>
    ),
    body: <StyledText>Body content</StyledText>
  },
  {
    title: (
      <StyledText renderAs="h3" size="headline4">
        2. Payment Method
      </StyledText>
    ),
    body: <StyledText>Body content</StyledText>
  },
  {
    title: (
      <StyledText renderAs="h3" size="headline4">
        3. Review
      </StyledText>
    ),
    body: <StyledText>Body content</StyledText>
  }
];

storiesOf('Accordion', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(withKnobs)
  .add('with controllable props', () => (
    <Accordion activeIndex={1} items={items} />
  ));
