/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function AddToLightboxIcon(props: {
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
        d="M6 10h8m-4-4v8m11-4v11H10M3 3v14h14V3z"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

AddToLightboxIcon.defaultProps = {
  size: 18
};

export default AddToLightboxIcon;
