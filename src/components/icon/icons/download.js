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
      viewBox="0 0 22 22">
      <path d="M12 13.375v-10" stroke="#fff" strokeWidth="1.5" fill="none" />
      <path
        d="M16.25 9.75L12 14 7.75 9.75M4 19.25h16"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

DownloadIcon.defaultProps = {
  size: 18
};

export default DownloadIcon;
