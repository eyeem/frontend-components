import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { createGlobalStyle } from 'styled-components';
import globalStyles from '../src/globalStyles';

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;

const GlobalStylesDecorator = storyFn => (
  <React.Fragment>
    <GlobalStyles />
    {storyFn()}
  </React.Fragment>
);

addDecorator(GlobalStylesDecorator);

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
require('./button');
require('./input');
