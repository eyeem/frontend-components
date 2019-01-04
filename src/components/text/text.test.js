import React from 'react';
import { render, cleanup, getByText } from 'react-testing-library';

import Text from './index';

afterEach(cleanup);

test('it render default text', () => {
  const { container } = render(<Text>Hello World</Text>);
  const hasRenderedChildText = getByText(container, 'Hello World');
  const component = container.firstChild;
  expect(hasRenderedChildText).toBeTruthy();
  expect(component).toMatchSnapshot();
});
