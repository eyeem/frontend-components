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
      <path
        fill="none"
        d="M2.5 12l6.806 7L21.5 5"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

CheckmarkIcon.defaultProps = {
  size: 18
};

export default CheckmarkIcon;
