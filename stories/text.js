import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import { knobPropsFactory } from './knobs/helpers';
import { knobs, getKnobTypeForProp } from './knobs/text';

import Text from '../src/components/text';

const knobText = {
  label: 'Child text',
  defaultValue: 'We Love EyeEm'
};

storiesOf('Text', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(withKnobs)
  .add('with controllable props', () => {
    const props = knobPropsFactory(knobs, getKnobTypeForProp);

    return (
      <Text {...props}>{text(knobText.label, knobText.defaultValue)}</Text>
    );
  });
