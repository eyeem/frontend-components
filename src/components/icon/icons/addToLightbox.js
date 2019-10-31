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
      <path d="M3 17V3h14v14H3z" stroke="#fff" strokeWidth="1.5" fill="none" />
      <path
        d="M10 21h11V10M10 6v8m-4-4h8"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

AddToLightboxIcon.defaultProps = {
  size: 18
};

export default AddToLightboxIcon;
