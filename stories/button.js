import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import { knobPropsFactory } from './knobs/helpers';
import { knobs, getKnobTypeForProp } from './knobs/button';

import Button from '../src/components/button';
import StoryWrapper from '../src/Layout/StoryWrapper';

const knobText = {
  label: 'Child text',
  defaultValue: 'Hello'
};

storiesOf('Button', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(withKnobs)
  .add('with controllable props', () => {
    const props = knobPropsFactory(knobs, getKnobTypeForProp);

    return (
      <Button {...props}>{text(knobText.label, knobText.defaultValue)}</Button>
    );
  });
