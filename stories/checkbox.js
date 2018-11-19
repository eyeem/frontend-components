import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Checkbox from '../src/components/checkbox';

storiesOf('Checkbox', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('text field', () => (
    <Checkbox
      label="hello"
      inputProps={{
        checked: true
      }}
    />
  ));
