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
  .add('text field', () => (
    <Inputv2
      name="name"
      errorMessage=" nope"
      inputProps={{ placeholder: 'Name' }}
    />
  ));
