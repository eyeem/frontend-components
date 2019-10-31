/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function LikeIcon(props: { size?: number, className: string }) {
  return (
    <svg
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 24 24">
      <path
        d="M4 13S-.5 8 4 4c4-3.5 8 1 8 1s4-4.5 8-1c4.5 4 0 9 0 9l-8 8-8-8z"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

LikeIcon.defaultProps = {
  size: 18
};

export default LikeIcon;
