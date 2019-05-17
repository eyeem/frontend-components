// @flow
import theme from 'styled-theming';
import { colors } from '../../theme';

const borderColorDefault = theme('mode', {
  light: colors.greys.grey3,
  dark: colors.greys.grey2
});

const borderColorDisabled = theme('mode', {
  light: colors.greys.grey4,
  dark: colors.greys.grey1
});

const borderColorHover = theme('mode', {
  light: colors.greys.grey1,
  dark: colors.greys.grey4
});

const borderColorActive = theme('mode', {
  light: colors.blacks.black1,
  dark: colors.whites.white
});

const borderColorInvalid = theme('mode', {
  light: colors.solidColors.redv2,
  dark: colors.solidColors.redv2
});

const labelColorHover = theme('mode', {
  light: colors.greys.grey1,
  dark: colors.greys.grey4
});

const labelColorFocus = theme('mode', {
  light: colors.greys.grey3,
  dark: colors.greys.grey2
});

const labelColor = theme('mode', {
  light: colors.greys.grey3,
  dark: colors.greys.grey2
});

export const textColor = theme('mode', {
  light: colors.blacks.black1,
  dark: colors.whites.white
});

export const getBorderForState = state => {
  if (state.isInvalid) {
    return borderColorInvalid;
  }
  if (state.isFocused) {
    return borderColorActive;
  }
  if (state.isValidated) {
    return borderColorDefault;
  }
  if (state.isDisabled) {
    return borderColorDisabled;
  }
  if (state.isHovered) {
    return state.isInvalid // eslint-disable-line
      ? colors.solidColors.redv2
      : state.isDisabled
      ? borderColorDisabled
      : borderColorHover;
  }

  return borderColorDefault;
};

export const getLabelColor = state => {
  if (state.isHovered) {
    return labelColorHover;
  }

  if (state.isFocused) {
    return labelColorFocus;
  }

  return labelColor;
};
