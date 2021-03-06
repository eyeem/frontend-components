/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function FlagIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        d="M4 14V3h15l-4 5.5 4 5.5zm0 0v8"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

FlagIcon.defaultProps = {
  size: 16
};

export default FlagIcon;
