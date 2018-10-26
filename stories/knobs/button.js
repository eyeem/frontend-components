import _ from 'lodash';
import React from 'react';
import Button from '../../src/components/button';
import { selectV2, boolean, number } from '@storybook/addon-knobs';

import { buttonColors, buttonSizes, icons } from '../../src/styleConfig';
import { button } from '@storybook/addon-knobs/dist/react';

const { defaultProps } = Button;

const colorsOptions = Object.keys(buttonColors).reduce((acc, curr) => {
  acc[curr] = curr;

  return acc;
}, {});

const iconsOptions = icons.buttons.reduce((acc, curr) => {
  acc[curr] = curr;

  return acc;
}, {});

const sizesOptions = Object.keys(buttonSizes).reduce((acc, curr) => {
  acc[curr] = curr;

  return acc;
}, {});

const getOptionsForProp = prop => {
  switch (prop) {
    case 'color':
      return colorsOptions;

    case 'icon':
      return iconsOptions;

    case 'size':
      return sizesOptions;

    case 'progress':
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

    case 'icon':
      return {
        knobFunction: selectV2,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'size':
      return {
        knobFunction: selectV2,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'disabled':
      return {
        knobFunction: boolean,
        args: [value.label, value.defaultValue]
      };

    case 'fullWidth':
      return {
        knobFunction: boolean,
        args: [value.label, value.defaultValue]
      };

    case 'moveIconToLeft':
      return {
        knobFunction: boolean,
        args: [value.label, value.defaultValue]
      };

    case 'spinner':
      return {
        knobFunction: boolean,
        args: [value.label, value.defaultValue]
      };

    case 'progress':
      return {
        knobFunction: number,
        args: [value.label, value.defaultValue, value.options]
      };

    default:
      return { knobFunction: () => {}, args: [] };
  }
};

const knobs = _.reduce(
  defaultProps,
  (result, val, key) => {
    result[key] = {
      defaultValue: val,
      label: key,
      options: getOptionsForProp(key)
    };

    return result;
  },
  {}
);

export { knobs, getKnobTypeForProp };
