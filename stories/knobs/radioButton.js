import _ from 'lodash';
import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import RadioGroup from '../../src/components/radioGroup';
import { makeKnobsFromDefaultProps } from './helpers';

const { defaultProps } = RadioGroup;

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
