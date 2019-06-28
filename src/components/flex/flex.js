import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  alignSelf
} from 'styled-system';

import Box from '../box';

const Flex = styled(Box)`
  display: flex;

  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${alignSelf}
`;

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...alignSelf.propTypes
};

Flex.displayName = 'Flex';

export default Flex;
