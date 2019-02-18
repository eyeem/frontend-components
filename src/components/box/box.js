import styled from 'styled-components';
import {
  display,
  color,
  bgColor,
  space,
  borders,
  borderColor,
  width,
  ratio,
  flex
} from 'styled-system';

const Box = styled.div`
  ${display}
  ${color}
  ${bgColor}
  ${space}
  ${borders}
  ${borderColor}
  ${width}
  ${ratio}
  ${flex}
`;

Box.propTypes = {
  ...display.propTypes,
  ...color.propTypes,
  ...bgColor.propTypes,
  ...space.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...width.propTypes,
  ...ratio.propTypes,
  /** only to be used for flex-items! */
  ...flex.propTypes
};

Box.displayName = 'Box';

export default Box;
