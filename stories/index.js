import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { selectV2 } from '@storybook/addon-knobs';

import Button from '../src/components/button';
import Input from '../src/components/input';

import { color, icon, size } from './knobs/button';

// addon-info
setDefaults({
  header: false,
  inline: true
});

storiesOf('Button', module)
  .addDecorator((story, context) => withInfo('common info')(story)(context))
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button size="small" color="green" onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('with icon', () => (
    <Button
      size={selectV2(size.label, size.options, size.defaultValue)}
      color={selectV2(color.label, color.options, color.defaultValue)}
      icon={selectV2(icon.label, icon.options, icon.defaultValue)}
    >
      Button
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
