import React from 'react';
import backgrounds from '@storybook/addon-backgrounds';
import { addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import styled, { createGlobalStyle } from 'styled-components';
import globalStyles from '../src/globalStyles';
import { colors } from '../src/theme';

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;

const CenterStyles = styled.div`
  > div > div {
    margin-top: 100px;
    width: 100%;
  }
`;

const backgroundsDecorator = backgrounds([
  { name: 'dark', value: colors.blacks.black5 },
  { name: 'light', value: colors.whites.white, default: true }
]);
const centerDecorator = storyFn => <CenterStyles>{storyFn()}</CenterStyles>;
const stylesDecorator = storyFn => (
  <React.Fragment>
    <GlobalStyles />
    {storyFn()}
  </React.Fragment>
);

addDecorator(stylesDecorator);
addDecorator(backgroundsDecorator);
addDecorator(centerDecorator);

// addon-info
setDefaults({
  header: false,
  inline: true
});

// addon-options
setOptions({
  name: 'EyeEm Components',
  addonPanelInRight: true,
  url: 'https://github.com/eyeem/frontend-components'
});

/* NOTE: Add all stories here. Use require() syntax so
         global style decorator applies.
*/
require('./ui.all');
require('./button');
require('./input');
require('./icon');
require('./select');
require('./checkbox');
require('./textarea');
require('./radioButton');
require('./text');
