import _ from 'lodash';
import React from 'react';
import Textarea from '../../src/components/textarea';
import { text } from '@storybook/addon-knobs';

import { button, object } from '@storybook/addon-knobs/dist/react';

const { defaultProps } = Textarea;

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

const knobs = _.reduce(
  defaultProps,
  (result, val, key) => {
    result[key] = {
      defaultValue: val,
      label: key,
    };

    return result;
  },
  {}
);

export { knobs, getKnobTypeForProp };
