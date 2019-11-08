/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function ShareIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        fill="none"
        d="M12 11v6m0-10v2m0 13c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

ShareIcon.defaultProps = {
  size: 16
};

export default ShareIcon;
