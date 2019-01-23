import React from 'react';
import _ from 'lodash';

import { render, getByText, cleanup, fireEvent } from 'react-testing-library';

import { colors } from '../../theme';
import { buttonColors } from '../../styleConfig';
import Button from './button';

const TESTING_COLOR = 'orange';

afterEach(cleanup);

test('it renders default button', () => {
  const { container } = render(<Button>Hello World</Button>);
  const hasRenderedChildText = getByText(container, 'Hello World');
  const component = container.firstChild;
  expect(hasRenderedChildText).toBeTruthy();
  expect(component).toMatchSnapshot();
});

test('it accepts property disabled', () => {
  const { container } = render(<Button disabled>Disabled Button</Button>);
  const button = container.firstChild;
  expect(button).toHaveProperty('disabled');
  expect(button).toMatchSnapshot();
});

test('it accepts property fullWidth', () => {
  const { container } = render(<Button fullWidth>FullWidth Button</Button>);
  const button = container.firstChild;
  expect(button).toHaveStyleRule('width', '100%');
  expect(button).toMatchSnapshot();
});

test('it accepts property icon=checkmark', () => {
  const { container } = render(<Button icon="checkmark">Icon Button</Button>);
  const button = container.firstChild;
  expect(button.firstChild.nodeName).toBe('svg');
  expect(button).toMatchSnapshot();
});

test('it accepts property color with predefined eyeem color', () => {
  const { container } = render(
    <Button color={TESTING_COLOR}>Color Button</Button>
  );
  const component = container.firstChild;
  const colorSelector = buttonColors[TESTING_COLOR].bgRegular;
  const backgroundColor = _.get(colors, colorSelector);
  expect(component).toHaveStyleRule('background-color', backgroundColor);
  expect(component).toMatchSnapshot();
});

test('it changes color on hover', () => {
  const { container } = render(
    <Button color={TESTING_COLOR}>Hover Button</Button>
  );
  const component = container.firstChild;
  const colorSelector = buttonColors[TESTING_COLOR].bgHover;
  const hoverColor = _.get(colors, colorSelector);
  expect(component).toHaveStyleRule('background-color', hoverColor, {
    modifier: ':hover'
  });
  expect(component).toMatchSnapshot();
});

test('onClick handler beeing called', () => {
  const onClickHandler = jest.fn();
  const { container } = render(
    <Button onClick={onClickHandler}>Click Button</Button>
  );
  const button = container.firstChild;
  fireEvent.click(button);
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});
