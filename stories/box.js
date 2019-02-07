/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { space } from '../src/theme';

import Themer from './themer';

import StyledText from '../src/components/text';
import Box from '../src/components/box';
import StoryWrapper from '../src/Layout/StoryWrapper';

const themeDecorator = storyFn => <Themer>{storyFn()}</Themer>;

const paddings = space.map((size, index) => (
  <Box key={`space${size}`} p={index} mb={2} bg="lightColors.lightBlue">
    <span>{`p={${index}}`}</span>
  </Box>
));

const margins = space.map((size, index) => (
  <Box key={`space${size}`} m={index} bg="lightColors.lightBlue">
    <span>{`m={${index}}`}</span>
  </Box>
));

storiesOf('Box', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(themeDecorator)

  .add('paddings', () => (
    <div>
      <StyledText>
        <a href="https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space">
          https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space
        </a>
      </StyledText>

      {paddings}
    </div>
  ))
  .add('margins', () => (
    <div>
      <StyledText>
        <a href="https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space">
          https://github.com/jxnblk/styled-system/blob/master/docs/api.md#space
        </a>
      </StyledText>

      {margins}
    </div>
  ))
  .add('width', () => (
    <div>
      <StyledText>
        <a href=" https://jxnblk.com/styled-system/#width">
          https://jxnblk.com/styled-system/#width
        </a>
      </StyledText>

      <Box width={1} bg="lightColors.lightBlue" p={3} mb={2}>
        <span>{`w={1}`}</span>
      </Box>
      <Box width={1 / 2} bg="lightColors.lightBlue" p={3} mb={2}>
        <span>{`w={1 / 2}`}</span>
      </Box>
      <Box width={1 / 3} bg="lightColors.lightBlue" p={3} mb={2}>
        <span>{`w={1 / 3}`}</span>
      </Box>
      <Box width={1 / 4} bg="lightColors.lightBlue" p={3} mb={2}>
        <span>{`w={1 / 4}`}</span>
      </Box>
    </div>
  ))
  .add('borders', () => (
    <div>
      <StyledText>
        <a href="https://github.com/jxnblk/styled-system/blob/master/docs/api.md#borders">
          https://github.com/jxnblk/styled-system/blob/master/docs/api.md#borders
        </a>
      </StyledText>

      <Box bg="lightColors.lightBlue" border="2px solid" p={3} mb={2}>
        <span>border="2px solid"</span>
      </Box>
      <Box bg="lightColors.lightBlue" borderBottom="2px solid" p={3} mb={2}>
        <span>borderBottom="2px solid"</span>
      </Box>
      <Box
        bg="lightColors.lightBlue"
        borderLeft="2px solid"
        borderColor="solidColors.red"
        p={3}
        mb={2}>
        <span>borderColor="solidColors.red"</span>
      </Box>
    </div>
  ))
  .add('ratios', () => (
    <div>
      <StyledText>
        <a href="https://github.com/jxnblk/styled-system/blob/master/docs/api.md#layout">
          https://github.com/jxnblk/styled-system/blob/master/docs/api.md#layout
        </a>
      </StyledText>

      <Box bg="lightColors.lightBlue" ratio={1 / 2} mb={2}>
        <span>ratio="1 / 2"</span>
      </Box>
      <Box bg="lightColors.lightBlue" ratio={9 / 16} mb={2}>
        <span>ratio="9 / 16"</span>
      </Box>
      <Box bg="lightColors.lightBlue" ratio={3 / 4} mb={2}>
        <span>ratio="3/ 4"</span>
      </Box>
    </div>
  ));
