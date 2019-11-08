/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function DeleteIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        fill="none"
        d="M5 7v14h14V7M5 7H3V3h18v4h-2M5 7h14M9 1h6m-1 9v7.5M10 10v7.5"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

DeleteIcon.defaultProps = {
  size: 24
};

export default DeleteIcon;
