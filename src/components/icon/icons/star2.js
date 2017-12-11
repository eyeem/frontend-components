/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function Star2Icon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 14 14">
      <path d="M6.79 11.696l-2.362 1.24c-.49.258-1.094.07-1.35-.42-.103-.194-.138-.417-.1-.634l.45-2.628c.055-.325-.052-.656-.288-.885L1.23 6.505c-.395-.386-.403-1.02-.018-1.414.154-.158.355-.26.572-.292l2.64-.382c.326-.048.607-.252.753-.547l1.18-2.39c.245-.495.844-.7 1.34-.454.197.097.356.257.454.454l1.18 2.39c.148.296.43.5.755.548l2.64.383c.546.08.925.59.845 1.136-.033.217-.135.418-.292.572l-1.91 1.862c-.236.228-.344.56-.288.884l.45 2.628c.094.545-.27 1.062-.816 1.155-.216.037-.44.002-.634-.1l-2.36-1.24c-.292-.155-.64-.155-.93 0z" />
    </svg>
  );
}

Star2Icon.defaultProps = {
  size: 14
};

export default Star2Icon;
