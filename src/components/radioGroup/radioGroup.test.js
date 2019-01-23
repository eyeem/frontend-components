import React from 'react';
import { render } from 'react-testing-library';
import RadioGroup from './index';

test('it renders default radio group with 2 options', () => {
  const onChangeHandler = jest.fn();
  const testingOptions = [
    { text: 'firstText', value: 'firstValue' },
    { text: 'secondText', value: 'secondValue' }
  ];
  const testInputProps = { value: 'firstValue', onChange: onChangeHandler };
  const { container } = render(
    <RadioGroup inputProps={testInputProps} options={testingOptions} checked />
  );
  const component = container.firstChild;
  expect(component).toBeTruthy();
  expect(component).toMatchSnapshot();
});
