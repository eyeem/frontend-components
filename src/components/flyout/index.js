import styled from 'styled-components';
import { fromTheme, propsColorFromTheme } from '../../styleUtils';

const Flyout = styled.div`
  position: absolute;
  top: 45px;
  right: inherit;
  bottom: inherit;
  left: 12px;
  margin-right: 12px;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 16px;
  padding: 6px 12px 8px 12px;
  min-width: 100px;
  max-width: 320px;
  width: auto;
  text-align: left;
  white-space: inherit;

  z-index: ${fromTheme('zIndices.flyout')};
  color: ${propsColorFromTheme('fontColor')};
  background: ${propsColorFromTheme('backgroundColor')};

  border-radius: ${fromTheme('borderRadius')};
  box-shadow: 0 0 0 1px ${fromTheme('colors.uncategorized.unnamed3')};
  &:before,
  &:after {
    position: absolute;

    border-width: 0 8px 8px;
    border-color: ${propsColorFromTheme('backgroundColor')} transparent;
    border-style: solid;
    content: '';
    top: -8px;
    left: 16px;

    width: 0;
  }
`;

export default Flyout;
