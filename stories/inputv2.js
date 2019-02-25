import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StoryWrapper from '../src/Layout/StoryWrapper';
import Inputv2 from '../src/components/inputv2';

import Themer from './themer';

const themeDecorator = storyFn => <Themer>{storyFn()}</Themer>;

storiesOf('Inputv2', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(themeDecorator)
  .add('default', () => (
    <Inputv2 name="name" inputProps={{ placeholder: 'Name' }} />
  ))
  .add('validated', () => (
    <Inputv2 name="name" isValidated inputProps={{ placeholder: 'Name' }} />
  ))
  .add('invalid', () => (
    <Inputv2
      name="name"
      errorMessage="This is the error message."
      inputProps={{ placeholder: 'Name' }}
    />
  ))
  .add('disabled', () => (
    <Inputv2 name="name" inputProps={{ placeholder: 'Name', disabled: true }} />
  ));
