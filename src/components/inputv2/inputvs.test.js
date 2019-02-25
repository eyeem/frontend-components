import React from 'react';
import { render, getByLabelText, cleanup } from 'react-testing-library';

import Inputv2 from './inputv2';

afterEach(cleanup);

test('it renders default input', () => {
  const { container } = render(
    <Inputv2 name="name" inputProps={{ placeholder: 'Name' }} />
  );

  const label = getByLabelText(container, 'Name');
  const component = container.firstChild;

  expect(label).toBeTruthy();
  expect(component).toMatchSnapshot();
});

test('it accepts property disabled', () => {
  const { container } = render(
    <Inputv2 name="name" inputProps={{ placeholder: 'Name', disabled: true }} />
  );
  const input = container.querySelector('input');

  expect(input).toHaveProperty('disabled', true);
});
