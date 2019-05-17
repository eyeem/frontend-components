// @flow
import styled from 'styled-components';
import Box from '../box';
import StyledText from '../text';
import { colors } from '../../theme';
import { getBorderForState, getLabelColor } from '../v2helpers/colors';

export const StyledLabel = styled.label`
  position: absolute;
  transition: transform 0.2s ease;
  top: 22px;
  color: ${getLabelColor};
  transform-origin: left;
  font-weight: ${props => (props.isActive ? '600' : 'initial')};

  transform: ${props =>
    props.isActive ? 'translateY(-12px) scale(0.8)' : 'translateY(0) scale(1)'};
`;

export const StyledWrapper = styled(Box)`
  padding: 12px 16px;
  position: relative;
  border-width: 1.5px;
  border-style: solid;
  transition: border-color 0.2s ease;
  border-color: ${getBorderForState};
`;

export const ElementWrapper = styled.div`
  height: 96px;
  position: relative;
`;

export const ErrorWrapper = styled(StyledText)`
  position: absolute;
  bottom: 8px;
  left: 0;
  line-height: 16px;
  color: ${colors.solidColors.redv2};
  &:hover,
  &:focus {
    color: ${colors.solidColors.redv2};
  }
`;
