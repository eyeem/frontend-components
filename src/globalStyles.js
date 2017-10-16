import { css } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default css`
  ${styledNormalize} body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`;
