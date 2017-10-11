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
      viewBox="0 0 18 18"
    >
      <path d="m10 8.01v-8.01h-2.01v8.01h-4.316l5.204 5.338 5.468-5.338h-4.35m-10 7.993h18v-1h-18v1" />
    </svg>
  );
}

DownloadIcon.defaultProps = {
  size: 18
};

export default DownloadIcon;
