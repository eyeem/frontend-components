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
      viewBox="0 0 20 20">
      <path d="M7.9 13.37l-4.28-4a1 1 0 0 0-1.37 1.46L8 16.2l9.8-10.74a1 1 0 0 0-1.47-1.35z" />
    </svg>
  );
}

CheckmarkIcon.defaultProps = {
  size: 18
};

export default CheckmarkIcon;
