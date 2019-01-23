import _reduce from 'lodash/reduce';

const knobPropsFactory = (knobs, getKnobTypeForProp) =>
  _reduce(
    knobs,
    (result, value, key) => {
      const { knobFunction, args } = getKnobTypeForProp(key, value);

      result[key] = knobFunction(...args);

      return result;
    },
    {}
  );

const makeKnobsFromDefaultProps = (defaultProps, getOptionsForProp) =>
  _reduce(
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

export { knobPropsFactory, makeKnobsFromDefaultProps };
