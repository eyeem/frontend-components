import styled from 'styled-components';

import { fromProps } from '../../styleUtils';

import Icon from '../icon/';

const iconLeftStyles = props => {
  if (props.moveIconToLeft) {
    const halfHeight = props.size / 2;
    return `
      position: absolute;
      left: 12px;
      top: calc(50% - ${halfHeight}px);
      margin-right: 0;
      margin-bottom: 0;
    `;
  }
  return '';
};

const StyledIcon = styled(Icon)`
  margin-right: ${fromProps('marginRight')};
  margin-bottom: -2px;
  ${iconLeftStyles};
`;

export default StyledIcon;
