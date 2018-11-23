import _ from 'lodash';
import React from 'react';
import { selectV2, boolean, number } from '@storybook/addon-knobs';
import { button } from '@storybook/addon-knobs/dist/react';

import { icons } from '../../src/styleConfig';
import { colors } from '../../src/theme';
import Icon from '../../src/components/icon';
import { makeKnobsFromDefaultProps } from './helpers';

const { defaultProps } = Icon;

const colorsOptions = Object.keys(colors).reduce((acc, colorType) => {
  Object.keys(colors[colorType]).forEach(
    item =>
      (acc[
        `${colorType}.${item} - ${colors[colorType][item]}`
      ] = `${colorType}.${item}`)
  );
  return acc;
}, {});

const iconsOptions = icons.buttons.reduce((acc, curr) => {
  acc[curr] = curr;

  return acc;
}, {});

const getOptionsForProp = prop => {
  switch (prop) {
    case 'color':
      return colorsOptions;
    case 'type':
      return iconsOptions;
    case 'size':
      return {
        range: true,
        min: 0,
        max: 100,
        step: 1
      };
    default:
      return {};
  }
};

const getKnobTypeForProp = (prop, value) => {
  switch (prop) {
    case 'color':
      return {
        knobFunction: selectV2,
        args: [value.label, value.options, value.defaultValue]
      };
    case 'type':
      return {
        knobFunction: selectV2,
        args: [value.label, value.options, value.defaultValue]
      };
    case 'size':
      return {
        knobFunction: number,
        args: [value.label, value.defaultValue, value.options]
      };

    default:
      return { knobFunction: () => {}, args: [] };
  }
};

const knobs = makeKnobsFromDefaultProps(defaultProps, getOptionsForProp);

export { knobs, getKnobTypeForProp };