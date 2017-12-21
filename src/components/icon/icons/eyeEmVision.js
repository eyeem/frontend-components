/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function EyeEmVision(props: { size?: number, className: string }) {
  return (
    <svg
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 14">
      <path d="M8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5M0 6c0 .286 2.38 6 8 6 4.78 0 8-6 8-6s-3.02-6-8-6C2.314 0 0 5.714 0 6z" />
      <circle cx="8" cy="6" r="3" />
    </svg>
  );
}

EyeEmVision.defaultProps = {
  size: 16
};

export default EyeEmVision;
