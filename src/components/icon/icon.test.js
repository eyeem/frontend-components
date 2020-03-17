import React from 'react';

import { render } from '@testing-library/react';

import Icon from './index';

test('it renders default icon', () => {
  const { container } = render(<Icon type="like" />);
  const component = container.firstChild;
  expect(component).toBeTruthy();
  expect(component.nodeName).toBe('svg');
  expect(component.firstChild.nodeName).toBe('path');
  expect(component).toMatchSnapshot();
});
