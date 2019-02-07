// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import Accordion from '../src/components/accordion';
import StyledText from '../src/components/text';
import Buttonv2 from '../src/components/buttonv2';
import StoryWrapper from '../src/Layout/StoryWrapper';

import Themer from './themer';

const themeDecorator = storyFn => <Themer>{storyFn()}</Themer>;

const items = [
  {
    title: '1. Billing Information',
    body: (
      <div>
        <StyledText>Body content</StyledText>
        <Buttonv2 fill="outline">Save</Buttonv2>
      </div>
    )
  },
  {
    title: '2. Payment Method',
    body: (
      <div>
        <StyledText>Body content</StyledText>
        <Buttonv2 fill="outline">Save</Buttonv2>
      </div>
    )
  },
  {
    title: '3. Review',
    body: (
      <div>
        <StyledText>Body content</StyledText>
        <Buttonv2 fill="outline">Save</Buttonv2>
      </div>
    )
  }
];

storiesOf('Accordion', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(withKnobs)
  .addDecorator(themeDecorator)
  .add('default', () => <Accordion activeIndex={0} items={items} />)
  .add('open next', () => <Accordion activeIndex={1} items={items} />)
  .add('open last', () => <Accordion activeIndex={2} items={items} />);
