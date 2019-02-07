import { selectV2, boolean, number } from '@storybook/addon-knobs';

import Buttonv2 from '../../src/components/buttonv2';
import {
  buttonColors,
  buttonv2Sizes,
  icons,
  fills
} from '../../src/styleConfig';
import { makeKnobsFromDefaultProps } from './helpers';

const { defaultProps } = Buttonv2;

const colorsOptions = Object.keys(buttonColors).reduce((acc, curr) => {
  acc[curr] = curr;

  return acc;
}, {});

const iconsOptions = icons.buttons.reduce((acc, curr) => {
  acc[curr] = curr;

  return acc;
}, {});

const sizesOptions = Object.keys(buttonv2Sizes).reduce((acc, curr) => {
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
        knobFunction: selectV2,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'fill':
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

const knobs = makeKnobsFromDefaultProps(defaultProps, getOptionsForProp);

export { knobs, getKnobTypeForProp };
