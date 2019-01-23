import _ from 'lodash';
import React from 'react';
import { object, text } from '@storybook/addon-knobs';

import { button } from '@storybook/addon-knobs/dist/react';
import Checkbox from '../../src/components/checkbox';
import { makeKnobsFromDefaultProps } from './helpers';

const { defaultProps } = Checkbox;

const inputProps = { checked: true };

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

    case 'inputProps':
      return {
        knobFunction: object,
        args: [value.label, inputProps]
      };

    default:
      return { knobFunction: () => {}, args: [] };
  }
};

const knobs = makeKnobsFromDefaultProps(defaultProps, getOptionsForProp);

export { knobs, getKnobTypeForProp };
