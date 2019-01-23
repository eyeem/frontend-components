import React from 'react';
import _ from 'lodash';

import { render, cleanup, getByText } from 'react-testing-library';

import { textColors } from '../../styleConfig';
import { colors } from '../../theme';

import Text from './index';

const TESTING_COLOR = 'link';

afterEach(cleanup);

test('it render default text', () => {
  const { container } = render(<Text>Hello World</Text>);
  const hasRenderedChildText = getByText(container, 'Hello World');
  const component = container.firstChild;
  expect(hasRenderedChildText).toBeTruthy();
  expect(component).toMatchSnapshot();
});

test('it accepts property underline', () => {
    const { container } = render(<Text underline>underline text</Text>);
    const text = container.firstChild;
    expect(text).toHaveStyleRule('text-decoration', 'underline');
    expect(text).toMatchSnapshot();
});

test('it accepts property color', () => {
    const { container } = render(<Text color={TESTING_COLOR}>color text</Text>);
    const component = container.firstChild;
    const colorSelector = textColors[TESTING_COLOR].regular;
    const color = _.get(colors, colorSelector);
    expect(component).toHaveStyleRule('color', color);
    expect(component).toMatchSnapshot();
});

test('it changes color on hover', () => {
    const { container } = render(<Text color={TESTING_COLOR}>color text</Text>);
    const component = container.firstChild;
    const colorSelector = textColors[TESTING_COLOR].hover;
    const color = _.get(colors, colorSelector);
    expect(component).toHaveStyleRule('color', color, {modifier: ':hover'});
    expect(component).toMatchSnapshot();
})

test('it changes color on active', () => {
    const { container } = render(<Text color={TESTING_COLOR}>color text</Text>);
    const component = container.firstChild;
    const colorSelector = textColors[TESTING_COLOR].active;
    const color = _.get(colors, colorSelector);
    expect(component).toHaveStyleRule('color', color, {modifier: ':active'});
    expect(component).toMatchSnapshot();
})
