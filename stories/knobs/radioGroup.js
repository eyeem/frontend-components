import _ from 'lodash';
import React from 'react';
import RadioGroup from '../../src/components/radioGroup';
import { boolean, text } from '@storybook/addon-knobs';

const { defaultProps } = RadioGroup;

// const getOptionsForProp = prop => {
//     switch (prop) {
      
//       default:
//         return {};
//     }
//   };

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
        // options: getOptionsForProp(key)
      };
  
      return result;
    },
    {}
  );

export { knobs, getKnobTypeForProp };