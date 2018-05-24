import { css } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default css`
  ${styledNormalize};

  @font-face {
    font-family: 'Sailec Regular';
    src: url('/node-static/fonts/sailec/SailecRegular.eot?#iefix');
    src: url('/node-static/fonts/sailec/SailecRegular.eot?#iefix') format('eot'),
      url('/node-static/fonts/sailec/SailecRegular.woff') format('woff'),
      url('/node-static/fonts/sailec/SailecRegular.ttf') format('truetype'),
      url('/node-static/fonts/sailec/SailecRegular.svg#48d599a6-92b5-4d43-a4ac-8959f6971853')
        format('svg');
  }

  @font-face {
    font-family: 'Sailec Bold';
    src: url('/node-static/fonts/sailec/SailecBold.eot?#iefix');
    src: url('/node-static/fonts/sailec/SailecBold.eot?#iefix') format('eot'),
      url('/node-static/fonts/sailec/SailecBold.woff') format('woff'),
      url('/node-static/fonts/sailec/SailecBold.ttf') format('truetype'),
      url('/node-static/fonts/sailec/SailecBold.svg#25e09910-ffc3-4fc4-b0d1-db9a95dface8')
        format('svg');
  }

  @font-face {
    font-family: 'Sailec Light';
    src: url('/node-static/fonts/sailec/sailec-light.eot?#iefix');
    src: url('/node-static/fonts/sailec/sailec-light.eot?#iefix') format('eot'),
      url('/node-static/fonts/sailec/sailec-light.woff') format('woff'),
      url('/node-static/fonts/sailec/sailec-light.ttf') format('truetype'),
      url('/node-static/fonts/sailec/sailec-light.svg#48d599a6-92b5-4d43-a4ac-8959f6971853')
        format('svg');
  }

  body {
    font-family: 'Sailec Regular', sans-serif;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    text-decoration: none;
  }
`;
