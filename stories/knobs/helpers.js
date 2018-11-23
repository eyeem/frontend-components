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

export { knobPropsFactory, makeKnobsFromDefaultProps };
