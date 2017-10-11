import styled from 'styled-components';

import { fromPropsTernary } from '../../styleUtils';

const FormRow = styled.div`
  position: relative;
  margin-top: ${fromPropsTernary('largeMargin', 40, 16)}px;
  &:first-child {
    margin-top: 0;
  }
`;

export default FormRow;
