import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import { knobs, getKnobTypeForProp } from './knobs/radioButton';

import RadioGroup from '../src/components/radioGroup';

const options = [
    { value: 'testValue1', text: ('Option1') },
  ];

  const onChangeHandler = () => {
    console.log('handler');
  }

storiesOf('RadioButton', module)
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
      <RadioGroup 
        {...props} 
        options={options}
        checked
        inputProps={{value: 'testValue1'}}
      />
    );
  });
