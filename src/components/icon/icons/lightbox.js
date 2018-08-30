/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function LightboxIcon(props: { size: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 30 30">
      <path
        fill="#FFFFFF"
        d="M8 6c0-1 1-2 2-2h14c1 0 2 1 2 2v14c0 1-1 2-2 2H10c-1 0-2-1-2-2V6z"
      />
      <path
        fill="#FFFFFF"
        d="M6 10c0-.6-.4-1-1-1s-1 .5-1 1v14c0 1 1 2 2 2h14c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1-.4-1-1V10z"
      />
    </svg>
  );
}

LightboxIcon.defaultProps = {
  size: 16
};

export default LightboxIcon;
