import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

import { knobs, getKnobTypeForProp } from './knobs/checkbox';
import { knobPropsFactory } from './knobs/helpers';

import Checkbox from '../src/components/checkbox';

storiesOf('Checkbox', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(withKnobs)
  .add('with controllable props', () => {
    const props = knobPropsFactory(knobs, getKnobTypeForProp);

    return <Checkbox {...props} label="some text" />;
  });
