import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { selectV2, boolean } from '@storybook/addon-knobs';

import { knobs, getKnobTypeForProp } from './knobs/button';

import Button from '../src/components/button';

const knobText = {
  label: 'Text',
  defaultValue: 'Hello'
};

storiesOf('Button', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(withKnobs)
  .add('with controllable props', () => {
    const props = _.reduce(
      knobs,
      (result, value, key) => {
        const { knobFunction, args } = getKnobTypeForProp(key, value);

        result[key] = knobFunction(...args);

        return result;
      },
      {}
    );

    return (
      <Button {...props}>{text(knobText.label, knobText.defaultValue)}</Button>
    );
  });
