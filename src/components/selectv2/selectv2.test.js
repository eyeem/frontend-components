import React from 'react';
import { render, getByLabelText, cleanup } from 'react-testing-library';

import Selectv2 from './selectv2';

afterEach(cleanup);

const options = [
  { value: 'bananas' },
  { value: 'apples' },
  { value: 'carrots' }
];

test('it renders default select', () => {
  const { container } = render(
    <Selectv2 selectProps={{ label: 'Name', name: 'name', options }} />
  );

  const label = getByLabelText(container, 'Name');
  const component = container.firstChild;

  expect(label).toBeTruthy();
  expect(component).toMatchSnapshot();
});

test('it accepts property disabled', () => {
  const { container } = render(
    <Selectv2
      selectProps={{
        placeholder: 'Name',
        disabled: true,
        name: 'name',
        options
      }}
    />
  );
  const select = container.querySelector('select');

  expect(select).toHaveProperty('disabled', true);
});
