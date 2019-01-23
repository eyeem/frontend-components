import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Input from '../src/components/input';

storiesOf('Input', module)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .add('text field', () => <Input inputProps={{ placeholder: 'Name...' }} />);
