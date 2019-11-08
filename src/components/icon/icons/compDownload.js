/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function CompDownloadIcon(props: {
  size?: number,
  className: string,
  id: string
}) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        fill="none"
        d="m15 12s-1.7966 1.7966-3 3m0 0c-1.1872-1.1872-3-3-3-3m3 3v-7m-6-4h-3v3m15-3h3v3m0 10v3h-3m-12 0h-3v-3m0-2v-2m0-2v-2m8 11h-3m8 0h-3m-5-16h3m2 0h3m5 5v2m0 2v2"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

CompDownloadIcon.defaultProps = {
  size: 18
};

export default CompDownloadIcon;
