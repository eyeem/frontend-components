import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { knobPropsFactory } from './knobs/helpers';
import { knobs, getKnobTypeForProp } from './knobs/buttonv2';
import Themer from './themer';

import Buttonv2 from '../src/components/buttonv2';
import StoryWrapper from '../src/Layout/StoryWrapper';

const knobText = {
  label: 'Child text',
  defaultValue: 'Click me'
};

const themeDecorator = storyFn => <Themer>{storyFn()}</Themer>;

storiesOf('Buttonv2', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(withKnobs)
  .addDecorator(themeDecorator)

  .add('with controllable props', () => {
    const props = knobPropsFactory(knobs, getKnobTypeForProp);

    return (
      <Buttonv2 {...props}>
        {text(knobText.label, knobText.defaultValue)}
      </Buttonv2>
    );
  });
