import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, getByText, cleanup, fireEvent } from '@testing-library/react';

import { colors } from '../../theme';
import Buttonv2 from './buttonv2';

const wrapWithTheme = component => (
  <ThemeProvider theme={{ mode: 'dark' }}>{component}</ThemeProvider>
);

afterEach(cleanup);

test('it renders default button', () => {
  const { container } = render(<Buttonv2>Hello World</Buttonv2>);
  const hasRenderedChildText = getByText(container, 'Hello World');
  const component = container.firstChild;
  expect(hasRenderedChildText).toBeTruthy();
  expect(component).toMatchSnapshot();
});

test('it accepts property disabled', () => {
  const { container } = render(<Buttonv2 disabled>Disabled Button</Buttonv2>);
  const button = container.firstChild;
  expect(button).toHaveProperty('disabled');
  expect(button).toMatchSnapshot();
});

test('it accepts property fullWidth', () => {
  const { container } = render(<Buttonv2 fullWidth>FullWidth Button</Buttonv2>);
  const button = container.firstChild;
  expect(button).toHaveStyleRule('width', '100%');
  expect(button).toMatchSnapshot();
});

test('it accepts property icon=checkmark', () => {
  const { container } = render(
    <Buttonv2 icon="checkmark">Icon Button</Buttonv2>
  );
  const button = container.firstChild;
  expect(button.firstChild.nodeName).toBe('svg');
  expect(button).toMatchSnapshot();
});

test('it renders black background in dark mode with outline fill set', () => {
  const { container } = render(
    wrapWithTheme(<Buttonv2 fill="outline">Color Button</Buttonv2>)
  );

  const component = container.firstChild;
  const backgroundColor = colors.blacks.black1;
  expect(component).toHaveStyleRule('background-color', backgroundColor);
  expect(component).toMatchSnapshot();
});

test('onClick handler beeing called', () => {
  const onClickHandler = jest.fn();
  const { container } = render(
    <Buttonv2 onClick={onClickHandler}>Click Button</Buttonv2>
  );
  const button = container.firstChild;
  fireEvent.click(button);
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});
