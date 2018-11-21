import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import { knobs, getKnobTypeForProp } from './knobs/textarea';

import Textarea from '../src/components/textarea';

storiesOf('Textarea', module)
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
      <Textarea {...props}/>
    );
  });
