/* @flow */
import theme from 'styled-theming';
import styled from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';
import { colors } from '../../theme';
import {
  font,
  fromProps,
  alignItems,
  fromPropsTernary
} from '../../styleUtils';

const ComponentFromTagProp = createComponentFromTagProp({
  tag: 'button',
  prop: 'renderAs',
  propsToOmit: [
    'renderAs',
    'progress',
    'sizeValues',
    'spinner',
    'fullWidth',
    'moveIconToLeft',
    'fill',
    'display',
    'alignItems'
  ]
});

const backgroundColorDefault = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  }
});

const backgroundColorHover = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  }
});

const backgroundColorActive = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.greys.grey3,
    dark: colors.greys.grey2
  }
});

const backgroundColorDisabled = theme.variants('mode', 'fill', {
  outline: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  },
  solid: {
    light: colors.greys.grey4,
    dark: colors.greys.grey1
  }
});

const borderColorDefault = theme.variants('mode', 'fill', {
  outline: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  },
  solid: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  }
});

const borderColorHover = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  },
  solid: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  }
});

const borderColorActive = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey3,
    dark: colors.greys.grey2
  },
  solid: {
    light: colors.greys.grey1,
    dark: colors.greys.grey3
  }
});

const borderColorDisabled = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey4,
    dark: colors.greys.grey1
  },
  solid: {
    light: colors.greys.grey4,
    dark: colors.greys.grey1
  }
});

const textColorDefault = theme.variants('mode', 'fill', {
  outline: {
    light: colors.blacks.black1,
    dark: colors.whites.white
  },
  solid: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  }
});

const textColorActive = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey3,
    dark: colors.greys.grey2
  },
  solid: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  }
});

const textColorHover = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey1,
    dark: colors.greys.grey4
  },
  solid: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  }
});

const textColorDisabled = theme.variants('mode', 'fill', {
  outline: {
    light: colors.greys.grey4,
    dark: colors.greys.grey1
  },
  solid: {
    light: colors.whites.white,
    dark: colors.blacks.black1
  }
});

const StyledButtonv2 = styled(ComponentFromTagProp)`
  position: relative;
  display: ${props => props.display};
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${fromPropsTernary('fullWidth', '100%', 'auto')};
  font-size: ${fromProps('sizeValues.fontSize')};
  line-height: ${fromProps('sizeValues.lineHeight')};
  padding: ${fromProps('sizeValues.padding')};
  max-height: ${fromProps('sizeValues.maxHeight')};
  border-color: ${borderColorDefault};
  border-width: 1px;
  border-style: solid;
  background-color: ${backgroundColorDefault};
  color: ${textColorDefault};
  fill: ${textColorDefault};
  ${props => alignItems(props.alignItems)}
  vertical-align: top;
  text-decoration: none;
  text-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-out,
    color 0.2s ease-out, fill 0.2s ease-out;
  pointer-events: all;
  &:focus,
  &:hover {
    color: ${textColorHover};
    fill: ${textColorHover};
    background-color: ${backgroundColorHover};
    border-color: ${borderColorHover};
  }
  &:active {
    background-color: ${backgroundColorActive};
    border-color: ${borderColorActive};
    fill: ${textColorActive};
    color: ${textColorActive};
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: ${backgroundColorDisabled};
    border-color: ${borderColorDisabled};
    fill: ${textColorDisabled};
    color: ${textColorDisabled};
  }
  ${fromPropsTernary('moveIconToLeft', 'padding-left: 32px;', '')} ${font(
    'regular'
  )};
`;

export default StyledButtonv2;
