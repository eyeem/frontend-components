import Textarea from '../../src/components/textarea';
import { text } from '@storybook/addon-knobs';

import { makeKnobsFromDefaultProps } from './helpers';

const { defaultProps } = Textarea;

const getOptionsForProp = prop => {
  switch (prop) {
    default:
      return {};
  }
};

const getKnobTypeForProp = (prop, value) => {
  switch (prop) {
    case 'errorMessage':
      return {
        knobFunction: text,
        args: [value.label, value.defaultValue]
      };

    default:
      return { knobFunction: () => {}, args: [] };
  }
};

const knobs = makeKnobsFromDefaultProps(defaultProps, getOptionsForProp);

export { knobs, getKnobTypeForProp };
