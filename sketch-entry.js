/**
 * sketch-entry.js
 * same setup as other examples
 */
import React from 'react';
import styled from 'styled-components/primitives';
import { Artboard, render } from 'react-sketchapp';
import Button from './src/components/button/';

const Text = styled.Text`
  color: #000000;
`;

export default context => {
  render(
    <Artboard
      name="EyeEm Components"
      style={{
        width: 250
      }}>
      <Text>Buttons</Text>
      <Button color="green">Green</Button>
      <Button color="red">Red</Button>
      <Button color="green" size="small" disabled>
        Green Small
      </Button>
      <Button color="ghostGrey" size="small" disabled>
        Ghost Grey
      </Button>
    </Artboard>,
    context.document.currentPage()
  );
};
