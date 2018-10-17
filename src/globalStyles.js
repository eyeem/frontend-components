import { css } from 'styled-components';
import styledNormalize from 'styled-normalize';

const DEFAULT_BASE_URL = 'https://dtpuu5koy2g08.cloudfront.net/fonts/sailec';

const getBaseUrl = theme => {
  if (theme.fontBase) {
    return theme.fontBase;
  }

  return DEFAULT_BASE_URL;
};

export default ({ theme = {} }) => css`
  ${styledNormalize};

  @font-face {
    font-family: 'Sailec Regular';
    src: url('${getBaseUrl(theme)}/SailecRegular.eot?#iefix');
    src: url('${getBaseUrl(theme)}/SailecRegular.eot?#iefix')
        format('eot'),
      url('${getBaseUrl(theme)}/SailecRegular.woff')
        format('woff'),
      url('${getBaseUrl(theme)}/SailecRegular.ttf')
        format('truetype'),
      url('${getBaseUrl(
        theme
      )}/SailecRegular.svg#48d599a6-92b5-4d43-a4ac-8959f6971853')
        format('svg');
  }

  @font-face {
    font-family: 'Sailec Bold';
    src: url('${getBaseUrl(theme)}/SailecBold.eot?#iefix');
    src: url('${getBaseUrl(theme)}/SailecBold.eot?#iefix')
        format('eot'),
      url('${getBaseUrl(theme)}/SailecBold.woff')
        format('woff'),
      url('${getBaseUrl(theme)}/SailecBold.ttf')
        format('truetype'),
      url('${getBaseUrl(
        theme
      )}/SailecBold.svg#25e09910-ffc3-4fc4-b0d1-db9a95dface8')
        format('svg');
  }

  @font-face {
    font-family: 'Sailec Light';
    src: url('${getBaseUrl(theme)}/sailec-light.eot?#iefix');
    src: url('${getBaseUrl(theme)}/sailec-light.eot?#iefix')
        format('eot'),
      url('${getBaseUrl(theme)}/sailec-light.woff')
        format('woff'),
      url('${getBaseUrl(theme)}/sailec-light.ttf')
        format('truetype'),
      url('${getBaseUrl(
        theme
      )}/sailec-light.svg#48d599a6-92b5-4d43-a4ac-8959f6971853')
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
