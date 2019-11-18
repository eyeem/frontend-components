import theme from 'styled-theming';
import { colors } from '../../theme';

export const backgroundColorDefault = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  }
});

export const backgroundColorHover = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  }
});

export const backgroundColorActive = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.greys.grey3,
    dark: colors.greys.grey2
  }
});

export const backgroundColorDisabled = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.greys.grey4,
    dark: colors.greys.grey1
  }
});

export const borderColorDefault = theme.variants('mode', 'fill', {
  outline: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  },
  solid: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  }
});

export const borderColorHover = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  },
  solid: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  }
});

export const borderColorActive = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey3,
    dark: colors.greys.grey2
  },
  solid: {
    light: colors.greys.grey1,
    dark: colors.greys.grey3
  }
});

export const borderColorDisabled = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey4,
    dark: colors.greys.grey1
  },
  solid: {
    light: colors.greys.grey4,
    dark: colors.greys.grey1
  }
});

export const textColorDefault = theme.variants('mode', 'fill', {
  outline: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  },
  solid: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  }
});

export const textColorActive = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey3,
    dark: colors.greys.grey2
  },
  solid: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  }
});

export const textColorHover = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  },
  solid: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  }
});

export const textColorDisabled = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey4,
    dark: colors.greys.grey1
  },
  solid: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  }
});
