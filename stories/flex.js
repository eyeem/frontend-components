/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StyledText from '../src/components/text';
import Flex from '../src/components/flex';
import Box from '../src/components/box';
import StoryWrapper from '../src/Layout/StoryWrapper';
import Themer from './themer';

const themeDecorator = storyFn => <Themer>{storyFn()}</Themer>;

const flexDecorator = storyFn => (
  <React.Fragment>
    <Box px={4}>
      <h1>Flex</h1>
      <p>
        Responsive flexbox layout component. Extends: <strong>Box</strong>, so
        also accepts Box props
      </p>
      <StyledText>
        <a href="https://github.com/jxnblk/styled-system/blob/master/docs/api.md#flexbox">
          https://github.com/jxnblk/styled-system/blob/master/docs/api.md#flexbox
        </a>
      </StyledText>
    </Box>

    {storyFn()}
  </React.Fragment>
);

const justifyVariations = [
  { name: 'justifyContent', prop: 'flex-end' },
  { name: 'justifyContent', prop: 'center' },
  { name: 'justifyContent', prop: 'space-between' },
  { name: 'justifyContent', prop: 'space-around' }
];

const alignVariations = [
  { name: 'alignItems', prop: 'flex-end' },
  { name: 'alignItems', prop: 'center' },
  { name: 'alignItems', prop: 'baseline' }
];

const renderedVariations = (items, style) =>
  items.map(item => {
    const props = { [item.name]: item.prop };
    return (
      <div key={item.name}>
        <p>
          {item.name}={`"${item.prop}"`}
        </p>
        <Flex {...props} p={2} bg="lightColors.lightBlue" style={style}>
          <Box p={2} mr={2} border="1px solid">
            one
          </Box>
          <Box p={2} mr={2} border="1px solid">
            two
          </Box>
          <Box p={2} mr={2} border="1px solid">
            three
          </Box>
        </Flex>
      </div>
    );
  });

storiesOf('Flex', module)
  .addDecorator(story => <StoryWrapper>{story()}</StoryWrapper>)
  .addDecorator((story, context) => withInfo('')(story)(context))
  .addDecorator(flexDecorator)
  .addDecorator(themeDecorator)

  .add('horizontal', () => (
    <div>
      <p>default</p>
      <Flex p={2} bg="lightColors.lightBlue">
        <Box p={2} mr={2} border="1px solid">
          one
        </Box>
        <Box p={2} mr={2} border="1px solid">
          two
        </Box>
        <Box p={2} mr={2} border="1px solid">
          three
        </Box>
      </Flex>

      {renderedVariations(justifyVariations)}

      {renderedVariations(alignVariations, { height: '140px' })}

      <p>flex items</p>
      <Flex p={2} bg="lightColors.lightBlue">
        <Box p={2} mr={2} border="1px solid">
          one
        </Box>
        <Box flex={1} p={2} mr={2} border="1px solid">
          {`two flex={1}`}
        </Box>
        <Box p={2} mr={2} border="1px solid">
          three
        </Box>
      </Flex>

      <p>bonkers flex items</p>
      <Flex p={2} bg="lightColors.lightBlue">
        <Box p={2} mr={2} border="1px solid">
          one
        </Box>
        <Box flex={1} p={2} mr={2} border="1px solid">
          {`two (flex={1})`}
        </Box>
        <Box flex={2} p={2} mr={2} border="1px solid">
          {`three (flex={2})`}
        </Box>
        <Box p={2} mr={2} border="1px solid">
          four
        </Box>
      </Flex>
    </div>
  ));
