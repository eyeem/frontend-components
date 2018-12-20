import React from 'react';
import styled from 'styled-components';
import { render, getByText } from 'react-testing-library';

import Button from './button';

test('it renders default button', () => {
  const { container } = render(<Button>Hello World</Button>);
  const hasRenderedChildText = getByText(container, 'Hello World');
  const component = container.firstChild;

  expect(hasRenderedChildText).toBeTruthy();
  expect(component).toMatchSnapshot();
});
