import React from 'react';
import backgrounds from '@storybook/addon-backgrounds';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo, setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { createGlobalStyle } from 'styled-components';
import globalStyles from '../src/globalStyles';
import { colors } from '../src/theme';

const backgroundsDecorator = backgrounds([
  { name: 'dark', value: colors.blacks.black5 },
  { name: 'light', value: colors.whites.white, default: true }
]);

const GlobalStyles = createGlobalStyle`
  ${globalStyles}
`;

const stylesDecorator = storyFn => (
  <React.Fragment>
    <GlobalStyles />
    {storyFn()}
  </React.Fragment>
);

addDecorator(stylesDecorator);
addDecorator(backgroundsDecorator);

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
