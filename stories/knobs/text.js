import { select, boolean } from '@storybook/addon-knobs';

import {
  textSizes,
  textTopMargins,
  textColors,
  textFonts,
  textAligns,
  textDisplays
} from '../../src/styleConfig';
import Text from '../../src/components/text';
import { makeKnobsFromDefaultProps } from './helpers';

const { defaultProps } = Text;

const sizesOptions = Object.keys(textSizes).reduce((acc, next) => {
  acc[next] = next;
  return acc;
}, {});

const topMarginsOptions = Object.keys(textTopMargins).reduce((acc, next) => {
  acc[next] = next;
  return acc;
}, {});

const colorsOptions = Object.keys(textColors).reduce((acc, next) => {
  acc[next] = next;
  return acc;
}, {});

const getOptionsForProp = prop => {
  switch (prop) {
    case 'color':
      return colorsOptions;

    case 'size':
      return sizesOptions;

    case 'topMargin':
      return topMarginsOptions;

    case 'align':
      return textAligns;

    case 'font':
      return textFonts;

    case 'display':
      return textDisplays;

    default:
      return {};
  }
};

const getKnobTypeForProp = (prop, value) => {
  switch (prop) {
    case 'ellipsis':
      return {
        knobFunction: boolean,
        args: [value.label, value.defaultValue]
      };

    case 'noWrap':
      return {
        knobFunction: boolean,
        args: [value.label, value.defaultValue]
      };

    case 'underline':
      return {
        knobFunction: boolean,
        args: [value.label, value.defaultValue]
      };

    case 'topMargin':
      return {
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'color':
      return {
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'size':
      return {
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'font':
      return {
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'align':
      return {
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };

    case 'display':
      return {
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };

    default:
      return { knobFunction: () => {}, args: [] };
  }
};

const knobs = makeKnobsFromDefaultProps(defaultProps, getOptionsForProp);

export { knobs, getKnobTypeForProp };
