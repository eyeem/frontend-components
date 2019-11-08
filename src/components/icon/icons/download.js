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
      <path
        fill="none"
        d="M18 9.875L12 16m0 0L6 9.875M12 16c-.01-5.421 0-14 0-14M3 21h18"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

DownloadIcon.defaultProps = {
  size: 18
};

export default DownloadIcon;
