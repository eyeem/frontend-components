import React from 'react';

import { render } from 'react-testing-library';

import Select from './index';

test('it renders default select with 2 options', () => {
  const testingOptions = [
    { text: 'firstText', value: 'firstValue' },
    { text: 'secondText', value: 'secondValue' }
  ];
  const { container } = render(<Select options={testingOptions} />);
  const component = container.firstChild;
  const selectElement = component.firstChild;
  expect(component).toBeTruthy();
  expect(selectElement.nodeName.toLowerCase()).toBe('select');
  expect(selectElement.childNodes.length).toBe(2);
  expect(selectElement.childNodes[0].nodeName.toLowerCase()).toBe('option');
  expect(selectElement.childNodes[0].value).toBe(testingOptions[0].value);
  expect(selectElement.childNodes[0].textContent).toBe(testingOptions[0].text);
  expect(selectElement.childNodes[1].nodeName.toLowerCase()).toBe('option');
  expect(selectElement.childNodes[1].value).toBe(testingOptions[1].value);
  expect(selectElement.childNodes[1].textContent).toBe(testingOptions[1].text);
  expect(component).toMatchSnapshot();
});
