import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Checkbox from './index';

afterEach(cleanup);

test('it renders default checkbox', () => {
  const { container } = render(<Checkbox />);
  const component = container.firstChild;
  const checkboxElement = component.firstChild;
  const labelElement = checkboxElement.nextSibling;
  expect(checkboxElement.nodeName.toLowerCase()).toBe('input');
  expect(checkboxElement.type).toBe('checkbox');
  expect(labelElement.nodeName.toLowerCase()).toBe('label');
  expect(checkboxElement).toBeTruthy();
  expect(labelElement).toBeTruthy();
  expect(component).toMatchSnapshot();
});

test('it accepts prop checked', () => {
  const onChangeHandler = jest.fn();
  const { container } = render(
    <Checkbox
      inputProps={{ checked: true, onChange: () => onChangeHandler() }}
    />
  );
  const component = container.firstChild;
  const checkboxElement = component.firstChild;
  expect(checkboxElement.checked).toBe(true);
  expect(component).toMatchSnapshot();
});

test('onChange is triggered properly', () => {
  const onChangeHandler = jest.fn();
  const { container } = render(
    <Checkbox
      inputProps={{ checked: true, onChange: () => onChangeHandler() }}
    />
  );
  const component = container.firstChild;
  const checkboxElement = component.firstChild;
  fireEvent.click(checkboxElement);
  expect(onChangeHandler).toHaveBeenCalledTimes(1);
  expect(component).toMatchSnapshot();
});
