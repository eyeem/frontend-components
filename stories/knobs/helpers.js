import _ from 'lodash';
import { colors } from '../../src/theme';

const knobPropsFactory = (knobs, getKnobTypeForProp) =>
  _.reduce(
    knobs,
    (result, value, key) => {
      const { knobFunction, args } = getKnobTypeForProp(key, value);

      result[key] = knobFunction(...args);

      return result;
    },
    {}
  );

const makeKnobsFromDefaultProps = (defaultProps, getOptionsForProp) =>
  _.reduce(
    defaultProps,
    (result, val, key) => {
      result[key] = {
        defaultValue: val,
        label: key,
        options: getOptionsForProp(key)
      };

      return result;
    },
    {}
  );

const colorsOptions = Object.keys(colors).reduce((acc, colorType) => {
  Object.keys(colors[colorType]).forEach(item => {
    acc[
      `${colorType}.${item} - ${colors[colorType][item]}`
    ] = `${colorType}.${item}`;

    return acc;
  });
  return acc;
}, {});

export { colorsOptions, knobPropsFactory, makeKnobsFromDefaultProps };
