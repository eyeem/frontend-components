/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function DownloadIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <g stroke="#fff" strokeWidth="2" fill="none">
        <path d="m3 21h18" />
        <path d="m6 10 6 6 6-6" />
        <path d="m12 2v14" />
      </g>{' '}
    </svg>
  );
}

DownloadIcon.defaultProps = {
  size: 24
};

export default DownloadIcon;
