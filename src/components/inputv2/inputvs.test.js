import React from 'react';
import { render, getByLabelText, cleanup } from '@testing-library/react';

import Inputv2 from './inputv2';

afterEach(cleanup);

test('it renders default input', () => {
  const { container } = render(
    <Inputv2 inputProps={{ placeholder: 'Name', name: 'name' }} />
  );

  const label = getByLabelText(container, 'Name');
  const component = container.firstChild;

  expect(label).toBeTruthy();
  expect(component).toMatchSnapshot();
});

test('it accepts property disabled', () => {
  const { container } = render(
    <Inputv2
      inputProps={{ placeholder: 'Name', disabled: true, name: 'name' }}
    />
  );
  const input = container.querySelector('input');

  expect(input).toHaveProperty('disabled', true);
});
