import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Button from '../src/components/button';
import Input from '../src/components/input';

addDecorator((story, context) => withInfo('common info')(story)(context));

storiesOf('Button', module)
  .add('with text and plus icon', () => (
    <Button size="small" color="green" icon="plus" onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Input', module).add('text field', () => (
  <Input inputProps={{ placeholder: 'Name...' }} />
));
