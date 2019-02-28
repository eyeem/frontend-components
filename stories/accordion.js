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
    title: (
      <StyledText renderAs="h3" size="headline4" font="bold">
        1. Billing Information
      </StyledText>
    ),
    titleSupplement: (
      <div>
        <StyledText margin={0} display="block" size="pStatic">
          Jesse Box
        </StyledText>
        <StyledText margin={0} display="block" size="pStatic">
          Boxhagener Str.
        </StyledText>
      </div>
    ),
    body: (
      <div>
        <StyledText>Body content</StyledText>
        <Buttonv2 fill="outline">Save</Buttonv2>
      </div>
    )
  },
  {
    title: (
      <StyledText renderAs="h3" size="headline4" font="bold">
        2. Payment Method
      </StyledText>
    ),
    titleSupplement: (
      <div>
        <StyledText margin={0} display="block" size="pStatic">
          Visa XXX
        </StyledText>
      </div>
    ),
    body: (
      <div>
        <StyledText>Body content</StyledText>
        <Buttonv2 fill="outline">Save</Buttonv2>
      </div>
    )
  },
  {
    title: (
      <StyledText renderAs="h3" size="headline4" font="bold">
        3. Review
      </StyledText>
    ),
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
