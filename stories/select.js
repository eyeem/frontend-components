import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Select from '../src/components/select';

storiesOf('Select', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('text field', () => (
    <Select options={[{ text: 'woot', value: 'woot' }]} />
  ));
