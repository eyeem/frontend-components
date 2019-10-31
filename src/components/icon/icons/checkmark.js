/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function CheckmarkIcon(props: {
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
      <path d="M4 12l5 5L20 6" stroke="#fff" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

CheckmarkIcon.defaultProps = {
  size: 18
};

export default CheckmarkIcon;
