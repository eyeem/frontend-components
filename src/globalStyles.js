import { css } from 'styled-components';
import styledNormalize from 'styled-normalize';

const baseUrl = 'https://www.eyeem.com/node-static/fonts/sailec';

export default css`
  ${styledNormalize};

  @font-face {
    font-family: 'Sailec Regular';
    src: url('${baseUrl}/SailecRegular.eot?#iefix');
    src: url('${baseUrl}/SailecRegular.eot?#iefix')
        format('eot'),
      url('${baseUrl}/SailecRegular.woff')
        format('woff'),
      url('${baseUrl}/SailecRegular.ttf')
        format('truetype'),
      url('${baseUrl}/SailecRegular.svg#48d599a6-92b5-4d43-a4ac-8959f6971853')
        format('svg');
  }

  @font-face {
    font-family: 'Sailec Bold';
    src: url('${baseUrl}/SailecBold.eot?#iefix');
    src: url('${baseUrl}/SailecBold.eot?#iefix')
        format('eot'),
      url('${baseUrl}/SailecBold.woff')
        format('woff'),
      url('${baseUrl}/SailecBold.ttf')
        format('truetype'),
      url('${baseUrl}/SailecBold.svg#25e09910-ffc3-4fc4-b0d1-db9a95dface8')
        format('svg');
  }

  @font-face {
    font-family: 'Sailec Light';
    src: url('${baseUrl}/sailec-light.eot?#iefix');
    src: url('${baseUrl}/sailec-light.eot?#iefix')
        format('eot'),
      url('${baseUrl}/sailec-light.woff')
        format('woff'),
      url('${baseUrl}/sailec-light.ttf')
        format('truetype'),
      url('${baseUrl}/sailec-light.svg#48d599a6-92b5-4d43-a4ac-8959f6971853')
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
