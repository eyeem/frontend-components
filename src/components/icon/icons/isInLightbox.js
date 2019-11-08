/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function IsInLightboxIcon(props: {
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
        d="m21 10v11h-11m-4-11h8m-11-7v14h14v-14z"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

IsInLightboxIcon.defaultProps = {
  size: 18
};

export default IsInLightboxIcon;
