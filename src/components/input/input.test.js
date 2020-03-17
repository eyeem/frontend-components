import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Input from './index';

const TEST_PLACEHOLDER = 'test placeholde';
const TEST_VALUE = 'test value';
const TEST_NAME = 'test name';

const testInputProps = {
  required: true,
  value: TEST_VALUE,
  onChange: () => onInputChangedHandler,
  name: TEST_NAME,
  placeholder: TEST_PLACEHOLDER
};

const onInputChangedHandler = () => 'changed';

afterEach(cleanup);

test('it renders default input', () => {
  const { container } = render(<Input inputProps />);
  const component = container.firstChild;
  expect(component).toBeTruthy();
  expect(component.firstChild).toHaveProperty('type');
  expect(component.firstChild.type).toBe('text');
  expect(component).toBeTruthy();
  expect(component).toMatchSnapshot();
});

test('it accepts inputProps', () => {
  const { container } = render(<Input inputProps={testInputProps} />);
  const component = container.firstChild;
  const inputElement = component.firstChild;
  expect(inputElement).toHaveProperty('placeholder');
  expect(inputElement.placeholder).toBe(TEST_PLACEHOLDER);
  expect(inputElement).toHaveProperty('name');
  expect(inputElement.name).toBe(TEST_NAME);
  expect(inputElement).toHaveProperty('required');
  expect(inputElement).toHaveProperty('type');
  expect(inputElement.type).toBe('text');
  expect(inputElement).toHaveProperty('value');
  expect(inputElement.value).toBe(TEST_VALUE);
  expect(component).toMatchSnapshot();
});
