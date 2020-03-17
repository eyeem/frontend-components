import { select, boolean, number } from '@storybook/addon-knobs';

import Button from '../../src/components/button';
import { buttonColors, buttonSizes, icons, fills } from '../../src/styleConfig';
import { makeKnobsFromDefaultProps } from './helpers';

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

const fillOptions = fills.reduce((acc, curr) => {
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

    case 'fill':
      return fillOptions;

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
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'fill':
      return {
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'icon':
      return {
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'size':
      return {
        knobFunction: select,
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

const knobs = makeKnobsFromDefaultProps(defaultProps, getOptionsForProp);

export { knobs, getKnobTypeForProp };
