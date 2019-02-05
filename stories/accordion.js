import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Accordion from '../src/components/accordion';
import StoryWrapper from '../src/Layout/StoryWrapper';

const items = [
  { title: '1. Billing Information', body: <p>Body content</p> },
  { title: '2. Payment Method', body: <p>Body content</p> },
  { title: '3. Review', body: <p>Body content</p> }
];

storiesOf('Accordion', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(withKnobs)
  .add('with controllable props', () => (
    <Accordion activeIndex={0} items={items} />
  ));
