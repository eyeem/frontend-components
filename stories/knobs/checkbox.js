import _ from 'lodash';
import React from 'react';
import Checkbox from '../../src/components/checkbox';
import { object, text } from '@storybook/addon-knobs';

import { button } from '@storybook/addon-knobs/dist/react';

const { defaultProps } = Checkbox;

const inputProps = {checked: true}

const getKnobTypeForProp = (prop, value) => {
  switch (prop) {
    case 'errorMessage':
      return {
        knobFunction: text,
        args: [value.label, value.defaultValue]
      };
    
    case 'inputProps':
      return {
          knobFunction: object,
          args: [value.label, inputProps]
      }

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
