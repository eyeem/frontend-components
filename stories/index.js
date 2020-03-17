import React from 'react';
import { addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import styled, { createGlobalStyle } from 'styled-components';
import globalStyles from '../src/globalStyles';

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;

const CenterStyles = styled.div`
  > div > div {
    margin-top: 100px;
    width: 100%;
  }
`;

const centerDecorator = storyFn => <CenterStyles>{storyFn()}</CenterStyles>;
const stylesDecorator = storyFn => (
  <React.Fragment>
    <GlobalStyles />
    {storyFn()}
  </React.Fragment>
);

addDecorator(stylesDecorator);
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
require('./buttonv2');
require('./accordion');
require('./button');
require('./input');
require('./inputv2');
require('./icon');
require('./select');
require('./selectv2');
require('./checkbox');
require('./textarea');
require('./radioButton');
require('./text');
require('./box');
require('./flex');
