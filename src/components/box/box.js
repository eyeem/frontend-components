import styled from 'styled-components';
import {
  color,
  bgColor,
  space,
  borders,
  borderColor,
  width
} from 'styled-system';

const Box = styled.div`
  ${color}
  ${bgColor}
  ${space}
  ${borders}
  ${borderColor}
  ${width}
`;

Box.propTypes = {
  ...color.propTypes,
  ...bgColor.propTypes,
  ...space.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...width.propTypes
};

Box.displayName = 'Box';

export default Box;
