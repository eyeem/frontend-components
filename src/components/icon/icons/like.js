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
        fill="none"
        d="M2.556 10.31C3.081 15.03 12 20.802 12 20.802s8.919-5.246 9.444-10.492c.524-5.247-2.694-7.437-6.296-6.296C13.597 4.504 12 6.742 12 6.742s-1.597-2.237-3.148-2.728c-3.602-1.14-6.82 1.574-6.296 6.296z"
        stroke="#fff"
        strokeWidth="2"
      />
    </svg>
  );
}

LikeIcon.defaultProps = {
  size: 18
};

export default LikeIcon;
