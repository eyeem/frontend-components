import { select, number } from '@storybook/addon-knobs';

import { icons } from '../../src/styleConfig';
import Icon from '../../src/components/icon';
import { makeKnobsFromDefaultProps, colorsOptions } from './helpers';

const { defaultProps } = Icon;

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
        knobFunction: select,
        args: [value.label, value.options, value.defaultValue]
      };
    case 'type':
      return {
        knobFunction: select,
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
